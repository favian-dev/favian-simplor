import { Component, Inject, OnInit, Optional } from '@angular/core';
import { SPL_DATE_INPUT_PROVIDER, SplDateInputOptions } from '../spl-date-input-provider';
import { Nullable } from '../../../utils/type.util';
import { SPL_MODAL_DATA, SplModalRef } from '../../../services/spl-modal.service';
import { CommonModule } from '@angular/common';
import { SplCalendarComponent } from '../../spl-calendar/spl-calendar.component';
import { SplModalActionsComponent } from '../../spl-modal/spl-modal-actions/spl-modal-actions.component';
import { SplStrokeButtonDirective } from '../../spl-button/spl-stroke-button.directive';
import { SplModalActionDirective } from '../../spl-modal/spl-modal-actions/spl-modal-action.directive';

/**
 * This is the definition of data provided to SplDateInputCalendarModalComponent.
 * Data is provided using the SPL_MODAL_DATA injection token.
 */
export interface SplDateInputCalendarData {
  /** The current value of SplDateInputComponent. */
  selectedDate: Nullable<Date>;

  /**
   * This is the minDate of SplDateInputComponent.
   * Specifies the minimum selectable date in SplCalendarComponent.
   */
  minDate: Nullable<Date>;

  /**
   * This is the maxDate of SplDateInputComponent.
   * Specifies the maximum selectable date in SplCalendarComponent.
   */
  maxDate: Nullable<Date>;
}

/** This is a modal that allows the user to select the date to input into SplDateInputComponent. */
@Component({
  selector: 'spl-date-input-calendar-modal',
  templateUrl: './spl-date-input-calendar-modal.component.html',
  host: {
    class: 'spl-date-input-calendar-modal',
  },
  standalone: true,
  imports: [
    CommonModule,
    SplCalendarComponent,
    SplModalActionsComponent,
    SplStrokeButtonDirective,
    SplModalActionDirective,
  ],
})
export class SplDateInputCalendarModalComponent implements OnInit {
  /** The currently selected date in SplCalendarComponent. */
  selectedDate: Nullable<Date> = null;

  /** Today's date to get the initial displayYear and displayMonth. */
  private _today = new Date();

  constructor(
    @Inject(SPL_DATE_INPUT_PROVIDER) @Optional() private _options: SplDateInputOptions,
    @Inject(SPL_MODAL_DATA) private _data: SplDateInputCalendarData,
    @Inject(SplModalRef) private _modalRef: SplModalRef<SplDateInputCalendarData, Nullable<Date>>,
  ) {}

  /**
   * Returns a minDate passed from SplDateInputComponent.
   * Specifies the minimum selectable date.
   */
  get minDate(): Nullable<Date> {
    return this._data.minDate;
  }

  /**
   * Returns a maxDate passed from SplDateInputComponent.
   * Specifies the maximum selectable date.
   */
  get maxDate(): Nullable<Date> {
    return this._data.maxDate;
  }

  /**
   * Returns the label of the Confirm button.
   * If SplDateInputOptions.modalConfirmLabel is provided, that will be returned.
   * The default value is 'Confirm'.
   */
  get modalConfirmLabel(): string {
    return this._options?.modalConfirmLabel || 'Confirm';
  }

  /**
   * Returns displayYear for SplCalendarComponent.
   * If there is a selectedDate, the displayYear of the selectedDate is returned; otherwise, the year of today's date is returned.
   */
  get displayYear(): number {
    return this.selectedDate ? this.selectedDate.getFullYear() : this._today.getFullYear();
  }

  /**
   * Returns displayMonth for SplCalendarComponent.
   * If there is a selectedDate, the displayMonth of the selectedDate is returned; otherwise, the month of today's date is returned.
   */
  get displayMonth(): number {
    return this.selectedDate ? this.selectedDate.getMonth() : this._today.getMonth();
  }

  ngOnInit() {
    this.selectedDate = this._data.selectedDate;
  }

  /**
   * Close the modal with the given date value.
   * @param date - Date to return as result.
   */
  close(date?: Nullable<Date>): void {
    this._modalRef.close(date);
  }
}
