```typescript
// date-input-example-iii.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { maxDate, minDate, Nullable, SplControlValidatorDirective, SplDateInputComponent } from '@favian/simplor';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-date-input-example-iii',
  standalone: true,
  imports: [CommonModule, SplDateInputComponent, ReactiveFormsModule, SplControlValidatorDirective],
  templateUrl: './date-input-example-iii.component.html',
  styleUrls: ['./date-input-example-iii.component.scss'],
})
export class DateInputExampleIiiComponent {
  today = new Date();

  minDate = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() - 7);
  maxDate = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 7);

  formControl = new FormControl<Nullable<Date>>(null, [minDate(this.minDate), maxDate(this.maxDate)]);
}
```

```html
<!-- date-input-example-iii.component.html -->

<spl-date-input
  #dateInputValidator="controlValidator"
  [formControl]="formControl"
  [minDate]="minDate"
  [maxDate]="maxDate"
  placeholder="YYYY-MM-DD"
  splControlValidator></spl-date-input>

<div
  *ngIf="dateInputValidator.invalid"
  class="spl-fs-s spl-mt-4">
  <ng-container *ngIf="dateInputValidator.hasError('minDate')">
    Date smaller than minDate is not allowed.
  </ng-container>

  <ng-container *ngIf="dateInputValidator.hasError('maxDate')">
    Date bigger than maxDate is not allowed.
  </ng-container>
</div>
```
