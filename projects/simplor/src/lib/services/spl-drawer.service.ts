import { ComponentRef, EventEmitter, Injectable, Injector, Type } from '@angular/core';
import { SplOverlayServiceLike } from '../interfaces/spl-overlay-service-like';
import { SplOverlayService } from './spl-overlay.service';
import { SplOverlayRefLike } from '../interfaces/spl-overlay-ref-like';
import { CanUndefined } from '../utils/type.util';
import { SplDrawerBackdropComponent } from '../components/spl-drawer-backdrop/spl-drawer-backdrop.component';
import { SplDrawerWrapperComponent } from '../components/spl-drawer-wrapper/spl-drawer-wrapper.component';
import { SplLogger } from '../utils/logger.util';
import { SplOverlayBaseOptions } from '../interfaces/spl-overlay-base-options';
import { SplOverlayRefCommonOptions } from '../interfaces/spl-overlay-ref-common-options';

/**
 * A type that defines the starting direction of the drawer.
 * If 'top', it appears from top to bottom and disappears from bottom to top.
 * If 'bottom', it appears from bottom to top and disappears from top to bottom.
 * If 'left', it appears from left to right and disappears from right to left.
 * If 'right', it appears from right to left and disappears from left to right.
 */
export type SplDrawerStartingDirection = 'top' | 'bottom' | 'left' | 'right';

/** Interface for options that can be set when opening the drawer. */
export interface SplDrawerOptions<Data> extends SplOverlayBaseOptions<Data> {
  /** Specifies the starting direction of the drawer. */
  startingDirection: SplDrawerStartingDirection;
}

/** Injection token for data to be injected into the drawer. */
export const SPL_DRAWER_DATA = 'SPL_DRAWER_DATA';

/** Injection token for startingDirection to be injected into Drawer. */
export const SPL_DRAWER_STARTING_DIRECTION = 'SPL_DRAWER_STARTING_DIRECTION';

/**
 * A service for opening a component as a drawer.
 * Because SplOverlayService is injected and used internally, the drawer is created within SplOverlayOutletComponent.
 */
@Injectable({
  providedIn: 'root',
})
export class SplDrawerService implements SplOverlayServiceLike {
  constructor(private _overlayService: SplOverlayService) {}

  /**
   * Opens the component as a drawer overlay and returns SplDrawerRef.
   * If the component is already open and multi option is false, an already open SplDrawerRef is returned.
   * @param component - A component to be opened as a drawer.
   * @param options - Options to apply when opening the drawer.
   */
  open<Comp, Data = any, Result = any>(
    component: Type<Comp>,
    options: SplDrawerOptions<Data>,
  ): SplDrawerRef<Comp, Data, Result> {
    const { multi = false } = options;

    const existingDrawerRef = this._overlayService.findOverlayRef(component);

    if (existingDrawerRef && !multi) {
      return existingDrawerRef as SplDrawerRef<Comp, Data, Result>;
    }

    const drawerRef = new SplDrawerRef<Comp, Data, Result>({
      ...options,
      component,
      viewContainerRef: this._overlayService.outletViewContainerRef,
      service: this,
    });

    this._overlayService.appendOpenedOverlay(drawerRef);

    return drawerRef;
  }

  /**
   * Closes the given SplDrawerRef.
   * If you provide a result, you can pass the value to the onClose emitter.
   * @param drawerRef - SplDrawerRef to close.
   * @param result - Result to be passed to the onClose emitter.
   */
  close(drawerRef: SplDrawerRef, result?: any) {
    this._overlayService.close(drawerRef, result);
  }

  /** Close the last opened SplDrawerRef. */
  closeLatest() {
    const { openedOverlays } = this._overlayService;

    let latestDrawerRef: CanUndefined<SplDrawerRef> = undefined;

    for (let i = openedOverlays.length - 1; i > -1; i--) {
      const overlayRef = openedOverlays[i] as SplOverlayRefLike<any, any, any, any>;

      if (overlayRef instanceof SplDrawerRef) {
        latestDrawerRef = overlayRef;
        break;
      }
    }

    if (latestDrawerRef) {
      this._overlayService.close(latestDrawerRef);
    }
  }
}

/**
 * Reference class for a component opened as a drawer.
 * It renders backdrop, wrapper, and component to outlet, and provides methods to manage drawer.
 */
export class SplDrawerRef<Comp = any, Data = any, Result = any>
  implements SplOverlayRefLike<SplDrawerService, Comp, SplDrawerBackdropComponent, Result>
{
  /** ComponentRef for open component. */
  readonly componentRef: ComponentRef<Comp>;

  /** ComponentRef for drawer backdrop. */
  readonly backdropRef: ComponentRef<SplDrawerBackdropComponent>;

  /** ComponentRef for drawer wrapper. */
  readonly wrapperRef: ComponentRef<SplDrawerWrapperComponent>;

  /** SplDrawerService. */
  readonly service: SplDrawerService;

  /**
   * Emitter to be emitted when the drawer is closed.
   * Result value can be passed.
   */
  onClose = new EventEmitter<CanUndefined<Result>>();

  /** Closed state of drawer. */
  closed = false;

  /** Logger for SplDrawerRef. */
  private readonly _logger = new SplLogger('SplDrawerRef');

  constructor(options: SplDrawerOptions<Data> & SplOverlayRefCommonOptions<SplDrawerService, Comp>) {
    const {
      component,
      viewContainerRef,
      styles = {},
      classes = [],
      data = {},
      service,
      startingDirection,
      providers = [],
    } = options;

    this.service = service;
    this.backdropRef = viewContainerRef.createComponent(SplDrawerBackdropComponent, {
      injector: Injector.create({
        providers: [
          ...providers,
          {
            provide: SplDrawerRef,
            useValue: this,
          },
        ],
      }),
    });

    this.wrapperRef = viewContainerRef.createComponent(SplDrawerWrapperComponent, {
      injector: Injector.create({
        providers: [
          ...providers,
          {
            provide: SPL_DRAWER_STARTING_DIRECTION,
            useValue: startingDirection,
          },
        ],
      }),
    });

    this.wrapperRef.changeDetectorRef.detectChanges();

    this.componentRef = this.wrapperRef.instance.viewContainerRef.createComponent(component, {
      injector: Injector.create({
        providers: [
          ...providers,
          {
            provide: SPL_DRAWER_DATA,
            useValue: data,
          },
          {
            provide: SplDrawerRef,
            useValue: this,
          },
        ],
      }),
    });

    this.updateStyles(styles);
    this.addClasses('spl-drawer', ...classes);
  }

  /** Destroy the ComponentRef of the backdrop and wrapper. */
  destroy(): void {
    this._logger.debug('Destroy drawer component and backdrop');

    // The component is rendered inside the wrapper, and since the wrapper has animation,
    // the ComponentRef of the wrapper, not the component, is destroyed.
    this.wrapperRef.destroy();
    this.backdropRef.destroy();
  }

  /**
   * Closes the current component with the result.
   * The result is emitted through the onClose emitter.
   * @param result - Result to be passed to onClose emitter.
   */
  close(result?: Result): void {
    if (!this.closed) {
      this.closed = true;
      this._logger.debug('Close drawerRef');
      this.service.close(this, result);
    }
  }

  /**
   * Update the style of the wrapper.
   * @param styles - This must be a partial object of CSSStyleDeclaration.
   */
  updateStyles(styles: Partial<CSSStyleDeclaration>): void {
    if (!this.closed) {
      for (const stylesKey in styles) {
        this.wrapperRef.instance.drawerContainer.nativeElement.style[stylesKey] = styles[stylesKey]!;
      }
    }
  }

  /**
   * Adds additional classes to the wrapper.
   * @param classes - Classes to add.
   */
  addClasses(...classes: string[]): void {
    if (!this.closed) {
      this.wrapperRef.instance.drawerContainer.nativeElement.classList.add(...classes);
    }
  }

  /**
   * Removes classes from the wrapper.
   * @param classes - Classes to remove.
   */
  removeClasses(...classes: string[]): void {
    if (!this.closed) {
      this.wrapperRef.location.nativeElement.classList.remove(...classes);
    }
  }
}
