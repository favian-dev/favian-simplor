```typescript
// progress-bar-example-i.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplProgressBarComponent, SplTheme } from '@favian/simplor';

@Component({
  selector: 'app-progress-bar-example-i',
  standalone: true,
  imports: [CommonModule, SplProgressBarComponent],
  templateUrl: './progress-bar-example-i.component.html',
  styleUrls: ['./progress-bar-example-i.component.scss'],
})
export class ProgressBarExampleIComponent {
  themes: SplTheme[] = ['none', 'primary', 'secondary', 'tertiary', 'warn', 'error', 'success'];

  total = 10;
  value = 5;
}
```

```html
<!-- progress-bar-example-i.component.html -->

<spl-progress-bar
  *ngFor="let theme of themes"
  [theme]="theme"
  [total]="total"
  [value]="value"></spl-progress-bar>
```

```scss
// progress-bar-example-i.component.scss

spl-progress-bar + spl-progress-bar {
  margin-top: 8px;
}
```
