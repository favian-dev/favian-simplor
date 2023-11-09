```typescript
// modal-example-vii.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplModalService, SplStrokeButtonDirective } from '@favian/simplor';
import { TestModalViiComponent } from './test-modal-vii/test-modal-vii.component';

@Component({
  selector: 'app-modal-example-vii',
  standalone: true,
  imports: [CommonModule, SplStrokeButtonDirective],
  templateUrl: './modal-example-vii.component.html',
  styleUrls: ['./modal-example-vii.component.scss'],
})
export class ModalExampleViiComponent {
  constructor(private _modalService: SplModalService) {}

  openModal(): void {
    this._modalService.open(TestModalViiComponent);
  }
}
```

```html
<!-- modal-example-vii.component.html -->

<button
  (click)="openModal()"
  splStrokeButton>
  Open Modal
</button>
```

```typescript
// test-modal-vii.component.ts

import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SplModalActionDirective,
  SplModalActionsComponent,
  SplModalContentComponent,
  SplModalHeaderComponent,
  SplModalRef,
  SplStrokeButtonDirective,
} from '@favian/simplor';

@Component({
  selector: 'app-test-modal-vii',
  standalone: true,
  imports: [
    CommonModule,
    SplModalHeaderComponent,
    SplModalContentComponent,
    SplModalActionsComponent,
    SplModalActionDirective,
    SplStrokeButtonDirective,
  ],
  templateUrl: './test-modal-vii.component.html',
  styleUrls: ['./test-modal-vii.component.scss'],
})
export class TestModalViiComponent {
  constructor(@Inject(SplModalRef) private _modalRef: SplModalRef) {}

  close(): void {
    this._modalRef.close();
  }
}
```

```html
<!-- test-modal-vii.component.html -->

<spl-modal-header>
  Title
</spl-modal-header>

<spl-modal-content>
  Contents
</spl-modal-content>

<spl-modal-actions>
  <button
    (click)="close()"
    splModalAction
    splStrokeButton>
    Close
  </button>
</spl-modal-actions>
```

```scss
// test-modal-vii.component.scss

:host {
  display: block;
  width: 320px;
  max-width: 100%;
}
```
