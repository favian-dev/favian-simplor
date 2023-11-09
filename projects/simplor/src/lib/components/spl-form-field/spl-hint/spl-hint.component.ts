import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/** This is a Component for displaying hint text that can be used in SplFormFieldComponent. */
@Component({
  selector: 'spl-hint',
  templateUrl: './spl-hint.component.html',
  host: {
    class: 'spl-hint spl-form-field-item',
  },
  standalone: true,
  imports: [CommonModule],
})
export class SplHintComponent {}
