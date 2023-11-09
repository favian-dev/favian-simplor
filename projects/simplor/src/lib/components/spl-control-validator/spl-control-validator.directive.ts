import { Directive, HostBinding, inject } from '@angular/core';
import { NgControl } from '@angular/forms';

/**
 * This is a Directive that validates elements to which NgControl is bound.
 * Element must have [formControl] or [ngControl] bound, and this Directive is exported as 'controlValidator'.
 */
@Directive({
  selector: '[splControlValidator]',
  exportAs: 'controlValidator',
  standalone: true,
})
export class SplControlValidatorDirective {
  /** The NgControl bound to the element. */
  private _ngControl: NgControl;

  constructor() {
    this._ngControl = inject(NgControl);
  }

  /**
   * Returns whether the bound NgControl is invalid.
   * If the NgControl is touched or dirty and the validity is invalid,
   * it returns true and binds the '.spl-invalid' class to the element.
   */
  @HostBinding('class.spl-invalid')
  get invalid(): boolean {
    return !!(this._ngControl.invalid && (this._ngControl.dirty || this._ngControl.touched));
  }

  /**
   * Returns whether the bound NgControl has the given error.
   * @param error - Error to check.
   */
  hasError(error: string): boolean {
    return this._ngControl.hasError(error);
  }
}
