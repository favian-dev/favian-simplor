```typescript
// drawer-example-iii.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplDrawerService, SplStrokeButtonDirective } from '@favian/simplor';
import { TestDrawerIiiComponent } from './test-drawer-iii/test-drawer-iii.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-drawer-example-iii',
  standalone: true,
  imports: [CommonModule, SplStrokeButtonDirective, FormsModule],
  templateUrl: './drawer-example-iii.component.html',
  styleUrls: ['./drawer-example-iii.component.scss'],
})
export class DrawerExampleIiiComponent {
  data = 'Hello World';

  constructor(private _drawerService: SplDrawerService) {}

  openDrawer(): void {
    this._drawerService.open(TestDrawerIiiComponent, {
      startingDirection: 'bottom',
      data: this.data,
    });
  }
}
```

```html
<!-- drawer-example-iii.component.html -->

<input
  [(ngModel)]="data"
  placeholder="Input any data"/>

<button
  (click)="openDrawer()"
  splStrokeButton>
  Open Drawer
</button>
```

```typescript
// test-drawer-iii.component.ts

import {Component, Inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SPL_DRAWER_DATA} from '@favian/simplor';

@Component({
  selector: 'app-test-drawer-iii',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-drawer-iii.component.html',
  styleUrls: ['./test-drawer-iii.component.scss'],
  host: {
    class: 'spl-p-24',
  },
})
export class TestDrawerIiiComponent {
  constructor(@Inject(SPL_DRAWER_DATA) public data: string) {
  }
}
```

```html
<!-- test-drawer-iii.component.html -->

The data is: {{data}}
```

```scss
// test-drawer-iii.component.scss

:host {
  display: block;
}
```
