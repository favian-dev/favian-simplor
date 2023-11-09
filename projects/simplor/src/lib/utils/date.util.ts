import { SplError } from './error.util';

/** 1 millisecond. */
export const MILLISECOND = 1;

/** 1 second in milliseconds. */
export const SECOND = MILLISECOND * 1000;

/** 1 minute in milliseconds. */
export const MINUTE = SECOND * 60;

/** 1 hour in milliseconds. */
export const HOUR = MINUTE * 60;

/** 1 day in milliseconds. */
export const DAY = HOUR * 24;

/** 1 week in milliseconds. */
export const WEEK = DAY * 7;

/** 1 year in milliseconds. */
export const YEAR = DAY * 365;

/**
 * Returns true when given source date and target date are same.
 * It compares only year, month, and date.
 * @param source - Source date to compare.
 * @param target - Target date to compare.
 */
export function isSameDate(source: Date, target: Date): boolean {
  const truncatedSourceDateInMills = truncateDate(source, 'day');
  const truncatedTargetDateInMills = truncateDate(target, 'day');

  return truncatedSourceDateInMills === truncatedTargetDateInMills;
}

/**
 * Returns true when date is valid.
 * @param date - Date to validate.
 */
export function isValidDate(date: Date): boolean {
  return !isNaN(date.valueOf());
}

/**
 * A type of available truncate target for truncateDate() function.
 * 'second' truncates the time to the second.
 * 'minute' truncates the time to the minute.
 * 'hour' truncates the time to the hour.
 * 'day' truncates the time to the day.
 * 'week' truncates the time to the week.
 * 'year' truncates the time to the year.
 */
export type DateTruncateTarget = 'second' | 'minute' | 'hour' | 'day' | 'week' | 'year';

/**
 * Truncate the given date object to specified target.
 * It returns truncated milliseconds.
 * @param date - Date object to truncate.
 * @param target - Truncate target.
 */
export function truncateDate(date: Date, target: DateTruncateTarget): number {
  let millisecondsToDivide: number;

  // Since the time value 0 indicates 1970-01-01 09:00:00.0,
  // set hours, minutes, seconds, and milliseconds to 0 when target is day, week, or year.
  switch (target) {
    case 'second': {
      millisecondsToDivide = SECOND;
      break;
    }

    case 'minute': {
      millisecondsToDivide = MINUTE;
      break;
    }

    case 'hour': {
      millisecondsToDivide = HOUR;
      break;
    }

    case 'day': {
      date.setHours(0, 0, 0, 0);
      millisecondsToDivide = DAY;
      break;
    }

    case 'week': {
      date.setHours(0, 0, 0, 0);
      millisecondsToDivide = WEEK;
      break;
    }

    case 'year': {
      date.setHours(0, 0, 0, 0);
      millisecondsToDivide = YEAR;
      break;
    }

    default: {
      throw new SplError(`Invalid target type for truncateDate() function. Current target is ${target}`);
    }
  }

  return Math.floor(date.valueOf() / millisecondsToDivide);
}

/** Extended date that contains comparison method for date object. */
export class ExtendedDate {
  constructor(public originalDate: Date) {}

  /**
   * Returns true when the date is less than provided comparisonDate.
   * @param comparisonDate - Date to compare with.
   * @param truncateTarget - Truncate target.
   */
  isLessThan(comparisonDate: Date, truncateTarget: DateTruncateTarget): boolean {
    const currentDateValue = truncateDate(this.originalDate, truncateTarget);
    const comparisonDateValue = truncateDate(comparisonDate, truncateTarget);

    return currentDateValue < comparisonDateValue;
  }

  /**
   * Returns true when the date is less than or equal to provided comparisonDate.
   * @param comparisonDate - Date to compare with.
   * @param truncateTarget - Truncate target.
   */
  isLessThanOrEqualTo(comparisonDate: Date, truncateTarget: DateTruncateTarget): boolean {
    const currentDateValue = truncateDate(this.originalDate, truncateTarget);
    const comparisonDateValue = truncateDate(comparisonDate, truncateTarget);

    return currentDateValue <= comparisonDateValue;
  }

  /**
   * Returns true when the date is more than to provided comparisonDate.
   * @param comparisonDate - Date to compare with.
   * @param truncateTarget - Truncate target.
   */
  isMoreThan(comparisonDate: Date, truncateTarget: DateTruncateTarget): boolean {
    const currentDateValue = truncateDate(this.originalDate, truncateTarget);
    const comparisonDateValue = truncateDate(comparisonDate, truncateTarget);

    return currentDateValue > comparisonDateValue;
  }

  /**
   * Returns true when the date is more than or equal to provided comparisonDate.
   * @param comparisonDate - Date to compare with.
   * @param truncateTarget - Truncate target.
   */
  isMoreThanOrEqualTo(comparisonDate: Date, truncateTarget: DateTruncateTarget): boolean {
    const currentDateValue = truncateDate(this.originalDate, truncateTarget);
    const comparisonDateValue = truncateDate(comparisonDate, truncateTarget);

    return currentDateValue >= comparisonDateValue;
  }

  /**
   * Returns true when date is equal to provided comparisonDate.
   * @param comparisonDate - Date to compare with.
   * @param truncateTarget - Truncate target.
   */
  isEqualTo(comparisonDate: Date, truncateTarget: DateTruncateTarget): boolean {
    const currentDateValue = truncateDate(this.originalDate, truncateTarget);
    const comparisonDateValue = truncateDate(comparisonDate, truncateTarget);

    return currentDateValue === comparisonDateValue;
  }
}
