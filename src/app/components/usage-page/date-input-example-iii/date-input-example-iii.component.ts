import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { maxDate, minDate, Nullable, SplControlValidatorDirective, SplDateInputComponent } from '@favian/simplor';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-date-input-example-iii',
  standalone: true,
  imports: [CommonModule, SplDateInputComponent, ReactiveFormsModule, SplControlValidatorDirective],
  templateUrl: './date-input-example-iii.component.html',
  styleUrls: ['./date-input-example-iii.component.scss'],
})
export class DateInputExampleIiiComponent {
  today = new Date();

  minDate = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() - 7);
  maxDate = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 7);

  formControl = new FormControl<Nullable<Date>>(null, [minDate(this.minDate), maxDate(this.maxDate)]);
}
