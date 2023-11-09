import { Component, HostBinding, HostListener, Input } from '@angular/core';
import { SplControl } from '../../abstracts/spl-control';
import { BooleanAttribute } from '../../utils/type.util';
import { convertBooleanAttribute } from '../../utils/convert.util';
import { CommonModule } from '@angular/common';
import { SplIconComponent } from '../spl-icon/spl-icon.component';

/**
 * Component that operates similarly to <input type="checkbox"/>.
 * When the user clicks, the boolean value changes. This can also be done using the space key.
 */
@Component({
  selector: 'spl-checkbox',
  templateUrl: './spl-checkbox.component.html',
  host: {
    class: 'spl-checkbox-button',
  },
  standalone: true,
  imports: [CommonModule, SplIconComponent],
})
export class SplCheckboxComponent extends SplControl {
  /**
   * The current value of the Component.
   * Binding class '.spl-active' according to the value.
   */
  @HostBinding('class.spl-active') value = false;

  /** The focused state of the component. */
  focused = false;

  constructor() {
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

  /** Returns tabindex according to disabled status and binds value to attribute. */
  @HostBinding('attr.tabindex')
  get tabindex(): string {
    return this.disabled ? '-1' : '0';
  }

  /** Listen to the focus event of the host element to update the focused state to true. */
  @HostListener('focus')
  onHostFocus(): void {
    this.focused = true;
  }

  /** Listen to the focus event of the host element to update the focused state to false. */
  @HostListener('blur')
  onHostBlur(): void {
    this.focused = false;
  }

  /** Listen to the click event of the host element to switch the value. */
  @HostListener('click')
  onHostClick(): void {
    this.switchValue();
  }

  /**
   * Listen to the space keydown event of the host element to switch the boolean value.
   * To prevent side effects, event is not propagated and the default is prevented.
   * @param event - KeyboardEvent.
   */
  @HostListener('keydown.space', ['$event'])
  onHostSpace(event: KeyboardEvent): void {
    event.stopPropagation();
    event.preventDefault();

    this.switchValue();
  }

  /** Switches the current value from true to false or vice versa. */
  switchValue(): void {
    if (this.disabled) {
      return;
    }

    const value = !this.value;

    this.valueChange(value);
    this.writeValue(value);
  }

  /**
   * Sets a new value for Component.
   * @param obj - New value to set.
   */
  override writeValue(obj: any): void {
    this.value = !!obj;
  }

  /**
   * Sets the disabled state on the Component.
   * @param isDisabled - Disabled state to set.
   */
  override setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
