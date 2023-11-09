import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/** This is a Component that creates a form field consisting of label, control, error, and hint. */
@Component({
  selector: 'spl-form-field',
  templateUrl: './spl-form-field.component.html',
  host: {
    class: 'spl-form-field',
  },
  standalone: true,
  imports: [CommonModule],
})
export class SplFormFieldComponent {}
