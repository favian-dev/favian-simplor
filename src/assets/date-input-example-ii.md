```typescript
// date-input-example-ii.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Nullable, SplDateInputComponent } from '@favian/simplor';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-date-input-example-ii',
  standalone: true,
  imports: [CommonModule, SplDateInputComponent, FormsModule],
  templateUrl: './date-input-example-ii.component.html',
  styleUrls: ['./date-input-example-ii.component.scss'],
})
export class DateInputExampleIiComponent {
  today = new Date();

  minDate = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() - 7);
  maxDate = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 7);

  value: Nullable<Date> = null;
}
```

```html
<!-- date-input-example-ii.component.html -->

<!-- minDate and maxDate do not limit the dates that can be entered. -->
<spl-date-input
  [(ngModel)]="value"
  [minDate]="minDate"
  [maxDate]="maxDate"
  placeholder="YYYY-MM-DD"></spl-date-input>
```
