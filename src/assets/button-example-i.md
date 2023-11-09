```typescript
// button-example-i.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplButtonDirective, SplFlatButtonDirective, SplStrokeButtonDirective, SplTheme } from '@favian/simplor';

@Component({
  selector: 'app-button-example-i',
  standalone: true,
  imports: [CommonModule, SplButtonDirective, SplFlatButtonDirective, SplStrokeButtonDirective],
  templateUrl: './button-example-i.component.html',
  styleUrls: ['./button-example-i.component.scss'],
  host: {
    class: 'spl-flex spl-column spl-items-start',
  },
})
export class ButtonExampleIComponent {
  themes: SplTheme[] = ['none', 'primary', 'secondary', 'tertiary', 'warn', 'error', 'success'];
}
```

```html
<!-- button-example-i.component.html -->

<button
  *ngFor="let theme of themes"
  [theme]="theme"
  splButton>
  Basic Button
</button>

<button
  disabled
  splButton>
  Basic Button
</button>

<button
  *ngFor="let theme of themes"
  [theme]="theme"
  splFlatButton>
  Flat Button
</button>

<button
  disabled
  splFlatButton>
  Flat Button
</button>

<button
  *ngFor="let theme of themes"
  [theme]="theme"
  splStrokeButton>
  Stroke Button
</button>

<button
  disabled
  splStrokeButton>
  Stroke Button
</button>
```

```scss
// button-example-i.component.scss

button + button {
  margin-top: 8px;
}
```
