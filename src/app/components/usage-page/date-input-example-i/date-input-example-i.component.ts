import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Nullable, SplDateInputComponent } from '@favian/simplor';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-date-input-example-i',
  standalone: true,
  imports: [CommonModule, SplDateInputComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './date-input-example-i.component.html',
  styleUrls: ['./date-input-example-i.component.scss'],
})
export class DateInputExampleIComponent {
  value: Nullable<Date> = new Date();
  formControl = new FormControl<Nullable<Date>>(new Date());
  disabledFormControl = new FormControl<Nullable<Date>>({
    value: new Date(),
    disabled: true,
  });
}
