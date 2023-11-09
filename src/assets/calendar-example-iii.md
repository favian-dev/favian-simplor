```typescript
// calendar-example-iii.component.ts

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
```

```html
<!-- calendar-example-iii.component.html -->

<spl-calendar
  [(displayYear)]="displayYear"
  [(displayMonth)]="displayMonth"></spl-calendar>

<button
  (click)="toDisplayDate(2000, 0)"
  splStrokeButton>
  To Jan, 2000
</button>

<button
  (click)="toDisplayDate(1990, 0)"
  splStrokeButton>
  To Jan, 1990
</button>
```
