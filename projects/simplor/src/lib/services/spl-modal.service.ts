import { ComponentRef, EventEmitter, Injectable, Injector, Type } from '@angular/core';
import { SplLogger } from '../utils/logger.util';
import { CanUndefined } from '../utils/type.util';
import { SplModalBackdropComponent } from '../components/spl-modal-backdrop/spl-modal-backdrop.component';
import { SplModalWrapperComponent } from '../components/spl-modal-wrapper/spl-modal-wrapper.component';
import { SplOverlayService } from './spl-overlay.service';
import { SplOverlayRefLike } from '../interfaces/spl-overlay-ref-like';
import { SplOverlayServiceLike } from '../interfaces/spl-overlay-service-like';
import { SplOverlayBaseOptions } from '../interfaces/spl-overlay-base-options';
import { SplOverlayRefCommonOptions } from '../interfaces/spl-overlay-ref-common-options';
import { SplError } from '../utils/error.util';

/** Injection token for data to be injected into the modal. */
export const SPL_MODAL_DATA = 'SPL_MODAL_DATA';

/**
 * A service for opening a component as a modal.
 * Because SplOverlayService is injected and used internally, the modal is created within SplOverlayOutletComponent.
 */
@Injectable({
  providedIn: 'root',
})
export class SplModalService implements SplOverlayServiceLike {
  constructor(private _overlayService: SplOverlayService) {}

  /**
   * Opens the component as a modal overlay and returns SplModalRef.
   * If the component is already open and multi option is false, an already open SplModalRef is returned.
   * @param component - A component to be opened as a modal.
   * @param options - Options to apply when opening the modal.
   */
  open<Comp, Data = any, Result = any>(
    component: Type<Comp>,
    options: SplOverlayBaseOptions<Data> = {},
  ): SplModalRef<Comp, Data, Result> {
    if (!this._overlayService.outletViewContainerRef) {
      throw new SplError('outletViewContainerRef is not ready');
    }

    const { multi = false } = options;

    const existingModalRef = this._overlayService.findOverlayRef(component);

    if (existingModalRef && !multi) {
      return existingModalRef as SplModalRef<Comp, Data, Result>;
    }

    const modalRef = new SplModalRef<Comp, Data, Result>({
      ...options,
      component,
      viewContainerRef: this._overlayService.outletViewContainerRef,
      service: this,
    });

    this._overlayService.appendOpenedOverlay(modalRef);

    return modalRef;
  }

  /**
   * Closes the given SplModalRef.
   * If you provide a result, you can pass the value to the onClose emitter.
   * @param modalRef - SplModalRef to close.
   * @param result - Result to be passed to the onClose emitter.
   */
  close(modalRef: SplModalRef, result?: any): void {
    this._overlayService.close(modalRef, result);
  }

  /** Close the last opened SplModalRef. */
  closeLatest(): void {
    const { openedOverlays } = this._overlayService;

    let latestModalRef: CanUndefined<SplModalRef> = undefined;

    for (let i = openedOverlays.length - 1; i > -1; i--) {
      const overlayRef = openedOverlays[i] as SplOverlayRefLike<any, any, any, any>;

      if (overlayRef instanceof SplModalRef) {
        latestModalRef = overlayRef;
        break;
      }
    }

    if (latestModalRef) {
      this._overlayService.close(latestModalRef);
    }
  }
}

/**
 * Reference class for a component opened as a modal.
 * It renders backdrop, wrapper, and component to outlet, and provides methods to manage modal.
 */
export class SplModalRef<Comp = any, Data = any, Result = any>
  implements SplOverlayRefLike<SplModalService, Comp, SplModalBackdropComponent, Result>
{
  /** ComponentRef for open component. */
  readonly componentRef: ComponentRef<Comp>;

  /** ComponentRef for modal backdrop. */
  readonly backdropRef: ComponentRef<SplModalBackdropComponent>;

  /** ComponentRef for modal wrapper. */
  readonly wrapperRef: ComponentRef<SplModalWrapperComponent>;

  /** SplModalService. */
  readonly service: SplModalService;

  /**
   * Emitter to be emitted when the modal is closed.
   * Result value can be passed.
   */
  onClose = new EventEmitter<CanUndefined<Result>>();

  /** Closed state of modal. */
  closed = false;

  /** Logger for SplModalRef. */
  private readonly _logger = new SplLogger('SplModalRef');

  constructor(options: SplOverlayBaseOptions<Data> & SplOverlayRefCommonOptions<SplModalService, Comp>) {
    const { component, viewContainerRef, styles = {}, classes = [], data = {}, service, providers = [] } = options;

    this.service = service;
    this.backdropRef = viewContainerRef.createComponent(SplModalBackdropComponent, {
      injector: Injector.create({
        providers: [
          ...providers,
          {
            provide: SplModalRef,
            useValue: this,
          },
        ],
      }),
    });

    this.backdropRef.changeDetectorRef.detectChanges();

    this.wrapperRef = viewContainerRef.createComponent(SplModalWrapperComponent);

    this.wrapperRef.changeDetectorRef.detectChanges();

    this.componentRef = this.wrapperRef.instance.viewContainerRef.createComponent(component, {
      injector: Injector.create({
        providers: [
          ...providers,
          {
            provide: SPL_MODAL_DATA,
            useValue: data,
          },
          {
            provide: SplModalRef,
            useValue: this,
          },
        ],
      }),
    });

    this.updateStyles(styles);
    this.addClasses('spl-modal', ...classes);

    this.componentRef.changeDetectorRef.detectChanges();
  }

  /** Destroy the ComponentRef of the backdrop and wrapper. */
  destroy(): void {
    this._logger.debug('Destroy modal component and backdrop');

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
      this._logger.debug('Close modalRef');
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
        this.wrapperRef.instance.modalContainerRef.nativeElement.style[stylesKey] = styles[stylesKey]!;
      }
    }
  }

  /**
   * Adds additional classes to the wrapper.
   * @param classes - Classes to add.
   */
  addClasses(...classes: string[]): void {
    if (!this.closed) {
      this.wrapperRef.instance.modalContainerRef.nativeElement.classList.add(...classes);
    }
  }

  /**
   * Removes classes from the wrapper.
   * @param classes - Classes to remove.
   */
  removeClasses(...classes: string[]): void {
    if (!this.closed) {
      this.wrapperRef.instance.modalContainerRef.nativeElement.classList.remove(...classes);
    }
  }
}
