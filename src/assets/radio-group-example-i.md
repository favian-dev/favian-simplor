```typescript
// radio-group-example-i.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplRadioButtonComponent, SplRadioGroupComponent } from '@favian/simplor';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-radio-group-example-i',
  standalone: true,
  imports: [CommonModule, SplRadioGroupComponent, SplRadioButtonComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './radio-group-example-i.component.html',
  styleUrls: ['./radio-group-example-i.component.scss'],
  host: {
    class: 'spl-flex spl-column spl-items-start',
  },
})
export class RadioGroupExampleIComponent {
  options = [1, 2, 3];

  value = 1;

  formControl = new FormControl(1);
}
```

```html
<!-- radio-group-example-i.component.html -->

<spl-radio-group>
  <spl-radio-button
    *ngFor="let option of options"
    [value]="option">
    Option {{option}}
  </spl-radio-button>
</spl-radio-group>

<spl-radio-group [(ngModel)]="value">
  <spl-radio-button
    *ngFor="let option of options"
    [value]="option">
    Option {{option}}
  </spl-radio-button>
</spl-radio-group>

<spl-radio-group [formControl]="formControl">
  <spl-radio-button
    *ngFor="let option of options"
    [value]="option">
    Option {{option}}
  </spl-radio-button>
</spl-radio-group>

<spl-radio-group disabled>
  <spl-radio-button
    *ngFor="let option of options"
    [value]="option">
    Option {{option}}
  </spl-radio-button>
</spl-radio-group>
```

```scss
// radio-group-example-i.component.scss

spl-radio-group + spl-radio-group {
  margin-top: 8px;
}
```
