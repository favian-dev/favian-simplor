```typescript
// overlay-example-ii.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplOverlayService, SplStrokeButtonDirective } from '@favian/simplor';
import { TestOverlayIiComponent } from './test-overlay-ii/test-overlay-ii.component';

@Component({
  selector: 'app-overlay-example-ii',
  standalone: true,
  imports: [CommonModule, SplStrokeButtonDirective],
  templateUrl: './overlay-example-ii.component.html',
  styleUrls: ['./overlay-example-ii.component.scss'],
})
export class OverlayExampleIiComponent {
  constructor(private _overlayService: SplOverlayService) {}

  openOverlay(): void {
    this._overlayService.open(TestOverlayIiComponent);
  }
}
```

```html
<!-- overlay-example-ii.component.html -->

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
// test-overlay-ii.component.ts

import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplOverlayRef, SplStrokeButtonDirective } from '@favian/simplor';

@Component({
  selector: 'app-test-overlay-ii',
  standalone: true,
  imports: [CommonModule, SplStrokeButtonDirective],
  templateUrl: './test-overlay-ii.component.html',
  styleUrls: ['./test-overlay-ii.component.scss'],
})
export class TestOverlayIiComponent {
  constructor(@Inject(SplOverlayRef) private _overlayRef: SplOverlayRef) {}

  close(): void {
    this._overlayRef.close();
  }
}
```

```html
<!-- test-overlay-ii.component.html -->

<button
  (click)="close()"
  splStrokeButton>
  Close overlay
</button>
```
