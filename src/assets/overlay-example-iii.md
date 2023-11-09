```typescript
// overlay-example-iii.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplOverlayService, SplStrokeButtonDirective } from '@favian/simplor';
import { TestOverlayIiiComponent } from './test-overlay-iii/test-overlay-iii.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-overlay-example-iii',
  standalone: true,
  imports: [CommonModule, SplStrokeButtonDirective, FormsModule],
  templateUrl: './overlay-example-iii.component.html',
  styleUrls: ['./overlay-example-iii.component.scss'],
})
export class OverlayExampleIiiComponent {
  data = 'Hello World';

  constructor(private _overlayService: SplOverlayService) {}

  openOverlay(): void {
    this._overlayService.open(TestOverlayIiiComponent, {
      data: this.data,
    });
  }
}
```

```html
<!-- overlay-example-iii.component.html -->

<input [(ngModel)]="data"/>

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
// test-overlay-iii.component.ts

import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SPL_OVERLAY_DATA } from '@favian/simplor';

@Component({
  selector: 'app-test-overlay-iii',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-overlay-iii.component.html',
  styleUrls: ['./test-overlay-iii.component.scss'],
})
export class TestOverlayIiiComponent {
  constructor(@Inject(SPL_OVERLAY_DATA) public data: string) {}
}
```

```html
<!-- test-overlay-iii.component.html -->

<p>The data is: {{data}}</p>
```
