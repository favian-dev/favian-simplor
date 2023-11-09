```typescript
// horizontal-slider-example-ii.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplHorizontalSliderComponent } from '@favian/simplor';

@Component({
  selector: 'app-horizontal-slider-example-ii',
  standalone: true,
  imports: [CommonModule, SplHorizontalSliderComponent],
  templateUrl: './horizontal-slider-example-ii.component.html',
  styleUrls: ['./horizontal-slider-example-ii.component.scss'],
})
export class HorizontalSliderExampleIiComponent {
  items = Array(100);

  scrollLeft = 0;
  scrolling = false;

  onScroll(event: Event): void {
    this.scrolling = true;
    this.scrollLeft = (event.target as HTMLElement).scrollLeft;
  }

  onScrollEnd(event: Event): void {
    this.scrolling = false;
    this.scrollLeft = (event.target as HTMLElement).scrollLeft;
  }
}
```

```html
<!-- horizontal-slider-example-ii.component.html -->

<spl-horizontal-slider
  (scroll)="onScroll($event)"
  (scrollend)="onScrollEnd($event)">
  <div
    *ngFor="let item of items; let index = index"
    class="spl-flex-00auto spl-flex spl-flex-center spl-ph-16">
    Item {{index + 1}}
  </div>
</spl-horizontal-slider>

<div class="spl-fs-s spl-mt-4">
  {{scrolling ? 'Slider is scrolling' : 'Slide is not scrolling'}}
</div>

<div class="spl-fs-s spl-mt-4">
  ScrollLeft: {{scrollLeft}}
</div>
```
