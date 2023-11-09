```typescript
// toggle-button-group-example-ii.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplToggleButtonComponent, SplToggleButtonGroupComponent } from '@favian/simplor';

@Component({
  selector: 'app-toggle-button-group-example-ii',
  standalone: true,
  imports: [CommonModule, SplToggleButtonComponent, SplToggleButtonGroupComponent],
  templateUrl: './toggle-button-group-example-ii.component.html',
  styleUrls: ['./toggle-button-group-example-ii.component.scss'],
  host: {
    class: 'spl-flex spl-column spl-items-start',
  },
})
export class ToggleButtonGroupExampleIiComponent {
  options = [1, 2, 3];
}
```

```html
<!-- toggle-button-group-example-ii.component.html -->

<spl-toggle-button-group direction="horizontal">
  <spl-toggle-button
    *ngFor="let option of options"
    [value]="option">
    Option {{option}}
  </spl-toggle-button>
</spl-toggle-button-group>

<spl-toggle-button-group direction="vertical">
  <spl-toggle-button
    *ngFor="let option of options"
    [value]="option">
    Option {{option}}
  </spl-toggle-button>
</spl-toggle-button-group>
```

```scss
// toggle-button-group-example-ii.component.scss

spl-toggle-button-group + spl-toggle-button-group {
  margin-top: 24px;
}
```
