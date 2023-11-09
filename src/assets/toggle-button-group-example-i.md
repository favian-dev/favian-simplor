```typescript
// toggle-button-group-example-i.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplToggleButtonComponent, SplToggleButtonGroupComponent } from '@favian/simplor';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-toggle-button-group-example-i',
  standalone: true,
  imports: [CommonModule, SplToggleButtonGroupComponent, SplToggleButtonComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './toggle-button-group-example-i.component.html',
  styleUrls: ['./toggle-button-group-example-i.component.scss'],
  host: {
    class: 'spl-flex spl-column spl-items-start',
  },
})
export class ToggleButtonGroupExampleIComponent {
  options = [1, 2, 3];

  value = 2;

  formControl = new FormControl(3);
}
```

```html
<!-- toggle-button-group-example-i.component.html -->

<spl-toggle-button-group>
  <spl-toggle-button
    *ngFor="let option of options"
    [value]="option">
    Option {{option}}
  </spl-toggle-button>
</spl-toggle-button-group>

<spl-toggle-button-group [(ngModel)]="value">
  <spl-toggle-button
    *ngFor="let option of options"
    [value]="option">
    Option {{option}}
  </spl-toggle-button>
</spl-toggle-button-group>

<spl-toggle-button-group [formControl]="formControl">
  <spl-toggle-button
    *ngFor="let option of options"
    [value]="option">
    Option {{option}}
  </spl-toggle-button>
</spl-toggle-button-group>

<spl-toggle-button-group disabled>
  <spl-toggle-button
    *ngFor="let option of options"
    [value]="option">
    Option {{option}}
  </spl-toggle-button>
</spl-toggle-button-group>

<spl-toggle-button-group>
  <spl-toggle-button
    *ngFor="let option of options; let index = index"
    [disabled]="index === 1"
    [value]="option">
    Option {{option}}
  </spl-toggle-button>
</spl-toggle-button-group>
```

```scss
// toggle-button-group-example-i.component.scss

spl-toggle-button-group + spl-toggle-button-group {
  margin-top: 24px;
}
```
