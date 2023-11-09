import { EventEmitter } from '@angular/core';

/**
 * This is an interface for focusable control components.
 * The control component must have an internal <input/> or focusable element,
 * and a focus or blur event triggered from the element must update the focused state and be emitted through the emitter.
 */
export interface SplFocusable {
  /** The emitter to emit when the focus event occurs.*/
  inputFocused: EventEmitter<FocusEvent>;

  /** The emitter to emit when the blur event occurs.*/
  inputBlurred: EventEmitter<FocusEvent>;

  /** The focused state of the component. */
  focused: boolean;

  /**
   * This is a method that should be called when a focus event occurs in <input/> or a focusable element.
   * @param event - FocusEvent.
   */
  onElementFocus(event: FocusEvent): void;

  /**
   * This is a method that should be called when a blur event occurs in <input/> or a focusable element.
   * @param event - FocusEvent.
   */
  onElementBlur(event: FocusEvent): void;
}
