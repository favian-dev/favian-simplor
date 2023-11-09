```typescript
// drawer-example-ii.component.html

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplDrawerService, SplStrokeButtonDirective } from '@favian/simplor';
import { TestDrawerIiComponent } from './test-drawer-ii/test-drawer-ii.component';

@Component({
  selector: 'app-drawer-example-ii',
  standalone: true,
  imports: [CommonModule, SplStrokeButtonDirective],
  templateUrl: './drawer-example-ii.component.html',
  styleUrls: ['./drawer-example-ii.component.scss'],
})
export class DrawerExampleIiComponent {
  constructor(private _drawerService: SplDrawerService) {}

  openDrawer(): void {
    this._drawerService.open(TestDrawerIiComponent, {
      startingDirection: 'bottom',
    });
  }
}
```

```html
<!-- drawer-example-ii.component.html -->

<button
  (click)="openDrawer()"
  splStrokeButton>
  Open Drawer
</button>
```

```typescript
// test-drawer-ii.component.ts

import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplDrawerRef, SplStrokeButtonDirective } from '@favian/simplor';

@Component({
  selector: 'app-test-drawer-ii',
  standalone: true,
  imports: [CommonModule, SplStrokeButtonDirective],
  templateUrl: './test-drawer-ii.component.html',
  styleUrls: ['./test-drawer-ii.component.scss'],
  host: {
    class: 'spl-p-24',
  },
})
export class TestDrawerIiComponent {
  constructor(@Inject(SplDrawerRef) private _drawerRef: SplDrawerRef) {}

  close(): void {
    this._drawerRef.close();
  }
}
```

```html
<!-- test-drawer-ii.component.html -->

<button
  (click)="close()"
  splStrokeButton>
  Close Drawer
</button>
```

```scss
// test-drawer-ii.component.scss

:host {
  display: block;
}
```
