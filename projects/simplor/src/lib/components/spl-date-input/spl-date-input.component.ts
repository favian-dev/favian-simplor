import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Input,
  OnDestroy,
  Optional,
  Output,
  ViewChild,
} from '@angular/core';
import { SplModalService } from '../../services/spl-modal.service';
import { SplDateInputCalendarModalComponent } from './spl-date-input-calendar-modal/spl-date-input-calendar-modal.component';
import { SplControl } from '../../abstracts/spl-control';
import { BooleanAttribute, Nullable } from '../../utils/type.util';
import { convertBooleanAttribute } from '../../utils/convert.util';
import { Subscription } from 'rxjs';
import { isValidDate } from '../../utils/date.util';
import { SPL_DATE_INPUT_PROVIDER, SplDateInputOptions } from './spl-date-input-provider';
import { CommonModule, formatDate } from '@angular/common';
import { SplFocusable } from '../../interfaces/spl-focusable';
import { SplButtonDirective } from '../spl-button/spl-button.directive';
import { SplIconComponent } from '../spl-icon/spl-icon.component';
import { SplLogger } from '../../utils/logger.util';
import { SPL_CALENDAR_PROVIDER, SplCalendarOptions } from '../spl-calendar/spl-calendar-provider';

/**
 * This is a component that allows you to input a date.
 * Users can input the date directly into the <input/> element or select the date using SplCalendarComponent.
 *
 * You can also customize the date display format by providing SplDateInputOptions.
 * For more information, see SplDateInputOptions.
 */
@Component({
  selector: 'spl-date-input',
  templateUrl: './spl-date-input.component.html',
  host: {
    class: 'spl-input spl-date-input',
  },
  standalone: true,
  imports: [CommonModule, SplButtonDirective, SplIconComponent],
})
export class SplDateInputComponent extends SplControl implements AfterViewInit, OnDestroy, SplFocusable {
  /** Sets the placeholder to display in the <input/> element. */
  @Input() placeholder = '';

  /**
   * Sets the minimum selectable date in SplCalendarComponent.
   * Since this does not validate the Control, if you need to validate the Control,
   * you can use the minDate() validator function.
   */
  @Input() minDate: Nullable<Date> = null;

  /**
   * Sets the maximum selectable date in SplCalendarComponent.
   * Since this does not validate the Control, if you need to validate the Control,
   * you can use the maxDate() validator function.
   */
  @Input() maxDate: Nullable<Date> = null;

  /**
   * This is a focus emitter that will be emitted when the <input/> element of the Component is focused.
   * This overwrites the host element's focus event.
   */
  @Output('focus') inputFocused = new EventEmitter<FocusEvent>();

  /**
   * This is a blur emitter that will be emitted when the <input/> element of the Component is blurred.
   * This overwrites the host element's blur event.
   */
  @Output('blur') inputBlurred = new EventEmitter<FocusEvent>();

  /** ElementRef selector for the <input/> element. */
  @ViewChild('input', { read: ElementRef }) inputElementRef!: ElementRef<HTMLInputElement>;

  /**
   * This is the focused state of the Component.
   * Binds the '.spl-focus' class according to the value.
   */
  @HostBinding('class.spl-focus') focused = false;

  /**
   * The open state of SplCalendarComponent.
   * Binds the '.spl-opened' class according to the value.
   */
  @HostBinding('class.spl-opened') modalOpened = false;

  /** The current Date value of the Component. */
  value: Nullable<Date> = null;

  /** A subscription to subscribe to the onClose emitter of SplCalendarComponent. */
  private _modalCloseSubscription?: Subscription;

  /** Logger for SplDateInputComponent. */
  private readonly _logger = new SplLogger('SplDateInputComponent');

  constructor(
    @Inject(SPL_DATE_INPUT_PROVIDER) @Optional() private _dateOptions: SplDateInputOptions,
    @Inject(SPL_CALENDAR_PROVIDER) @Optional() private _calendarOptions: SplCalendarOptions,
    private _modalService: SplModalService,
  ) {
    super();
  }

  /** The current disabled state of the Component. */
  private _disabled = false;

  /**
   * Returns the current disabled state of the Component.
   * Bind the '.spl-disabled' class according to the value.
   */
  @Input()
  @HostBinding('class.spl-disabled')
  get disabled(): boolean {
    return this._disabled;
  }

  /**
   * Sets the current disabled state of the Component.
   * @param value - Disabled state to set.
   */
  set disabled(value: BooleanAttribute) {
    this._disabled = convertBooleanAttribute(value);
  }

  /**
   * Returns the date format to be displayed in the <input/> element.
   * If SplDateInputOptions.dateFormat is provided, that will be returned.
   * The default value is 'yyyy-MM-dd'.
   */
  get dateFormat(): string {
    return this._dateOptions?.dateFormat || 'yyyy-MM-dd';
  }

  /**
   * Returns locale in date format.
   * If SplDateInputOptions.dateLocale is provided, that will be returned.
   * The default value is 'en-US'.
   */
  get dateLocale(): string {
    return this._dateOptions?.dateLocale || 'en-US';
  }

  ngAfterViewInit() {
    this.writeValue(this.value);
  }

  ngOnDestroy() {
    this._modalCloseSubscription?.unsubscribe();
  }

  /** To focus on the component, listen to the click event of the host element. */
  @HostListener('click')
  onHostClick(): void {
    this.focus();
  }

  /**
   * Sets the value to Component.
   * Once the correct date value is set, the converted date using dateFormat and dateLocale is set into the <input/> element.
   * @param obj - New value to set.
   */
  override writeValue(obj: Nullable<Date>): void {
    this.value = obj;

    if (this.value && this.inputElementRef) {
      this.inputElementRef.nativeElement.value = formatDate(this.value, this.dateFormat, this.dateLocale);
    }
  }

  /**
   * Sets the disabled state on the Component.
   * @param isDisabled - Disabled state to set.
   */
  override setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  /** Focus to the <input/> element. */
  focus(): void {
    this.inputElementRef.nativeElement.focus();
  }

  /** Blur from the <input/> element. */
  blur(): void {
    this.inputElementRef.nativeElement.blur();
  }

  /**
   * After converting the value inputted into the <input/> element to Date,
   * emits and sets the converted value using the valueChange() and writeValue() methods.
   * If the inputted value is converted to an Invalid Date, a null value is emitted and set.
   */
  updateValueFromInput(): void {
    const { value } = this.inputElementRef.nativeElement;
    const date = new Date(value);

    this._logger.debug('Inputted value', value);
    this._logger.debug('Date for value', date);

    if (isValidDate(date)) {
      this.valueChange(date);
      this.writeValue(date);
    } else {
      this.valueChange(null);
      this.writeValue(null);
    }
  }

  /**
   * Capture the blur event of the <input/> element and emit an inputBlurred emitter with a FocusEvent.
   * @param event - FocusEvent.
   */
  onElementBlur(event: FocusEvent): void {
    this.focused = false;
    this.inputBlurred.emit(event);
  }

  /**
   * Capture the focus event of the <input/> element and emit an inputFocused emitter with a FocusEvent.
   * @param event - FocusEvent.
   */
  onElementFocus(event: FocusEvent): void {
    this.focused = true;
    this.inputFocused.emit(event);
  }

  /**
   * Open SplDateInputCalendarModalComponent.
   * The component's current value, minDate, and maxDate are passed to the modal,
   * and the changed value is emitted and set when the modal is closed.
   */
  openDatePickerCalendarModal(): void {
    const subscription = new Subscription();

    this.blur();
    this._modalCloseSubscription?.unsubscribe();

    subscription.add(
      this._modalService
        .open(SplDateInputCalendarModalComponent, {
          data: {
            selectedDate: this.value,
            minDate: this.minDate,
            maxDate: this.maxDate,
          },
          providers: [
            {
              provide: SPL_DATE_INPUT_PROVIDER,
              useValue: this._dateOptions,
            },
            {
              provide: SPL_CALENDAR_PROVIDER,
              useValue: this._calendarOptions,
            },
          ],
        })
        .onClose.subscribe((result) => {
          if (result) {
            this.valueChange(result);
            this.writeValue(result);
          }

          this.modalOpened = false;
        }),
    );

    this.modalOpened = true;
  }
}
