import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/** This is a Component for displaying error text that can be used in SplFormFieldComponent. */
@Component({
  selector: 'spl-error',
  templateUrl: './spl-error.component.html',
  host: {
    class: 'spl-error spl-form-field-item',
  },
  standalone: true,
  imports: [CommonModule],
})
export class SplErrorComponent {}
