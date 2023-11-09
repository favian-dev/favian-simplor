```typescript
// select-example-ii.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplOptionComponent, SplSelectComponent } from '@favian/simplor';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-example-ii',
  standalone: true,
  imports: [CommonModule, SplSelectComponent, SplOptionComponent, FormsModule],
  templateUrl: './select-example-ii.component.html',
  styleUrls: ['./select-example-ii.component.scss'],
})
export class SelectExampleIiComponent {
  options = [1, 2, 3];

  value1 = '';
  value2 = '';
  value3 = '';
}
```

```html
<!-- select-example-ii.component.html -->

<spl-select [(ngModel)]="value1">
  <spl-option *ngFor="let option of options">
    Options {{option}}
  </spl-option>
</spl-select>

<div class="spl-fs-s spl-mt-4">
  Selected value: {{value1}}
</div>

<spl-select
  [(ngModel)]="value2"
  class="spl-mt-8">
  <spl-option
    *ngFor="let option of options"
    [value]="option">
    Options {{option}}
  </spl-option>
</spl-select>

<div class="spl-fs-s spl-mt-4">
  Selected value: {{value2}}
</div>

<spl-select
  [(ngModel)]="value3"
  class="spl-mt-8">
  <spl-option
    *ngFor="let option of options"
    [label]="'Selected options is ' + option"
    [value]="option">
    Options {{option}}
  </spl-option>
</spl-select>

<div class="spl-fs-s spl-mt-4">
  Selected value: {{value3}}
</div>
```
