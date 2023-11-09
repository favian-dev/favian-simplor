```typescript
// icon-example-ii.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplIconComponent } from '@favian/simplor';

@Component({
  selector: 'app-icon-example-ii',
  standalone: true,
  imports: [CommonModule, SplIconComponent],
  templateUrl: './icon-example-ii.component.html',
  styleUrls: ['./icon-example-ii.component.scss'],
})
export class IconExampleIiComponent {}
```

```html
<!-- icon-example-ii.component.html -->

<spl-icon weight="700">search</spl-icon>
<spl-icon fill>home</spl-icon>
<spl-icon opticalSize="48"
          style="font-size: 48px">menu
</spl-icon>
<spl-icon grade="-25">close</spl-icon>
```
