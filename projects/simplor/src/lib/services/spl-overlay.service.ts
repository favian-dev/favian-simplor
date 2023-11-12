import {
  ApplicationRef,
  ComponentRef,
  EventEmitter,
  inject,
  Injectable,
  Injector,
  PLATFORM_ID,
  Type,
  ViewContainerRef,
} from '@angular/core';
import { SplOverlayOutletComponent } from '../components/spl-overlay-outlet/spl-overlay-outlet.component';
import { SplLogger } from '../utils/logger.util';
import { CanUndefined } from '../utils/type.util';
import { SplOverlayServiceLike } from '../interfaces/spl-overlay-service-like';
import { SplOverlayRefLike } from '../interfaces/spl-overlay-ref-like';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { SplOverlayBaseOptions } from '../interfaces/spl-overlay-base-options';
import { SplOverlayRefCommonOptions } from '../interfaces/spl-overlay-ref-common-options';
import { SplError } from '../utils/error.util';

/**
 * A service for opening a component as an overlay.
 * Because SplOverlayService is injected and used internally, the overlay is created within SplOverlayOutletComponent.
 */
export interface SplOverlayOptions<Data> extends SplOverlayBaseOptions<Data> {
  /** */
  backdrop?: Type<any>;
}

/** Injection token for data to be injected into the overlay. */
export const SPL_OVERLAY_DATA = 'SPL_OVERLAY_DATA';

/**
 * A service for opening a component as an overlay.
 * It manages basic overlays and all overlay-like components should be rendered inside the registered outlet of this service.
 */
@Injectable({
  providedIn: 'root',
})
export class SplOverlayService implements SplOverlayServiceLike {
  /**
   * Array of all opened SplOverlayRefs.
   * Every SplOverlayRefLike must be managed by adding to this array.
   */
  readonly openedOverlays: SplOverlayRef[] = [];

  /** Logger for SplOverlayService. */
  private readonly _logger = new SplLogger('SplOverlayService');

  /** Current running platform id. */
  private readonly _platformId: Object;

  /** Injected Document object to listen 'escape' keydown event. */
  private readonly _document: Document;

  /** Injected ApplicationRef to get ViewContainerRef of AppRoot. */
  private readonly _applicationRef: ApplicationRef;

  /** Injected ViewContainerRef fo AppRoot to render SplOverlayOutletComponent. */
  private _rootViewContainerRef?: ViewContainerRef;

  /** ComponentRef of rendered SplOverlayOutletComponent. */
  private _overlayOutletComponentRef?: ComponentRef<SplOverlayOutletComponent>;

  /** Interval timer for waiting for the ready state of AppComponent. */
  private _initializeTimer: any;

  constructor() {
    this._platformId = inject(PLATFORM_ID);
    this._document = inject(DOCUMENT);
    this._applicationRef = inject(ApplicationRef);

    if (isPlatformBrowser(this._platformId)) {
      this._initializeOutlet();

      this._document.addEventListener('keydown', (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          this.closeLatest();
        }
      });
    }
  }

  /** Returns ViewContainerRef of AppRoot. */
  get outletViewContainerRef(): CanUndefined<ViewContainerRef> {
    return this._overlayOutletComponentRef?.instance.viewContainerRef;
  }

  /**
   * Opens the component as an overlay and returns SplOverlayRef.
   * If the component is already open and multi option is false, an already open SplOverlayRef is returned.
   * @param component - A component to be opened as an overlay.
   * @param options - Options to apply when opening the overlay.
   */
  open<Comp, Data = any, Result = any>(
    component: Type<Comp>,
    options: SplOverlayOptions<Data> = {},
  ): SplOverlayRef<Comp, Data, Result> {
    if (!this.outletViewContainerRef) {
      throw new SplError('outletViewContainerRef is not ready');
    }

    const { multi = false } = options;

    const existingOverlayRef = this.findOverlayRef(component);

    if (existingOverlayRef && !multi) {
      return existingOverlayRef as SplOverlayRef<Comp, Data, Result>;
    }

    const overlayRef = new SplOverlayRef<Comp, Data, Result>({
      ...options,
      component,
      viewContainerRef: this.outletViewContainerRef,
      service: this,
    });

    this.openedOverlays.push(overlayRef);

    return overlayRef;
  }

  /**
   * Closes the given SplOverlayRef.
   * If you provide a result, you can pass the value to the onClose emitter.
   * @param overlayRef - SplOverlayRef to close.
   * @param result - Result to be passed to the onClose emitter.
   */
  close(overlayRef: SplOverlayRefLike<any, any, any, any>, result?: any): void {
    const index = this.openedOverlays.findIndex((overlayRefItem) => overlayRefItem === overlayRef);

    if (index !== -1) {
      this.openedOverlays.splice(index, 1);
    }

    overlayRef.onClose.emit(result);
    overlayRef.destroy();
  }

  /** Close the last opened SplModalRef. */
  closeLatest(): void {
    const lastOpenedOverlay = this.openedOverlays.pop();

    if (lastOpenedOverlay) {
      this.close(lastOpenedOverlay);
    }
  }

  /**
   * Appends an OverlayRefLike to manage by this service.
   * @param overlayRefLike - Class implements SplOverlayRefLike.
   */
  appendOpenedOverlay(overlayRefLike: SplOverlayRefLike<any, any, any, any>): void {
    this.openedOverlays.push(overlayRefLike as any);
  }

  /**
   * Find an opened SplOverlayRefLike with given component from the opened overlays.
   * It returns only the first SplOverlayRefLike found.
   * @param component - Component to find an opened overlay.
   */
  findOverlayRef(component: Type<any>): CanUndefined<SplOverlayRefLike<any, any, any, any>> {
    return this.openedOverlays.find((openedOverlayItem) => openedOverlayItem.componentRef.componentType === component);
  }

  /** After waiting for the AppComponent to be ready, initialize the overlay outlet. */
  private _initializeOutlet(): void {
    clearInterval(this._initializeTimer);

    this._initializeTimer = setInterval(() => {
      if (this._applicationRef.components[0]) {
        this._rootViewContainerRef = this._applicationRef.components[0].injector.get(ViewContainerRef);
        this._overlayOutletComponentRef = this._rootViewContainerRef.createComponent(SplOverlayOutletComponent);

        clearInterval(this._initializeTimer);

        this._logger.debug('OverlayOutlet is initialized');
      }
    });
  }
}

/**
 * Reference class for a component opened as an overlay.
 * It renders backdrop, and component to outlet, and provides methods to manage overlay.
 */
export class SplOverlayRef<Comp = any, Data = any, Result = any>
  implements SplOverlayRefLike<SplOverlayService, Comp, any, Result>
{
  /** ComponentRef for open backdrop. */
  readonly backdropRef?: ComponentRef<any>;

  /** ComponentRef for open component. */
  readonly componentRef: ComponentRef<Comp>;

  /** SplOverlayService. */
  readonly service: SplOverlayService;

  /**
   * Emitter to be emitted when the modal is closed.
   * Result value can be passed.
   */
  onClose = new EventEmitter<CanUndefined<Result>>();

  /** Closed state of modal. */
  closed = false;

  /** Logger for SplOverlayRef. */
  private readonly _logger = new SplLogger('SplOverlayRef');

  constructor(options: SplOverlayOptions<Data> & SplOverlayRefCommonOptions<SplOverlayService, Comp>) {
    const {
      component,
      viewContainerRef,
      styles = {},
      classes = [],
      data = {},
      backdrop,
      service,
      providers = [],
    } = options;

    this.service = service;

    if (backdrop) {
      this.backdropRef = viewContainerRef.createComponent(backdrop);

      this.backdropRef.changeDetectorRef.detectChanges();
    }

    // Create component.
    this.componentRef = viewContainerRef.createComponent(component, {
      injector: Injector.create({
        providers: [
          ...providers,
          {
            provide: SPL_OVERLAY_DATA,
            useValue: data,
          },
          {
            provide: SplOverlayRef,
            useValue: this,
          },
        ],
      }),
    });

    this.updateStyles(styles);
    this.addClasses('spl-overlay', ...classes);

    this.componentRef.changeDetectorRef.detectChanges();
  }

  /** Destroy the ComponentRef of the backdrop and wrapper. */
  destroy(): void {
    this._logger.debug('Destroy overlay component and backdrop');
    this.componentRef.destroy();
    this.backdropRef?.destroy();
  }

  /**
   * Closes the current component with the result.
   * The result is emitted through the onClose emitter.
   * @param result - Result to be passed to onClose emitter.
   */
  close(result?: Result): void {
    if (!this.closed) {
      this.closed = true;
      this._logger.debug('Close overlayRef');
      this.service.close(this, result);
    }
  }

  /**
   * Update the style of the open component.
   * @param styles - This must be a partial object of CSSStyleDeclaration.
   */
  updateStyles(styles: Partial<CSSStyleDeclaration>): void {
    if (!this.closed) {
      for (const stylesKey in styles) {
        this.componentRef.location.nativeElement.style[stylesKey] = styles[stylesKey];
      }
    }
  }

  /**
   * Adds additional classes to the open component.
   * @param classes - Classes to add.
   */
  addClasses(...classes: string[]): void {
    if (!this.closed) {
      this.componentRef.location.nativeElement.classList.add(...classes);
    }
  }

  /**
   * Removes classes from the open component.
   * @param classes - Classes to remove.
   */
  removeClasses(...classes: string[]): void {
    if (!this.closed) {
      this.componentRef.location.nativeElement.classList.remove(...classes);
    }
  }
}
