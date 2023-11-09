import { SplOverlayRefLike } from './spl-overlay-ref-like';

/**
 * SplOverlayServiceLike interface for extended overlay service.
 * A class that extends this interface can open SplOverlayRefLike, which provides the class as a Service generic, as an overlay.
 */
export interface SplOverlayServiceLike {
  /**
   * Method to close SplOverlayRefLike with result.
   * @param overlayRefLike - SplOverlayRefLike provides this service as a generic.
   * @param result - The result to be passed to the onClose emitter.
   */
  close(overlayRefLike: SplOverlayRefLike<any, any, any, any>, result?: any): void;

  /** A method that closes the last opened SplOverlayRefLike. */
  closeLatest(): void;
}
