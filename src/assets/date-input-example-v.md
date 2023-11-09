```typescript
// date-input-example-v.component.html

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createSplCalendarProvider, createSplDateInputProvider, SplDateInputComponent } from '@favian/simplor';

@Component({
  selector: 'app-date-input-example-v',
  standalone: true,
  imports: [CommonModule, SplDateInputComponent],
  templateUrl: './date-input-example-v.component.html',
  styleUrls: ['./date-input-example-v.component.scss'],
  providers: [
    createSplDateInputProvider({
      modalConfirmLabel: 'Okay',
      dateFormat: 'MM/dd/yyyy',
      dateLocale: 'en-US',
    }),
    createSplCalendarProvider({
      yearMonthFormat: 'yyyy/M',
      dayOfWeekFormat: 'EEEEE',
      dateFormatTimezone: 'en-US',
      todayButtonLabel: 'Go to Today',
      dateFormat: 'dd',
    }),
  ],
})
export class DateInputExampleVComponent {}
```

```html
<!-- date-input-example-v.component.html -->

<spl-date-input placeholder="MM/DD/YYYY"></spl-date-input>
```
