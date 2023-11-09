```typescript
// box-example-i.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplBoxComponent } from '@favian/simplor';

@Component({
  selector: 'app-box-example-i',
  standalone: true,
  imports: [CommonModule, SplBoxComponent],
  templateUrl: './box-example-i.component.html',
  styleUrls: ['./box-example-i.component.scss'],
})
export class BoxExampleIComponent {}
```

```html
<!-- box-example-i.component.html -->

<spl-box>
  Default box
</spl-box>
```
