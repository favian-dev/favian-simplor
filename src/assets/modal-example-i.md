```typescript
// modal-example-i.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplModalService, SplStrokeButtonDirective } from '@favian/simplor';
import { TestModalIComponent } from './test-modal-i/test-modal-i.component';

@Component({
  selector: 'app-modal-example-i',
  standalone: true,
  imports: [CommonModule, SplStrokeButtonDirective],
  templateUrl: './modal-example-i.component.html',
  styleUrls: ['./modal-example-i.component.scss'],
})
export class ModalExampleIComponent {
  constructor(private _modalService: SplModalService) {}

  openModal(): void {
    this._modalService.open(TestModalIComponent);
  }
}
```

```html
<!-- modal-example-i.component.html -->

<button
  (click)="openModal()"
  splStrokeButton>
  Open Modal
</button>
```

```typescript
// test-modal-i.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-modal-i',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-modal-i.component.html',
  styleUrls: ['./test-modal-i.component.scss'],
  host: {
    class: 'spl-p-24',
  },
})
export class TestModalIComponent {}
```

```html
<!-- test-modal-i.component.html -->

<p>test-modal-i works!</p>
```

```scss
// test-modal-i.component.scss

:host {
  display: block;
}
```
