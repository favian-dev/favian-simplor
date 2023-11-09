import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createSplDateInputProvider, SplDateInputComponent } from '@favian/simplor';

@Component({
  selector: 'app-date-input-example-iv',
  standalone: true,
  imports: [CommonModule, SplDateInputComponent],
  templateUrl: './date-input-example-iv.component.html',
  styleUrls: ['./date-input-example-iv.component.scss'],
  providers: [
    createSplDateInputProvider({
      modalConfirmLabel: 'Okay',
      dateFormat: 'MM/dd/yyyy',
      dateLocale: 'en-US',
    }),
  ],
})
export class DateInputExampleIvComponent {}
