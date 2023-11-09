```typescript
// radio-group-example-ii.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplRadioButtonComponent, SplRadioGroupComponent } from '@favian/simplor';

@Component({
  selector: 'app-radio-group-example-ii',
  standalone: true,
  imports: [CommonModule, SplRadioButtonComponent, SplRadioGroupComponent],
  templateUrl: './radio-group-example-ii.component.html',
  styleUrls: ['./radio-group-example-ii.component.scss'],
  host: {
    class: 'spl-flex spl-column spl-items-start',
  },
})
export class RadioGroupExampleIiComponent {
  options = [1, 2, 3];
}
```

```html
<!-- radio-group-example-ii.component.html -->

<spl-radio-group direction="row">
  <spl-radio-button
    *ngFor="let option of options"
    [value]="option">
    Option {{option}}
  </spl-radio-button>
</spl-radio-group>

<spl-radio-group direction="column">
  <spl-radio-button
    *ngFor="let option of options"
    [value]="option">
    Option {{option}}
  </spl-radio-button>
</spl-radio-group>
```

```scss
// radio-group-example-ii.component.scss

spl-radio-group + spl-radio-group {
  margin-top: 8px;
}
```
