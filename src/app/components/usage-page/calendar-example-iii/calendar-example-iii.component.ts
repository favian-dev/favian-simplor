import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplCalendarComponent, SplStrokeButtonDirective } from '@favian/simplor';

@Component({
  selector: 'app-calendar-example-iii',
  standalone: true,
  imports: [CommonModule, SplCalendarComponent, SplStrokeButtonDirective],
  templateUrl: './calendar-example-iii.component.html',
  styleUrls: ['./calendar-example-iii.component.scss'],
})
export class CalendarExampleIiiComponent {
  today = new Date();

  displayYear = this.today.getFullYear();
  displayMonth = this.today.getMonth();

  toDisplayDate(year: number, month: number): void {
    this.displayYear = year;
    this.displayMonth = month;
  }
}
