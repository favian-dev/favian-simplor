```typescript
// calendar-example-v.component.ts

import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {createSplCalendarProvider, SplCalendarComponent} from '@favian/simplor';

@Component({
  selector: 'app-calendar-example-v',
  standalone: true,
  imports: [CommonModule, SplCalendarComponent],
  templateUrl: './calendar-example-v.component.html',
  styleUrls: ['./calendar-example-v.component.scss'],
  providers: [
    createSplCalendarProvider({
      yearMonthFormat: 'yyyy/M',
      dayOfWeekFormat: 'EEEEE',
      dateFormatTimezone: 'en-US',
      todayButtonLabel: 'Go to Today',
      dateFormat: 'dd',
    }),
  ],
})
export class CalendarExampleVComponent {
}
```

```html
<!-- calendar-example-v.component.html -->

<spl-calendar></spl-calendar>
```
