```typescript
// drawer-example-iv.component.ts

import { Component, DestroyRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplDrawerRef, SplDrawerService, SplStrokeButtonDirective } from '@favian/simplor';
import { TestDrawerIvComponent } from './test-drawer-iv/test-drawer-iv.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-drawer-example-iv',
  standalone: true,
  imports: [CommonModule, SplStrokeButtonDirective],
  templateUrl: './drawer-example-iv.component.html',
  styleUrls: ['./drawer-example-iv.component.scss'],
})
export class DrawerExampleIvComponent {
  result?: string;

  private _drawerRef?: SplDrawerRef;

  constructor(
    private _drawerService: SplDrawerService,
    private _destroyRef: DestroyRef,
  ) {}

  openDrawer(): void {
    this._drawerRef = this._drawerService.open(TestDrawerIvComponent, {
      startingDirection: 'bottom',
    });

    this._drawerRef.onClose.pipe(takeUntilDestroyed(this._destroyRef)).subscribe((result) => {
      this.result = result;

      delete this._drawerRef;
    });
  }
}
```

```html
<!-- drawer-example-iv.component.html -->

<button
  (click)="openDrawer()"
  splStrokeButton>
  Open Drawer
</button>

<div class="spl-fs-s spl-mt-4">
  The result is: {{result}}
</div>
```

```typescript
// test-drawer-iv.component.ts

import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplDrawerRef, SplStrokeButtonDirective } from '@favian/simplor';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-drawer-iv',
  standalone: true,
  imports: [CommonModule, FormsModule, SplStrokeButtonDirective],
  templateUrl: './test-drawer-iv.component.html',
  styleUrls: ['./test-drawer-iv.component.scss'],
  host: {
    class: 'spl-flex spl-column spl-items-stretch spl-p-24',
  },
})
export class TestDrawerIvComponent {
  result = '';

  constructor(@Inject(SplDrawerRef) private _drawerRef: SplDrawerRef) {}

  closeWithResult(): void {
    this._drawerRef.close(this.result);
  }
}
```

```html
<!-- test-drawer-iv.component.html -->

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
