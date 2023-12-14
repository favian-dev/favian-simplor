import { Component, ContentChild, EventEmitter, Inject, Input, OnInit, Optional, Output } from '@angular/core';
import { SPL_CALENDAR_PROVIDER, SplCalendarOptions } from './spl-calendar-provider';
import { Nullable, NumberLike, RangedDate } from '../../utils/type.util';
import { convertNumberLike } from '../../utils/convert.util';
import { ExtendedDate, isSameDate } from '../../utils/date.util';
import { SplLogger } from '../../utils/logger.util';
import { CommonModule } from '@angular/common';
import { SplButtonDirective } from '../spl-button/spl-button.directive';
import { SplIconComponent } from '../spl-icon/spl-icon.component';
import { SplCalendarDateDirective } from './spl-calendar-date.directive';
import { SplCalendarDateExtraDirective } from './spl-calendar-date-extra.directive';

/**
 * Definition of the 'type' value that can be used in SplCalendarComponent.
 * 'single' allows only one date to be selected.
 * 'ranged' allows a date range with a start and end to be selected.
 * 'multi' allows multiple dates to be selected.
 */
export type SplCalendarType = 'single' | 'ranged' | 'multi';

/** This is an interface for SplCalendarComponent with 'single' type. */
export interface SplSingleValueCalendar {
  type: 'single';
  value: Nullable<Date>;
  valueChange: EventEmitter<Nullable<Date>>;
}

/** This is an interface for SplCalendarComponent with 'ranged' type. */
export interface SplRangedValueCalendar {
  type: 'ranged';
  value: RangedDate;
  valueChange: EventEmitter<RangedDate>;
}

/** This is an interface for SplCalendarComponent with 'multi' type. */
export interface SplMultiValueCalendar {
  type: 'multi';
  value: Date[];
  valueChange: EventEmitter<Date[]>;
}

/**
 * This is a component that creates a calendar and allows the user to select a date based on 'type'.
 * Only one month is displayed at a time, and user can move to the previous or next month using the given controller.
 *
 * By providing SplCalendarOptions using the createSplCalendarProvider() function, you can specify the display format of elements in the current calendar.
 * For more information, see SplCalendarOptions.
 */
@Component({
  selector: 'spl-calendar',
  templateUrl: './spl-calendar.component.html',
  host: {
    class: 'spl-calendar',
  },
  standalone: true,
  imports: [CommonModule, SplButtonDirective, SplIconComponent],
})
export class SplCalendarComponent<Value extends any> implements OnInit {
  /**
   * Specifies the type of value to use in the calendar.
   * 'single' allows only one date to be selected.
   * 'ranged' allows a date range with a start and end to be selected.
   * 'multi' allows multiple dates to be selected.
   *
   * The default is 'single'.
   */
  @Input() type: SplCalendarType = 'single';

  /** Specifies the minimum date available for selection. */
  @Input() minDate: Nullable<Date> = null;

  /** Specifies the maximum date available for selection. */
  @Input() maxDate: Nullable<Date> = null;

  /**
   * Indicates the currently selected value.
   * The value can vary as 'Nullable<Date>', 'RangedDate', or 'Date[]' depending on the 'type' attribute.
   */
  @Input() value!: Value; // To prevent error, use !.

  /** An emitter that emits changed values. */
  @Output() valueChange = new EventEmitter<Value>();

  /** This is an emitter that emits 'year' when the year displayed on the calendar changes. */
  @Output() displayYearChange = new EventEmitter<number>();

  /**
   * This is an emitter that emits 'month' when the month displayed on the calendar changes.
   * The value is the same as the Date.getMonth() value.
   */
  @Output() displayMonthChange = new EventEmitter<number>();

  /** Content child of SplCalendarDateDirective to replace date display */
  @ContentChild(SplCalendarDateDirective, { descendants: true }) calendarDateDirective?: SplCalendarDateDirective;

  /** Content child of SplCalendarDateExtraDirective to replace date display */
  @ContentChild(SplCalendarDateExtraDirective, { descendants: true })
  calendarDateExtraDirective?: SplCalendarDateExtraDirective;

  /**
   * This is the date currently displayed on the calendar.
   * Only year and month are used.
   */
  displayDate = new Date();

  /**
   * This is the day value displayed on the calendar.
   * They are in order from Sunday to Saturday, and are created when the Component is initialized.
   */
  dayOfWeeks: Date[] = [];

  /**
   * Each date to be displayed in the currently displayed year and month.
   * A total of 42 dates are included, from the last Sunday of the previous month to the first Saturday of the next month.
   * Generated dynamically when displayDate changes.
   */
  dates: Date[] = [];

  /** Logger for SplCalendarComponent. */
  private readonly _logger = new SplLogger('SplCalendarComponent');

  constructor(@Inject(SPL_CALENDAR_PROVIDER) @Optional() private _options: SplCalendarOptions) {}

  /** The year value currently displayed on the calendar. */
  private _displayYear = this.correctDisplayYear;

  /** Returns the year value currently displayed on the calendar. */
  get displayYear(): number {
    return this._displayYear;
  }

  /**
   * Sets the year value to display on the calendar.
   * If the set value is different from the existing value, the calendar is re-rendered.
   * @param value - A 4-digit year value as a number or string of numbers.
   */
  @Input()
  set displayYear(value: NumberLike) {
    const displayYear = convertNumberLike(value);

    if (displayYear !== this._displayYear) {
      this._displayYear = displayYear;
      this.updateDisplayDate();
      this.createDates();
    }
  }

  /** The month value currently displayed on the calendar. */
  private _displayMonth = this.correctDisplayMonth;

  /** Returns the month value currently displayed on the calendar. */
  get displayMonth(): number {
    return this._displayMonth;
  }

  /**
   * Sets the month value to display on the calendar.
   * If the set value is different from the existing value, the calendar is re-rendered.
   * @param value - The month value as a number or string of numbers. It must be the same as the Date.getMonth() value.
   */
  @Input()
  set displayMonth(value: NumberLike) {
    const displayMonth = convertNumberLike(value);

    if (displayMonth !== this._displayMonth) {
      this._displayMonth = displayMonth;
      this.updateDisplayDate();
      this.createDates();
    }
  }

  /**
   * Returns the correctly converted year value.
   * Even if displayYear and displayMonth are provided incorrectly, it returns the year value correctly converted from displayDate.
   *
   * For example, if displayYear is set to 1990 and displayMonth is set to 30, this returns 1992.
   */
  get correctDisplayYear(): number {
    return this.displayDate.getFullYear();
  }

  /**
   * Returns the correctly converted month value.
   * Even if displayYear and displayMonth are provided incorrectly, it returns the month value correctly converted from displayDate.
   *
   * For example, if displayYear is set to 1990 and displayMonth is set to 30, this returns 6(July).
   */
  get correctDisplayMonth(): number {
    return this.displayDate.getMonth();
  }

  /**
   * Returns the year/month format to be displayed on the calendar.
   * It uses Angular DatePipe's format option and the default value is 'yyyy MMM'.
   * This returns the value provided by SplCalendarOptions.yearMonthFormat if provided.
   */
  get yearMonthFormat(): string {
    return this._options?.yearMonthFormat || 'yyyy MMM';
  }

  /**
   * Returns the timezone value to be used when applying date format.
   * It uses Angular DatePipe's timezone option, default value is 'en-US'.
   * This returns the value provided by SplCalendarOptions.dateFormatTimezone if provided.
   */
  get dateFormatTimezone(): string {
    return this._options?.dateFormatTimezone || 'en-US';
  }

  /**
   * Returns the label of the button that allows you to move to today's date.
   * The default value is 'Today', and if SplCalendarOptions.todayButtonLabel is provided, it returns the provided value.
   */
  get todayButtonLabel(): string {
    return this._options?.todayButtonLabel || 'Today';
  }

  /**
   * Returns the day display format.
   * It uses format option from Angular DatePipe, default value is 'E'.
   * This returns the value provided by SplCalendarOptions.dayOfWeekFormat if provided.
   */
  get dayOfWeekFormat(): string {
    return this._options?.dayOfWeekFormat || 'E';
  }

  /**
   * Returns each date display format.
   * It uses Angular DatePipe's format option and the default value is 'd'.
   * This returns the value provided by SplCalendarOptions.dateFormat if provided.
   */
  get dateFormat(): string {
    return this._options?.dateFormat || 'd';
  }

  ngOnInit() {
    this._initDayOfWeeks();
    this.createDates();
  }

  /**
   * Update displayDate using the currently set displayYear and displayMonth.
   * After displayDate is updated, displayYear and displayMonth are updated to the corrected values.
   */
  updateDisplayDate(): void {
    this.displayDate = new Date(this.displayYear, this.displayMonth, 1);

    this._displayYear = this.correctDisplayYear;
    this._displayMonth = this.correctDisplayMonth;
  }

  /**
   * Go to the previous month.
   * It emits a new displayMonth value using the displayMonthChange emitter.
   */
  toPreviousMonth(): void {
    this.displayMonth = this.displayMonth - 1;
    this.displayMonthChange.emit(this.displayMonth);
  }

  /**
   * Go to the next month.
   * It emits a new displayMonth value using the displayMonthChange emitter.
   */
  toNextMonth(): void {
    this.displayMonth = this.displayMonth + 1;
    this.displayMonthChange.emit(this.displayMonth);
  }

  /**
   * Go to the month with today's date.
   * This emits displayYearChange and displayMonthChange emitters.
   */
  toToday(): void {
    const today = new Date();

    this.displayYear = today.getFullYear();
    this.displayMonth = today.getMonth();

    this.displayYearChange.emit(this.displayYear);
    this.displayMonthChange.emit(this.displayMonth);
  }

  /**
   * Create dates to display on the calendar.
   * A total of 42 dates are created from the last Sunday of the previous month to the first Saturday of the next month,
   * and the generated values vary depending on the current displayYear and displayMonth values.
   */
  createDates(): void {
    this.dates = [];

    const firstDateOfMonth = new Date(this.displayYear, this.displayMonth, 1);
    const firstDayOfMonth = firstDateOfMonth.getDay();
    const startingIndex = 1 - firstDayOfMonth;

    for (let i = startingIndex; i < startingIndex + 42; i++) {
      this.dates.push(new Date(this.displayYear, this.displayMonth, i));
    }
  }

  /**
   * Checks whether the given date is outside the currently displayed year and month.
   * @param date - Date value to check.
   */
  isOutOfCalendar(date: Date): boolean {
    const targetYear = date.getFullYear();
    const targetMonth = date.getMonth();

    return targetYear !== this.displayYear || targetMonth !== this.displayMonth;
  }

  /**
   * Checks whether the given date is today's date.
   * @param date - Date value to check.
   */
  isToday(date: Date): boolean {
    return isSameDate(date, new Date());
  }

  /**
   * Checks whether the given date is the selected date.
   * It is checked in different ways depending on the Component's 'type' attribute.
   * @param date - Date value to check.
   */
  isSelectedDate(date: Date): boolean {
    if (!this.value) {
      return false;
    }

    if (isSingleValueCalendar(this)) {
      return isSameDate(date, this.value);
    } else if (isMultiValueCalendar(this)) {
      return !!this.value.find((value) => new ExtendedDate(date).isEqualTo(value, 'day'));
    }

    return false;
  }

  /**
   * When the Component's 'type' attribute is 'ranged', it checks whether the given date is the start date.
   * If the 'type' attribute is not 'ranged', it always returns false.
   * @param date - Date value to check.
   */
  isStartDate(date: Date): boolean {
    if (isRangedValueCalendar(this) && this.value && this.value[0]) {
      return isSameDate(date, this.value[0]);
    }

    return false;
  }

  /**
   * When the Component's 'type' attribute is 'ranged', it checks whether the given date is the end date.
   * If the 'type' attribute is not 'ranged', it always returns false.
   * @param date - Date value to check.
   */
  isEndDate(date: Date): boolean {
    if (isRangedValueCalendar(this) && this.value && this.value[1]) {
      return isSameDate(date, this.value[1]);
    }

    return false;
  }

  /**
   * When the Component's 'type' attribute is 'ranged', it checks whether the given date is within the range or not.
   * If the 'type' attribute is not 'ranged', it always returns false.
   * @param date - Date value to check.
   */
  isRangedDate(date: Date): boolean {
    if (isRangedValueCalendar(this) && this.value && this.value[0] && this.value[1]) {
      const extendedDate = new ExtendedDate(date);

      return (
        extendedDate.isMoreThanOrEqualTo(this.value[0], 'day') && extendedDate.isLessThanOrEqualTo(this.value[1], 'day')
      );
    }

    return false;
  }

  /**
   * Checks whether the given date is less than the Component's minDate.
   * If minDate is null, it always returns false.
   * @param date - Date value to check.
   */
  isLessThanMinDate(date: Date): boolean {
    if (this.minDate) {
      const extendedDate = new ExtendedDate(date);

      return extendedDate.isLessThan(this.minDate, 'day');
    }

    return false;
  }

  /**
   * Checks whether the given date is more than the Component's maxDate.
   * If maxDate is null, it always returns false.
   * @param date - Date value to check.
   */
  isMoreThanMaxDate(date: Date): boolean {
    if (this.maxDate) {
      const extendedDate = new ExtendedDate(date);

      return extendedDate.isMoreThan(this.maxDate, 'day');
    }

    return false;
  }

  /** TrackBy function that identifies the uniqueness of each date. */
  trackByFn(index: number, date: Date): string {
    return date.toDateString();
  }

  /**
   * This method handles the event that occurs when the date is clicked.
   * It behaves differently depending on the 'type' attribute and emits the changed value via the valueChange emitter.
   * @param date - Clicked date value.
   */
  onDateClick(date: Date): void {
    const extendedDate = new ExtendedDate(date);

    if (isSingleValueCalendar(this)) {
      // Update single value.
      this.valueChange.emit(date);
    } else if (isRangedValueCalendar(this)) {
      // Update ranged value.
      let values = this.value as Nullable<RangedDate>;

      if (!(values instanceof Array)) {
        values = [null, null];
      }

      // Cases.
      // When [null, null] -> Set to [date, null]
      // When [value, null] -> When date >= value -> set to [value, date]
      // When [value, null] -> When date < value -> set to [date, null]
      // When [value, value] -> set to [date, null]
      if (values[0] === null || (values[0] && values[1]) || extendedDate.isLessThan(values[0], 'day')) {
        values = [date, null];
      } else {
        values = [values[0], date];
      }

      this.valueChange.emit(values);
    } else if (isMultiValueCalendar(this)) {
      // Update multi value.
      let values = this.value as Nullable<Date[]>;

      if (!(values instanceof Array)) {
        values = [];
      }

      this._logger.debug(`Length of previous date values: ${values.length}`);

      const filteredValues = values.filter((value) => !extendedDate.isEqualTo(value, 'day'));

      this._logger.debug(`Length of filtered date values: ${filteredValues.length}`);

      if (values.length === filteredValues.length) {
        // Date isn't duplicated.
        values = [...values, date];
      } else {
        // Date is duplicated.
        values = filteredValues;
      }

      this.valueChange.emit(values);
    }
  }

  /** Create the days of the week to appear on the calendar. */
  private _initDayOfWeeks(): void {
    for (let i = 1; i < 8; i++) {
      this.dayOfWeeks.push(new Date(2023, 9, i));
    }
  }
}

/**
 * A function that checks whether the given 'component' has type 'single'.
 * In case of 'single' type, 'component' is defined as SplSingleValueCalendar interface.
 * @param component - Must be SplCalendarComponent.
 */
export function isSingleValueCalendar(component: any): component is SplSingleValueCalendar {
  return component.type === 'single';
}

/**
 * A function that checks whether the given 'component' has type 'ranged'.
 * In case of 'ranged' type, 'component' is defined as SplRangedValueCalendar interface.
 * @param component - Must be SplCalendarComponent.
 */
export function isRangedValueCalendar(component: any): component is SplRangedValueCalendar {
  return component.type === 'ranged';
}

/**
 * A function that checks whether the given 'component' has type 'multi'.
 * In case of 'multi' type, 'component' is defined as SplMultiValueCalendar interface.
 * @param component - Must be SplCalendarComponent.
 */
export function isMultiValueCalendar(component: any): component is SplMultiValueCalendar {
  return component.type === 'multi';
}
