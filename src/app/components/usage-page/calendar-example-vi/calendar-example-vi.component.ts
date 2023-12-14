import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  isSameDate,
  SplCalendarComponent,
  SplCalendarDateDirective,
  SplCalendarDateExtraDirective,
} from '@favian/simplor';

@Component({
  selector: 'app-calendar-example-vi',
  standalone: true,
  imports: [CommonModule, SplCalendarComponent, SplCalendarDateDirective, SplCalendarDateExtraDirective],
  templateUrl: './calendar-example-vi.component.html',
  styleUrl: './calendar-example-vi.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CalendarExampleViComponent {
  today = new Date();

  data: Date[] = [
    new Date(this.today.setDate(this.today.getDate() - 1)),
    new Date(this.today.setDate(this.today.getDate() + 3)),
  ];

  getCalendarData(date: Date): Date | undefined {
    return this.data.find((item) => isSameDate(date, item));
  }
}
