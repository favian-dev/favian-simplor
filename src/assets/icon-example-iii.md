```typescript
// icon-example-iii.component.ts

import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {createSplIconProvider, SplIconComponent} from '@favian/simplor';

@Component({
  selector: 'app-icon-example-iii',
  standalone: true,
  imports: [CommonModule, SplIconComponent],
  templateUrl: './icon-example-iii.component.html',
  styleUrl: './icon-example-iii.component.scss',
  providers: [
    createSplIconProvider({
      weight: '100',
      fill: false,
    }),
  ],
})
export class IconExampleIiiComponent {}
```

```html
<!-- icon-example-iii.component.html -->

<spl-icon>search</spl-icon>
<spl-icon>home</spl-icon>
<spl-icon>menu</spl-icon>
<spl-icon>close</spl-icon>
```
