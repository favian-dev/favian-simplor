```typescript
// select-example-i.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SplOptionComponent, SplSelectComponent } from '@favian/simplor';

@Component({
  selector: 'app-select-example-i',
  standalone: true,
  imports: [CommonModule, SplSelectComponent, SplOptionComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './select-example-i.component.html',
  styleUrls: ['./select-example-i.component.scss'],
})
export class SelectExampleIComponent {
  options = [1, 2, 3];

  value = 1;

  formControl = new FormControl(1);
}
```

```html
<!-- select-example-i.component.html -->

<spl-select placeholder="Select...">
  <spl-option *ngFor="let option of options">
    Option {{option}}
  </spl-option>
</spl-select>

<spl-select
  [(ngModel)]="value"
  placeholder="Select...">
  <spl-option
    *ngFor="let option of options"
    [value]="option">
    Option {{option}}
  </spl-option>
</spl-select>

<spl-select
  [formControl]="formControl"
  placeholder="Select...">
  <spl-option
    *ngFor="let option of options"
    [value]="option">
    Option {{option}}
  </spl-option>
</spl-select>

<spl-select disabled>
  <spl-option *ngFor="let option of options">
    Option {{option}}
  </spl-option>
</spl-select>
```
