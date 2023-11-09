```typescript
// calendar-example-ii.component.ts

import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Nullable, RangedDate, SplCalendarComponent} from '@favian/simplor';

@Component({
  selector: 'app-calendar-example-ii',
  standalone: true,
  imports: [CommonModule, SplCalendarComponent],
  templateUrl: './calendar-example-ii.component.html',
  styleUrls: ['./calendar-example-ii.component.scss'],
})
export class CalendarExampleIiComponent {
  singleValue: Nullable<Date> = null;
  rangedValue: RangedDate = [null, null];
  multiValue: Date[] = [];
}
```

```html
<!-- calendar-example-ii.component.html -->

<!-- 'single' is default value for type. -->
<spl-calendar
  [(value)]="singleValue"
  type="single"></spl-calendar>

<spl-calendar
  [(value)]="rangedValue"
  type="ranged"></spl-calendar>

<spl-calendar
  [(value)]="multiValue"
  type="multi"></spl-calendar>
```
