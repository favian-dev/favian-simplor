import { Provider } from '@angular/core';

/** InjectionToken for SplPaginatorOptions. */
export const SPL_PAGINATOR_PROVIDER = 'SPL_PAGINATOR_PROVIDER';

/**
 * This is the type of function for creating the current page label.
 * @param page - This is the current page.
 * @param size - This is the size currently set in the paginator.
 * @param total - This is the total record size.
 */
export type SplPaginatorCurrentRangeLabelFn = (page: number, size: number, total: number) => string;

/**
 * This is a function that creates a Provider for SplPaginatorOptions.
 * @param options - Options for customizing SplPaginatorComponent.
 */
export function createSplPaginatorProvider(options: SplPaginatorOptions = {}): Provider {
  return {
    provide: SPL_PAGINATOR_PROVIDER,
    useValue: options,
  };
}

/** Options for customizing SplPaginatorComponent. */
export interface SplPaginatorOptions {
  /**
   * Function for creating the current page label.
   * If undefined, a function that creates a label displayed as `${startRecordNumber} - ${endRecordNumber}` is used.
   */
  createCurrentRangeLabel?: SplPaginatorCurrentRangeLabelFn;
}
