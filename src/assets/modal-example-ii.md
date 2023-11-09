```typescript
// modal-example-ii.component.ts

import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SplModalService, SplStrokeButtonDirective} from '@favian/simplor';
import {TestModalIiComponent} from './test-modal-ii/test-modal-ii.component';

@Component({
  selector: 'app-modal-example-ii',
  standalone: true,
  imports: [CommonModule, SplStrokeButtonDirective],
  templateUrl: './modal-example-ii.component.html',
  styleUrls: ['./modal-example-ii.component.scss'],
})
export class ModalExampleIiComponent {
  constructor(private _modalService: SplModalService) {
  }

  openModal(): void {
    this._modalService.open(TestModalIiComponent);
  }
}
```

```html
<!-- modal-example-ii.component.html -->

<button
  (click)="openModal()"
  splStrokeButton>
  Open Modal
</button>
```

```typescript
// test-modal-ii.component.ts

import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplModalRef, SplStrokeButtonDirective } from '@favian/simplor';

@Component({
  selector: 'app-test-modal-ii',
  standalone: true,
  imports: [CommonModule, SplStrokeButtonDirective],
  templateUrl: './test-modal-ii.component.html',
  styleUrls: ['./test-modal-ii.component.scss'],
  host: {
    class: 'spl-p-24',
  },
})
export class TestModalIiComponent {
  constructor(@Inject(SplModalRef) private _modalRef: SplModalRef) {}

  close(): void {
    this._modalRef.close();
  }
}
```

```html
<!-- test-modal-ii.component.html -->

<button
  (click)="close()"
  splStrokeButton>
  Close Modal
</button>
```

```scss
// test-modal-ii.component.scss

:host {
  display: block;
}
```
