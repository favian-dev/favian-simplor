```typescript
// overlay-example-vii.component.ts

import { Component, DestroyRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplOverlayRef, SplOverlayService, SplStrokeButtonDirective } from '@favian/simplor';
import { TestOverlayViiComponent } from './test-overlay-vii/test-overlay-vii.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-overlay-example-vii',
  standalone: true,
  imports: [CommonModule, SplStrokeButtonDirective],
  templateUrl: './overlay-example-vii.component.html',
  styleUrls: ['./overlay-example-vii.component.scss'],
})
export class OverlayExampleViiComponent {
  private _overlayRef?: SplOverlayRef;
  private _timer?: any;

  constructor(
    private _overlayService: SplOverlayService,
    private _destroyRef: DestroyRef,
  ) {}

  openOverlay(button: HTMLButtonElement): void {
    const { left, bottom } = button.getBoundingClientRect();

    this._overlayRef = this._overlayService.open(TestOverlayViiComponent, {
      styles: {
        left: left + 'px',
        top: bottom + 'px',
      },
    });

    this._overlayRef.onClose.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => {
      clearTimeout(this._timer);

      delete this._overlayRef;
    });

    this._timer = setTimeout(
      () =>
        this._overlayRef?.updateStyles({
          left: left + 100 + 'px',
          top: bottom - 100 + 'px',
        }),
      1000,
    );
  }
}
```

```html
<!-- overlay-example-vii.component.html -->

<button
  #button
  (click)="openOverlay(button)"
  splStrokeButton>
  Open Overlay
</button>
```

```typescript
// test-overlay-vii.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-overlay-vii',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-overlay-vii.component.html',
  styleUrls: ['./test-overlay-vii.component.scss']
})
export class TestOverlayViiComponent {}
```

```html
<!-- test-overlay-vii.component.html -->

<p>test-overlay-vii works!</p>
```
