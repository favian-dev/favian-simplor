import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Nullable, SplDateInputComponent } from '@favian/simplor';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-date-input-example-ii',
  standalone: true,
  imports: [CommonModule, SplDateInputComponent, FormsModule],
  templateUrl: './date-input-example-ii.component.html',
  styleUrls: ['./date-input-example-ii.component.scss'],
})
export class DateInputExampleIiComponent {
  today = new Date();

  minDate = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() - 7);
  maxDate = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 7);

  value: Nullable<Date> = null;
}
