import { Provider } from '@angular/core';

/**
 * Base options to open overlay-like component.
 * Data is type of provided data.
 */
export interface SplOverlayBaseOptions<Data> {
  /** Additional styles to set to the overlay's wrapper component. */
  styles?: Partial<CSSStyleDeclaration>;

  /** Additional classes to add to the overlay's wrapper component. */
  classes?: string[];

  /**
   * Data to be provided to the overlay.
   * This can be injected into the component using the appropriate injection token according to the overlay.
   * The default is {}.
   */
  data?: Data;

  /**
   * When true, multiple identical components can be opened.
   * The default value is false, so if the given component is already open as a overlay,
   * a new overlay is not opened.
   */
  multi?: boolean;

  /** Array of providers to be additionally provided to overlay. */
  providers?: Provider[];
}
