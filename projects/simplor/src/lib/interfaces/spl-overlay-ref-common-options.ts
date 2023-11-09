import { Type, ViewContainerRef } from '@angular/core';
import { SplOverlayServiceLike } from './spl-overlay-service-like';

/**
 * Common options to open SplOverlayRefLike.
 * Service is SplOverlayServiceLike, which can create a reference to an extended overlay.
 * Comp is the type of component to open as an overlay.
 */
export interface SplOverlayRefCommonOptions<Service extends SplOverlayServiceLike, Comp> {
  /**
   * ViewContainerRef to render the component as an overlay.
   * Uses SplOverlayService.outletViewContainerRef .
   */
  viewContainerRef: ViewContainerRef;

  /** A component to be opened. */
  component: Type<Comp>;

  /** Service that manages reference. */
  service: Service;
}
