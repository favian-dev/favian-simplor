```typescript
// calendar-example-vi.component.ts

import {Component, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
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
```

```html
<!-- calendar-example-vi.component.html -->

<spl-calendar>
  <ng-template
    let-date="date"
    let-today="today"
    splCalendarDate>
    @if (today) {
      T
    } @else {
      {{ date | date: 'd' }}
    }
  </ng-template>
</spl-calendar>

<spl-calendar>
  <ng-template
    let-date="date"
    let-today="today"
    splCalendarDate>
    @if (today) {
      T
    } @else {
      {{ date | date: 'd' }}
    }
  </ng-template>

  <ng-template
    let-date="date"
    splCalendarDateExtra>
    @if (getCalendarData(date)) {
      <div class="badge"></div>
    }
  </ng-template>
</spl-calendar>
```

```scss
/* calendar-example-vi.component.html */

.badge {
  position: absolute;
  top: 2px;
  right: 50%;
  translate: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--font-size-xs);
  color: var(--white-100);
  background-color: var(--primary-100);
  width: 6px;
  height: 6px;
  border-radius: 3px;
}
```
