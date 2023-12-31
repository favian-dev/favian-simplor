import { Component } from '@angular/core';
import {
  SplControlValidatorDirective,
  SplErrorComponent,
  SplFormFieldComponent,
  SplHintComponent,
  SplInputDirective,
} from '@favian/simplor';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-field-example-ii',
  standalone: true,
  imports: [
    SplFormFieldComponent,
    SplInputDirective,
    SplHintComponent,
    SplErrorComponent,
    ReactiveFormsModule,
    SplControlValidatorDirective,
  ],
  templateUrl: './form-field-example-ii.component.html',
  styleUrls: ['./form-field-example-ii.component.scss'],
})
export class FormFieldExampleIiComponent {
  formControl = new FormControl('', Validators.email);
}
