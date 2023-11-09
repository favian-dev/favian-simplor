```typescript
// icon-example-i.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplIconComponent } from '@favian/simplor';

@Component({
  selector: 'app-icon-example-i',
  standalone: true,
  imports: [CommonModule, SplIconComponent],
  templateUrl: './icon-example-i.component.html',
  styleUrls: ['./icon-example-i.component.scss'],
})
export class IconExampleIComponent {}
```

```html
<!-- icon-example-i.component.html -->

<spl-icon>search</spl-icon>
<spl-icon>home</spl-icon>
<spl-icon>menu</spl-icon>
<spl-icon>close</spl-icon>
```
