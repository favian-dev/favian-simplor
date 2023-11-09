```typescript
// drawer-example-v.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplDrawerService, SplStrokeButtonDirective } from '@favian/simplor';
import { TestDrawerVComponent } from './test-drawer-v/test-drawer-v.component';

@Component({
  selector: 'app-drawer-example-v',
  standalone: true,
  imports: [CommonModule, SplStrokeButtonDirective],
  templateUrl: './drawer-example-v.component.html',
  styleUrls: ['./drawer-example-v.component.scss'],
})
export class DrawerExampleVComponent {
  constructor(private _drawerService: SplDrawerService) {}

  openDrawer(): void {
    this._drawerService.open(TestDrawerVComponent, {
      startingDirection: 'bottom',
      classes: ['test-drawer'],
      styles: {
        display: 'block',
        height: '200px',
        width: '400px',
      },
    });
  }
}
```

```html
<!-- drawer-example-v.component.html -->

<button
  (click)="openDrawer()"
  splStrokeButton>
  Open Drawer
</button>
```

```typescript
// test-drawer-v.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-drawer-v',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-drawer-v.component.html',
  styleUrls: ['./test-drawer-v.component.scss'],
})
export class TestDrawerVComponent {}
```

```html
Test
```
