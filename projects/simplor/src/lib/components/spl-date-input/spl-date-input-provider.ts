import { Provider } from '@angular/core';

/** InjectionToken for SplDateInputOptions. */
export const SPL_DATE_INPUT_PROVIDER = 'SPL_DATE_INPUT_PROVIDER';

/**
 * This is a function that creates a Provider for SplDateInputOptions.
 * @param options - Options for customizing SplDateInputComponent.
 */
export function createSplDateInputProvider(options: SplDateInputOptions = {}): Provider {
  return {
    provide: SPL_DATE_INPUT_PROVIDER,
    useValue: options,
  };
}

/**
 * Options for customizing SplDateInputComponent.
 * Date format conversion uses Angular DatePipe.
 */
export interface SplDateInputOptions {
  /**
   * Sets the label of the confirm button of SplDateInputCalendarModalComponent.
   * If undefined, the default value is 'Confirm'.
   */
  modalConfirmLabel?: string;

  /**
   * Specifies the date format to be inputted into the <input/> element.
   * If undefined, the default value is 'yyyy-MM-dd'.
   */
  dateFormat?: string;

  /**
   * Specifies the locale of the date format to be inputted into the <input/> element.
   * If undefined, the default value is 'en-US'.
   */
  dateLocale?: string;
}
