```typescript
// effect-example-i.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplEffectDirective, SplTheme } from '@favian/simplor';

@Component({
  selector: 'app-effect-example-i',
  standalone: true,
  imports: [CommonModule, SplEffectDirective],
  templateUrl: './effect-example-i.component.html',
  styleUrls: ['./effect-example-i.component.scss'],
})
export class EffectExampleIComponent {
  themes: SplTheme[] = ['none', 'primary', 'secondary', 'tertiary', 'warn', 'error', 'success'];
}
```

```html
<!-- effect-example-i.component.html -->

<div
  *ngFor="let theme of themes"
  [theme]="theme"
  class="box"
  splEffect>
  {{theme | titlecase}}
</div>

<div
  class="box"
  disableEffect
  splEffect>
  Disabled
</div>
```

```scss
// effect-example-i.component.scss

@import "projects/simplor/src/styles/styles";

.box {
  @extend .spl-flex;
  @extend .spl-flex-center;
  @extend .spl-fs-s;
  @extend .spl-clickable;
  width: 100px;
  height: 100px;
}

.box + .box {
  margin-top: 16px;
}
```
