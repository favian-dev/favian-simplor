import { Provider } from '@angular/core';
import { SplIconGrade, SplIconOpticalSize, SplIconType, SplIconWeight } from './spl-icon.component';

/** InjectionToken for SplIconOptions. */
export const SPL_ICON_PROVIDER = 'SPL_ICON_PROVIDER';

/**
 * This is a function that creates a Provider for SplIconOptions.
 * @param options - Options for customizing SplIconComponent default appearance.
 */
export function createSplIconProvider(options: SplIconOptions = {}): Provider {
  return {
    provide: SPL_ICON_PROVIDER,
    useValue: options,
  };
}

/** Options for customizing SplIconComponent default appearance. */
export interface SplIconOptions {
  /** Icon type. Default is 'outlined'. */
  type?: SplIconType;

  /** Weight. Default is '400'. */
  weight?: SplIconWeight;

  /** Grade. Default is '0'. */
  grade?: SplIconGrade;

  /** Optical size. Default is '24'. */
  opticalSize?: SplIconOpticalSize;

  /** Fill status. Default is false. */
  fill?: boolean;
}
