import { Directive, ElementRef, inject } from '@angular/core';

/** Directive to make hints and errors to be selected by a single ContentChildren from SplFormFieldComponent */
@Directive({
  selector: 'spl-form-field-item',
  standalone: true,
  host: {
    class: 'spl-form-field-item',
  },
})
export class SplFormFieldItemComponent {
  /** ElementRef to move rendering position from SplFormFieldComponent */
  public readonly elementRef: ElementRef<HTMLElement> = inject(ElementRef);
}
