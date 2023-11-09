import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplFormFieldComponent, SplInputDirective } from '@favian/simplor';

@Component({
  selector: 'app-form-field-example-i',
  standalone: true,
  imports: [CommonModule, SplFormFieldComponent, SplInputDirective],
  templateUrl: './form-field-example-i.component.html',
  styleUrls: ['./form-field-example-i.component.scss'],
})
export class FormFieldExampleIComponent {}
