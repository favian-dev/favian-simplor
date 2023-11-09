import { AfterViewInit, Directive } from '@angular/core';
import { SplInputLike } from '../../abstracts/spl-input-like';

/**
 * This is a Directive that implements Simplor style and features to the <input/> element.
 * By default, the spellcheck attribute is false.
 */
@Directive({
  selector: 'input[splInput]',
  host: {
    class: 'spl-input',
  },
  standalone: true,
})
export class SplInputDirective extends SplInputLike<HTMLInputElement> implements AfterViewInit {
  constructor() {
    super();
  }
}
