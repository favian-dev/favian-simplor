```typescript
// overlay-example-v.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplOverlayService, SplStrokeButtonDirective } from '@favian/simplor';
import { TestOverlayVComponent } from './test-overlay-v/test-overlay-v.component';

@Component({
  selector: 'app-overlay-example-v',
  standalone: true,
  imports: [CommonModule, SplStrokeButtonDirective],
  templateUrl: './overlay-example-v.component.html',
  styleUrls: ['./overlay-example-v.component.scss'],
})
export class OverlayExampleVComponent {
  constructor(private _overlayService: SplOverlayService) {}

  openOverlay(button: HTMLButtonElement): void {
    const { left, bottom } = button.getBoundingClientRect();

    this._overlayService.open(TestOverlayVComponent, {
      classes: ['spl-flex', 'spl-column', 'spl-items-stretch', 'spl-bg-background-100', 'spl-p-24', 'spl-shadow'],
      styles: {
        left: left + 'px',
        top: bottom + 'px',
      },
    });
  }
}
```

```html
<!-- overlay-example-v.component.html -->

<button
  #button
  (click)="openOverlay(button)"
  splStrokeButton>
  Open Overlay
</button>
```

```typescript
// test-overlay-v.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-overlay-v',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-overlay-v.component.html',
  styleUrls: ['./test-overlay-v.component.scss'],
})
export class TestOverlayVComponent {}
```

```html
<!-- test-overlay-v.component.html -->

<p>test-overlay-v works!</p>
```
