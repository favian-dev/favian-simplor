```typescript
// date-input-example.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Nullable, SplDateInputComponent } from '@favian/simplor';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-date-input-example-i',
  standalone: true,
  imports: [CommonModule, SplDateInputComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './date-input-example-i.component.html',
  styleUrls: ['./date-input-example-i.component.scss'],
})
export class DateInputExampleIComponent {
  value: Nullable<Date> = new Date();
  formControl = new FormControl<Nullable<Date>>(new Date());
  disabledFormControl = new FormControl<Nullable<Date>>({
    value: new Date(),
    disabled: true,
  });
}
```

```html
<!-- date-input-example-i.component.html -->

<spl-date-input placeholder="YYYY-MM-DD"></spl-date-input>

<spl-date-input
  [(ngModel)]="value"
  placeholder="YYYY-MM-DD"></spl-date-input>

<spl-date-input
  [formControl]="formControl"
  placeholder="YYYY-MM-DD"></spl-date-input>

<spl-date-input
  [(ngModel)]="value"
  placeholder="YYYY-MM-DD"
  disabled></spl-date-input>

<spl-date-input
  [formControl]="disabledFormControl"
  placeholder="YYYY-MM-DD"></spl-date-input>
```
