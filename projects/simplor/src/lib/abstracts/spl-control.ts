import { Directive, inject } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Nullable } from '../utils/type.util';

/**
 * This is an abstract class that implements ControlValueAccessor.
 * By extending this to Component or Directive, you can bind [ngModel] or [formControl] to the corresponding class.
 */
@Directive()
export abstract class SplControl implements ControlValueAccessor {
  /** This is an NgControl bound to a Component or Directive. */
  public ngControl: Nullable<NgControl>;

  /** This is the onChange function registered from NgControl. */
  protected _onChange: any;

  /** This is the onTouched function registered from NgControl. */
  protected _onTouched: any;

  protected constructor() {
    this.ngControl = inject(NgControl, { optional: true });

    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  /**
   * This is a method for writing a value into a Component or Directive.
   * The entered value must be reflected in the Component or Directive through the implementation of this method.
   * @param obj - This is the value you want to write in the Component or Directive.
   */
  abstract writeValue(obj: any): void;

  /** This is a method to register the onChange function in ControlValueAccessor. */
  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  /** This is a method to register the onTouched function in ControlValueAccessor. */
  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  /**
   * This method will be called when the disabled state of the NgControl changes.
   * Implement this method to set the behavior of a Component or Directive according to a disabled state.
   * @param isDisabled - This is the changed disabled state value.
   */
  abstract setDisabledState(isDisabled: boolean): void;

  /**
   * This is a method that calls the registered onChange function.
   * This emits the new value to the outside world and changes the Control to the dirty state.
   * @param value - This is the new value to be changed.
   */
  valueChange(value: any): void {
    if (this._onChange) {
      this._onChange(value);
    }
  }

  /** Change the Control to the touched state by calling the registered onTouched function. */
  markAsTouched(): void {
    if (this._onTouched) {
      this._onTouched();
    }
  }
}
