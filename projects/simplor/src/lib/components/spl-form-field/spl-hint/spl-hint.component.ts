import { Component } from '@angular/core';
import { SplFormFieldItemComponent } from '../spl-form-field-item/spl-form-field-item.component';

/** This is a Component for displaying hint text that can be used in SplFormFieldComponent. */
@Component({
  selector: 'spl-hint',
  templateUrl: './spl-hint.component.html',
  host: {
    class: 'spl-hint',
  },
  standalone: true,
  imports: [],
  hostDirectives: [SplFormFieldItemComponent],
})
export class SplHintComponent {}
