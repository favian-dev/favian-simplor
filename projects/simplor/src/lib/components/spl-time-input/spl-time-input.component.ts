import {
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Inject,
  Input,
  OnDestroy,
  Optional,
  Output,
  ViewChild,
} from '@angular/core';
import { SplControl } from '../../abstracts/spl-control';
import { SPL_TIME_INPUT_PROVIDER, SplTimeInputOptions } from './spl-time-input-provider';
import { SplFocusable } from '../../interfaces/spl-focusable';
import { BooleanAttribute, NumberLike } from '../../utils/type.util';
import { convertBooleanAttribute } from '../../utils/convert.util';
import { SplLogger } from '../../utils/logger.util';
import { CommonModule } from '@angular/common';
import { SplInputDirective } from '../spl-input/spl-input.directive';
import { SplToggleButtonGroupComponent } from '../spl-toggle-button-group/spl-toggle-button-group.component';
import { SplToggleButtonComponent } from '../spl-toggle-button-group/spl-toggle-button/spl-toggle-button.component';
import { FormsModule } from '@angular/forms';

/** Regular expression for a valid time value. */
const VALID_TIME_REGEXP = /^\d{1,2}:\d{1,2}$/;

/** An object for the time in H:m format decomposed into beforeNoon, hours, and minutes. */
export interface ParsedTimeString {
  /** True if the time is before noon. */
  beforeNoon: boolean;

  /** Hours string changed to h format. */
  hours: string;

  /** Minutes string changed to m format. */
  minutes: string;
}

/**
 * This is a component that allows user to input time.
 * The value uses H:m and is converted internally to am or pm.
 * You can change the labels of am and pm buttons by providing SplTimeInputOptions.
 */
@Component({
  selector: 'spl-time-input',
  templateUrl: './spl-time-input.component.html',
  host: {
    class: 'spl-time-input',
  },
  standalone: true,
  imports: [CommonModule, SplInputDirective, SplToggleButtonGroupComponent, SplToggleButtonComponent, FormsModule],
})
export class SplTimeInputComponent extends SplControl implements SplFocusable, OnDestroy {
  /**
   * This is the emitter that will be emitted when a focus event occurs in a focusable element within SplTimeInputComponent.
   * Overwrites the focus event of the host element.
   */
  @Output('focus') inputFocused = new EventEmitter<FocusEvent>();

  /**
   * This is the emitter that will be emitted when a blur event occurs in a focusable element within SplTimeInputComponent.
   * Overwrites the blur event of the host element.
   */
  @Output('blur') inputBlurred = new EventEmitter<FocusEvent>();

  /** ElementRef of the <input/> element that inputs hours. */
  @ViewChild('hoursInput', { read: ElementRef }) hoursInputRef!: ElementRef<HTMLInputElement>;

  /** ElementRef of the <input/> element that inputs minutes. */
  @ViewChild('minutesInput', { read: ElementRef }) minutesInputRef!: ElementRef<HTMLInputElement>;

  /**
   * The focused state of the component.
   * The value is set to true when one of the hours input, minutes input, am and pm buttons is focused.
   * Binds the '.spl-focus' class according to the value.
   */
  @HostBinding('class.spl-focus') focused = false;

  /** Hours with a value between 0 and 12. */
  hours = '';

  /** Minutes with a value between 0 and 59. */
  minutes = '';

  /** This is the state before noon. */
  beforeNoon = true;

  /** Logger for SplTimeInputComponent. */
  private readonly _logger = new SplLogger('SplTimeInputComponent');

  /** A timer for setTimeout() that will delay the emission of the inputBlurred emitter when the blur event occurs. */
  private _blurTimer: any;

  constructor(@Inject(SPL_TIME_INPUT_PROVIDER) @Optional() private _options?: SplTimeInputOptions) {
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
   * Returns the label of the am button.
   * If SplTimeInputOptions.amLabel is provided, that will be returned.
   */
  get amLabel(): string {
    return this._options?.amLabel || 'AM';
  }

  /**
   * State whether to use 24hours format.
   * When this value is true, the beforeNoon value is ignored.
   */
  private _use24Horus = false;

  /** Returns the state of whether to use the 24hours format. */
  @Input()
  get use24Horus(): boolean {
    return this._use24Horus;
  }

  /**
   * Set the state on whether to use the 24hours format.
   * @param value - State whether to use 24hours format.
   */
  set use24Horus(value: BooleanAttribute) {
    this._use24Horus = convertBooleanAttribute(value);
  }

  /**
   * Returns the label of the pm button.
   * If SplTimeInputOptions.pmLabel is provided, that will be returned.
   */
  get pmLabel(): string {
    return this._options?.pmLabel || 'PM';
  }

  ngOnDestroy() {
    clearTimeout(this._blurTimer);
  }

  /**
   * Sets the value in Component.
   * The value must be provided in 'H:m' format, which is internally converted to a 12-hour clock divided into AM/PM.
   * @param obj - Value to set.
   */
  override writeValue(obj: any): void {
    // if (obj && VALID_TIME_REGEXP.exec(obj)) {
    //   this._logger.debug(`Write value to time input`, obj);
    //
    //   const value = this._parseTimeString(obj);
    //
    //   this._updateWithParsedTimeString(value);
    // }
    obj = obj || '';

    const [hours, minutes] = obj.split(':');

    this.applyChanges(hours, minutes);
  }

  /**
   * Sets the disabled state on the Component.
   * @param isDisabled - Disabled state to set.
   */
  override setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  /**
   * When a focusable element is focused, it changes the focused state and emits an inputFocused emitter.
   * If the focused element is <input/>, select all content to conveniently change the value.
   * @param event - FocusEvent.
   */
  onElementFocus(event: FocusEvent): void {
    if (event.target instanceof HTMLInputElement) {
      event.target.select();
    }

    this.focused = true;
    this.inputFocused.emit(event);
  }

  /**
   * When a focusable element is blurred, changes the focused state,
   * and if the focused state is false even after timeout, the inputBlurred emitter is emitted.
   * @param event - FocusEvent.
   */
  onElementBlur(event: FocusEvent): void {
    this.focused = false;

    clearTimeout(this._blurTimer);

    // SplTimeInputComponent has 4 focusable elements: hours input, minutes input, and buttons for am and pm.
    // When a blur event occurs in an element, a focus event may occur in another element,
    // so use setTimeout() to delay the check of the focused state.
    this._blurTimer = setTimeout(() => {
      if (!this.focused) {
        this.inputBlurred.emit(event);
      }
    });
  }

  /**
   * If the value of hours input changes, limit the value to between 1 and 12,
   * and applies the changed time value to the control.
   * @param event - An event that occurred in the change event of hours input.
   */
  onHoursChange(event: Event): void {
    const input = event.target as HTMLInputElement;

    this.applyChanges(input.value, this.minutes, true);
  }

  /**
   * If the value of minutes input changes, limit the value to between 0 and 59,
   * and applies the changed time value to the control.
   * @param event - An event that occurred in the change event of minutes input.
   */
  onMinutesChange(event: Event): void {
    const input = event.target as HTMLInputElement;

    this.applyChanges(this.hours, input.value, true);
  }

  /**
   * Sets the changed beforeNoon value and applies the changed time value to the control.
   * @param value - Changed beforeNoon value.
   */
  onBeforeNoonChange(value: boolean): void {
    this.beforeNoon = value;

    this.applyChanges(this.hours, this.minutes, true);
  }

  /**
   * Create a time in 'H:m' format by combining the currently entered hours and minutes, and the beforeNoon value and apply it to the control.
   * If there is no hours or minutes value, null value is applied.
   * @param hours - Changed hours value in H format.
   * @param minutes - Changed minutes value in m format
   * @param emitValueChanges - If true, emits a change.
   */
  applyChanges(hours: NumberLike, minutes: NumberLike, emitValueChanges = false): void {
    hours = String(hours).replace(/\D/gim, '');
    minutes = String(minutes).replace(/\D/gim, '');

    if (hours && minutes) {
      const value = this._parseTimeString(`${hours}:${minutes}`);
      const timeString = this._buildTimeString(value);

      this._updateWithParsedTimeString(value);

      if (emitValueChanges) {
        this.valueChange(timeString);
      }
    } else {
      const value = this._parseTimeString(`${hours || '0'}:${minutes || '0'}`);

      // To keep the previous beforeNoon value.
      value.beforeNoon = this.beforeNoon;

      // To keep the previous empty string.
      value.hours = hours ? value.hours : '';
      value.minutes = minutes ? value.minutes : '';

      this._updateWithParsedTimeString(value);

      if (emitValueChanges) {
        this.valueChange(null);
      }
    }
  }

  /**
   * Parses the time in 'H:m' format and sets hours, minutes, and beforeNoon.
   * @param time - Time string in 'H:m' format.
   */
  private _parseTimeString(time: string): ParsedTimeString {
    this._logger.debug('Parsing timeString', time);
    this._logger.debug('Current beforeNoon before parsing timeString', this.beforeNoon);

    let [hours, minutes] = time.split(':');

    hours = hours || '0';
    minutes = minutes || '0';

    this._logger.debug('Raw hours', hours);
    this._logger.debug('Raw minutes', minutes);

    let hoursInteger = parseInt(hours);

    const result: ParsedTimeString = {
      beforeNoon: this.beforeNoon,
      hours: '0',
      minutes: '0',
    };

    hoursInteger = Math.min(hoursInteger, 23);

    this._logger.debug('Integer hours', hoursInteger);

    if (this.use24Horus) {
      result.hours = hoursInteger.toString();
    } else if (hoursInteger > 12) {
      result.beforeNoon = false;
      result.hours = hoursInteger > 12 ? (hoursInteger % 12).toString() : hoursInteger.toString();
    } else if (hoursInteger === 12) {
      result.beforeNoon = false;
      result.hours = hoursInteger.toString();
    } else if (this.beforeNoon) {
      result.hours = Math.max(0, hoursInteger).toString();
    } else {
      if (hoursInteger < 1) {
        result.beforeNoon = true;
        result.hours = '0';
      } else {
        result.hours = Math.min(12, hoursInteger).toString();
      }
    }

    result.minutes = Math.min(Math.max(parseInt(minutes), 0), 59).toString();

    this._logger.debug('Parsed result', result);

    return result;
  }

  /**
   * Updates component values using ParsedTimeString.
   * @param value - ParsedTimeString to update component values.
   */
  private _updateWithParsedTimeString(value: ParsedTimeString): void {
    const { beforeNoon, hours, minutes } = value;

    this.beforeNoon = beforeNoon;
    this.hours = hours;
    this.minutes = minutes;

    this._updateHoursInput();
    this._updateMinutesInput();
  }

  /** Sets the hours field value to the value of hours input. */
  private _updateHoursInput(): void {
    if (this.hoursInputRef) {
      this.hoursInputRef.nativeElement.value = this.hours;
    }
  }

  /** Sets the minutes field value to the value of minutes input. */
  private _updateMinutesInput(): void {
    if (this.minutesInputRef) {
      this.minutesInputRef.nativeElement.value = this.minutes;
    }
  }

  /**
   * Builds a time string in H:m format using ParsedTimeString.
   * @param value - ParsedTimeString to build the time string.
   */
  private _buildTimeString(value: ParsedTimeString): string {
    const { hours, minutes, beforeNoon } = value;

    if (this.use24Horus || beforeNoon) {
      return `${hours}:${minutes}`;
    } else {
      let hoursInteger = parseInt(hours);

      if (hoursInteger > 12) {
        hoursInteger = hoursInteger % 12;
      } else if (hoursInteger !== 12) {
        hoursInteger = hoursInteger + 12;
      }

      return `${hoursInteger}:${minutes}`;
    }
  }
}
