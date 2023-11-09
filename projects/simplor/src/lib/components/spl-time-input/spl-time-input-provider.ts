import { Provider } from '@angular/core';

/** InjectionToken for SplTimeInputOptions. */
export const SPL_TIME_INPUT_PROVIDER = 'SPL_TIME_INPUT_PROVIDER';

/**
 * This is a function that creates a Provider for SplTimeInputOptions.
 * @param options - Options for customizing SplTimeInputComponent.
 */
export function createSplTimeInputProvider(options: SplTimeInputOptions = {}): Provider {
  return {
    provide: SPL_TIME_INPUT_PROVIDER,
    useValue: options,
  };
}

/** Options for customizing SplTimeInputComponent. */
export interface SplTimeInputOptions {
  /**
   * Sets the label of the am button.
   * If undefined, the default value is 'AM'.
   */
  amLabel?: string;

  /**
   * Sets the label of the pm button.
   * If undefined, the default value is 'PM'.
   */
  pmLabel?: string;
}
