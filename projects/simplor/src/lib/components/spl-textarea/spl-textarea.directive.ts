import { AfterViewInit, Directive } from '@angular/core';
import { SplInputLike } from '../../abstracts/spl-input-like';

/**
 * This is a Directive to apply Simplor’s style to the <textarea> element.
 * The default value for spellcheck attribute is false.
 */
@Directive({
  selector: 'textarea[splTextarea]',
  host: {
    class: 'spl-input spl-textarea',
  },
  standalone: true,
})
export class SplTextareaDirective extends SplInputLike<HTMLTextAreaElement> implements AfterViewInit {
  constructor() {
    super();
  }
}
