```typescript
// overlay-example-i.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplOverlayService, SplStrokeButtonDirective } from '@favian/simplor';
import { TestOverlayIComponent } from './test-overlay-i/test-overlay-i.component';

@Component({
  selector: 'app-overlay-example-i',
  standalone: true,
  imports: [CommonModule, SplStrokeButtonDirective],
  templateUrl: './overlay-example-i.component.html',
  styleUrls: ['./overlay-example-i.component.scss'],
})
export class OverlayExampleIComponent {
  constructor(private _overlayService: SplOverlayService) {}

  openOverlay(): void {
    this._overlayService.open(TestOverlayIComponent);
  }
}
```

```html
<!-- overlay-example-i.component.html -->

<button
  (click)="openOverlay()"
  splStrokeButton>
  Open Overlay
</button>

<div class="spl-fs-s spl-pt-4">
  See left top corner
</div>
```

```typescript
// test-overlay-i.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-overlay-i',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-overlay-i.component.html',
  styleUrls: ['./test-overlay-i.component.scss'],
})
export class TestOverlayIComponent {}
```

```html
<!-- test-overlay-i.component.html -->

<p>Close with Escape button</p>
```
