import { Provider } from '@angular/core';

/** InjectionToken for SplCalendarOptions. */
export const SPL_CALENDAR_PROVIDER = 'SPL_CALENDAR_PROVIDER';

/**
 * This is a function that creates a Provider for SplCalendarOptions.
 * @param options - Options for customizing SplCalendarComponent.
 */
export function createSplCalendarProvider(options: SplCalendarOptions = {}): Provider {
  return {
    provide: SPL_CALENDAR_PROVIDER,
    useValue: options,
  };
}

/**
 * Options for customizing SplCalendarComponent.
 * Date format conversion uses Angular DatePipe.
 */
export interface SplCalendarOptions {
  /**
   * Specifies the year/month format displayed in the calendar.
   * If undefined, the default value is 'yyyy MMM'.
   */
  yearMonthFormat?: string;

  /**
   * Specifies the format of the days displayed in the calendar.
   * If undefined, the default value is 'E'.
   */
  dayOfWeekFormat?: string;

  /**
   * Specifies the timezone to apply the date format to.
   * If undefined, the default value is 'en-US'.
   */
  dateFormatTimezone?: string;

  /**
   * Specifies the label of the button that moves to today's date.
   * If undefined, the default value is 'Today'.
   */
  todayButtonLabel?: string;

  /**
   * Specifies the format of each date as it appears on the calendar.
   * If undefined, the default value is 'd'.
   */
  dateFormat?: string;
}
