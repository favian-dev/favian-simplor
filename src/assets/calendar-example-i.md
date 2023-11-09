```typescript
// calendar-example-i.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplCalendarComponent } from '@favian/simplor';

@Component({
  selector: 'app-calendar-example-i',
  standalone: true,
  imports: [CommonModule, SplCalendarComponent],
  templateUrl: './calendar-example-i.component.html',
  styleUrls: ['./calendar-example-i.component.scss'],
})
export class CalendarExampleIComponent {}
```

```html
<!-- calendar-example-i.component.html -->

<spl-calendar></spl-calendar>
```
