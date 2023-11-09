```typescript
// modal-example-iv.component.ts

import { Component, DestroyRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplModalRef, SplModalService, SplStrokeButtonDirective } from '@favian/simplor';
import { TestModalIvComponent } from './test-modal-iv/test-modal-iv.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-modal-example-iv',
  standalone: true,
  imports: [CommonModule, SplStrokeButtonDirective],
  templateUrl: './modal-example-iv.component.html',
  styleUrls: ['./modal-example-iv.component.scss'],
})
export class ModalExampleIvComponent {
  result?: string;

  private _modalRef?: SplModalRef;

  constructor(
    private _modalService: SplModalService,
    private _destroyRef: DestroyRef,
  ) {}

  openModal(): void {
    this._modalRef = this._modalService.open(TestModalIvComponent);

    this._modalRef.onClose.pipe(takeUntilDestroyed(this._destroyRef)).subscribe((result) => {
      this.result = result;

      delete this._modalRef;
    });
  }
}
```

```html
<!-- modal-example-iv.component.html -->

<button
  (click)="openModal()"
  splStrokeButton>
  Open Modal
</button>

<div class="spl-fs-s spl-mt-4">
  The result is: {{result}}
</div>
```

```typescript
// test-modal-iv.component.ts

import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplModalRef, SplStrokeButtonDirective } from '@favian/simplor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-modal-iv',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, SplStrokeButtonDirective],
  templateUrl: './test-modal-iv.component.html',
  styleUrls: ['./test-modal-iv.component.scss'],
  host: {
    class: 'spl-flex spl-column spl-items-stretch spl-p-24',
  },
})
export class TestModalIvComponent {
  result = '';

  constructor(@Inject(SplModalRef) private _modalRef: SplModalRef) {}

  closeWithResult(): void {
    this._modalRef.close(this.result);
  }
}
```

```html
<!-- test-modal-iv.component.html -->

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
