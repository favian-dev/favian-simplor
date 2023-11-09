```typescript
// modal-example-vi.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplModalService, SplStrokeButtonDirective } from '@favian/simplor';
import { TestModalViComponent } from './test-modal-vi/test-modal-vi.component';

@Component({
  selector: 'app-modal-example-vi',
  standalone: true,
  imports: [CommonModule, SplStrokeButtonDirective],
  templateUrl: './modal-example-vi.component.html',
  styleUrls: ['./modal-example-vi.component.scss'],
})
export class ModalExampleViComponent {
  constructor(private _modalService: SplModalService) {}

  openModal(): void {
    this._modalService.open(TestModalViComponent, {
      providers: [
        {
          provide: 'PROVIDE_MODAL_DATA', // Use any injection token.
          useValue: 'Provided data',
        },
      ],
    });
  }
}
```

```html
<!-- modal-example-vi.component.html -->

<button
  (click)="openModal()"
  splStrokeButton>
  Open Modal
</button>
```

```typescript
// test-modal-vi.component.ts

import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-modal-vi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-modal-vi.component.html',
  styleUrls: ['./test-modal-vi.component.scss'],
  host: {
    class: 'spl-p-24',
  },
})
export class TestModalViComponent {
  constructor(@Inject('PROVIDE_MODAL_DATA') public providedData: string) {}
}
```

```html
<!-- test-modal-vi.component.html -->

{{providedData}}
```

```scss
// test-modal-vi.component.scss

:host {
  display: block;
}
```
