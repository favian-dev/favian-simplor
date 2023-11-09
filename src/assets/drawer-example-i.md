```typescript
// drawer-example-i.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplDrawerService, SplDrawerStartingDirection, SplStrokeButtonDirective } from '@favian/simplor';
import { TestDrawerIComponent } from './test-drawer-i/test-drawer-i.component';

@Component({
  selector: 'app-drawer-example-i',
  standalone: true,
  imports: [CommonModule, SplStrokeButtonDirective],
  templateUrl: './drawer-example-i.component.html',
  styleUrls: ['./drawer-example-i.component.scss'],
  host: {
    class: 'spl-flex spl-column spl-items-start',
  },
})
export class DrawerExampleIComponent {
  constructor(private _drawerService: SplDrawerService) {}

  openDrawer(direction: SplDrawerStartingDirection): void {
    this._drawerService.open(TestDrawerIComponent, {
      startingDirection: direction,
    });
  }
}
```

```html
<!-- drawer-example-i.component.html -->

<button
  (click)="openDrawer('left')"
  splStrokeButton>
  Open From Left
</button>

<button
  (click)="openDrawer('top')"
  class="spl-mt-8"
  splStrokeButton>
  Open From Top
</button>

<button
  (click)="openDrawer('right')"
  class="spl-mt-8"
  splStrokeButton>
  Open From Right
</button>

<button
  (click)="openDrawer('bottom')"
  class="spl-mt-8"
  splStrokeButton>
  Open From Bottom
</button>
```

```typescript
// test-drawer-i.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-drawer-i',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-drawer-i.component.html',
  styleUrls: ['./test-drawer-i.component.scss'],
})
export class TestDrawerIComponent {}
```

```html
<!-- test-drawer-i.component.html -->

<p>test-drawer-i works!</p>
```
