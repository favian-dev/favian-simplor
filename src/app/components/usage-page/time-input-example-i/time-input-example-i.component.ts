import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplTimeInputComponent } from '@favian/simplor';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-time-input-example-i',
  standalone: true,
  imports: [CommonModule, SplTimeInputComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './time-input-example-i.component.html',
  styleUrls: ['./time-input-example-i.component.scss'],
  host: {
    class: 'spl-flex spl-column spl-items-start',
  },
})
export class TimeInputExampleIComponent {
  today = new Date();

  value = `${this.today.getHours()}:${this.today.getMinutes()}`;

  formControl = new FormControl(`${this.today.getHours()}:${this.today.getMinutes()}`);
}
