import { ComponentRef, EventEmitter } from '@angular/core';
import { SplOverlayServiceLike } from './spl-overlay-service-like';
import { CanUndefined } from '../utils/type.util';

/**
 * SplOverlayRefLike interface for extended overlay.
 * A class that implements this interface can be opened as an overlay using SplOverlayService.
 *
 * Service is SplOverlayServiceLike, which can create a reference to an extended overlay.
 * Comp is the type of component to open as an overlay.
 * Backdrop is the type of component to be opened as a backdrop.
 * Result is the type of value to be returned when the overlay is closed.
 */
export interface SplOverlayRefLike<Service extends SplOverlayServiceLike, Comp, Backdrop, Result> {
  /** ComponentRef of the component opened as overlay. */
  componentRef: ComponentRef<Comp>;

  /** ComponentRef of the component opened as backdrop. */
  backdropRef?: ComponentRef<Backdrop>;

  /** This is the service to open the expanded overlay. */
  service: Service;

  /**
   * The emitter to emit when the overlay is closed.
   * This can be emitted with Result.
   */
  onClose: EventEmitter<CanUndefined<Result>>;

  /** Closed state of overlay. */
  closed: boolean;

  /** A method to destroy components opened with an overlay. */
  destroy(): void;

  /**
   * A method that closes the overlay with the result.
   * @param result - Result to be passed to the onClose emitter.
   */
  close(result?: Result): void;

  /**
   * This method applies additional styles to component opened as an overlay.
   * @param styles - This must be a partial object of CSSStyleDeclaration.
   */
  updateStyles(styles: Partial<CSSStyleDeclaration>): void;

  /**
   * This method adds additional classes to component opened as an overlay.
   * @param classes - Classes to add.
   */
  addClasses(...classes: string[]): void;

  /**
   * This method removes classes from component opened as an overlay.
   * @param classes - Classes to remove.
   */
  removeClasses(...classes: string[]): void;
}
