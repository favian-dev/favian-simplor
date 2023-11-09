```typescript
// horizontal-slider-example-i.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplHorizontalSliderComponent } from '@favian/simplor';

@Component({
  selector: 'app-horizontal-slider-example-i',
  standalone: true,
  imports: [CommonModule, SplHorizontalSliderComponent],
  templateUrl: './horizontal-slider-example-i.component.html',
  styleUrls: ['./horizontal-slider-example-i.component.scss'],
})
export class HorizontalSliderExampleIComponent {
  items = Array(100);
}
```

```html
<!-- horizontal-slider-example-i.component.html -->

<spl-horizontal-slider>
  <div
    *ngFor="let item of items; let index = index"
    class="spl-flex-00auto spl-flex spl-flex-center spl-ph-16">
    Item {{index + 1}}
  </div>
</spl-horizontal-slider>
```

