```typescript
// overlay-example-vi.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplOverlayService, SplStrokeButtonDirective } from '@favian/simplor';
import { TestOverlayViComponent } from './test-overlay-vi/test-overlay-vi.component';

@Component({
  selector: 'app-overlay-example-vi',
  standalone: true,
  imports: [CommonModule, SplStrokeButtonDirective],
  templateUrl: './overlay-example-vi.component.html',
  styleUrls: ['./overlay-example-vi.component.scss'],
})
export class OverlayExampleViComponent {
  constructor(private _overlayService: SplOverlayService) {}

  openOverlay(): void {
    this._overlayService.open(TestOverlayViComponent, {
      providers: [
        {
          provide: 'PROVIDE_OVERLAY_DATA', // Use any injection token.
          useValue: 'Provided data',
        },
      ],
    });
  }
}
```

```html
<!-- overlay-example-vi.component.html -->

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
// test-overlay-vi.component.ts

import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-overlay-vi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-overlay-vi.component.html',
  styleUrls: ['./test-overlay-vi.component.scss'],
})
export class TestOverlayViComponent {
  constructor(@Inject('PROVIDE_OVERLAY_DATA') public providedData: string) {}
}
```

```html
<!-- test-overlay-vi.component.html -->

{{providedData}}
```
