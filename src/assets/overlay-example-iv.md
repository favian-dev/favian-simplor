```typescript
// overlay-example-iv.component.ts

import { Component, DestroyRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplOverlayRef, SplOverlayService, SplStrokeButtonDirective } from '@favian/simplor';
import { TestOverlayIvComponent } from './test-overlay-iv/test-overlay-iv.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-overlay-example-iv',
  standalone: true,
  imports: [CommonModule, SplStrokeButtonDirective],
  templateUrl: './overlay-example-iv.component.html',
  styleUrls: ['./overlay-example-iv.component.scss'],
})
export class OverlayExampleIvComponent {
  result?: string;

  private _overlayRef?: SplOverlayRef;

  constructor(
    private _overlayService: SplOverlayService,
    private _destroyRef: DestroyRef,
  ) {}

  openOverlay(): void {
    this._overlayRef = this._overlayService.open(TestOverlayIvComponent);

    this._overlayRef.onClose.pipe(takeUntilDestroyed(this._destroyRef)).subscribe((result) => {
      this.result = result;

      delete this._overlayRef;
    });
  }
}
```

```html
<!-- overlay-example-iv.component.html -->

<button
  (click)="openOverlay()"
  splStrokeButton>
  Open Overlay
</button>

<div class="spl-fs-s spl-pt-4">
  See left top corner
</div>

<div class="spl-fs-s spl-pt-4">
  The result is: {{result}}
</div>
```

```typescript
// test-overlay-iv.component.ts

import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplOverlayRef, SplStrokeButtonDirective } from '@favian/simplor';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-overlay-iv',
  standalone: true,
  imports: [CommonModule, SplStrokeButtonDirective, FormsModule],
  templateUrl: './test-overlay-iv.component.html',
  styleUrls: ['./test-overlay-iv.component.scss'],
  host: {
    class: 'spl-flex spl-column spl-items-stretch spl-bg-background-100 spl-p-24 spl-shadow',
  },
})
export class TestOverlayIvComponent {
  result = '';

  constructor(@Inject(SplOverlayRef) private _overlayRef: SplOverlayRef) {}

  closeWithResult(): void {
    this._overlayRef.close(this.result);
  }
}
```

```html
<!-- test-overlay-iv.component.html -->

<input
  [(ngModel)]="result"
  placeholder="Input result"/>

<button
  (click)="closeWithResult()"
  class="spl-mt-16"
  splStrokeButton>
  Close with Result
</button>
```
