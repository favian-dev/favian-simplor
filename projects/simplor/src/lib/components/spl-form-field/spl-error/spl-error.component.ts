import { Component } from '@angular/core';
import { SplFormFieldItemComponent } from '../spl-form-field-item/spl-form-field-item.component';

/** This is a Component for displaying error text that can be used in SplFormFieldComponent. */
@Component({
  selector: 'spl-error',
  templateUrl: './spl-error.component.html',
  host: {
    class: 'spl-error',
  },
  standalone: true,
  imports: [],
  hostDirectives: [SplFormFieldItemComponent],
})
export class SplErrorComponent {}
