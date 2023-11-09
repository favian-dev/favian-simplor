```typescript
// calendar-example-iv.component.html

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Nullable, SplCalendarComponent } from '@favian/simplor';

@Component({
  selector: 'app-calendar-example-iv',
  standalone: true,
  imports: [CommonModule, SplCalendarComponent],
  templateUrl: './calendar-example-iv.component.html',
  styleUrls: ['./calendar-example-iv.component.scss'],
})
export class CalendarExampleIvComponent {
  today = new Date();

  minDate = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() - 7);
  maxDate = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 7);

  value: Nullable<Date> = null;
}
```

```html
<!-- calendar-example-iv.component.html -->

<spl-calendar
  [(value)]="value"
  [minDate]="minDate"
  [maxDate]="maxDate"></spl-calendar>
```
