```typescript
// modal-example-iii.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplModalService, SplStrokeButtonDirective } from '@favian/simplor';
import { FormsModule } from '@angular/forms';
import { TestModalIiiComponent } from './test-modal-iii/test-modal-iii.component';

@Component({
  selector: 'app-modal-example-iii',
  standalone: true,
  imports: [CommonModule, FormsModule, SplStrokeButtonDirective],
  templateUrl: './modal-example-iii.component.html',
  styleUrls: ['./modal-example-iii.component.scss'],
})
export class ModalExampleIiiComponent {
  data = 'Hello World';

  constructor(private _modalService: SplModalService) {}

  openModal(): void {
    this._modalService.open(TestModalIiiComponent, {
      data: this.data,
    });
  }
}
```

```html
<!-- modal-example-iii.component.html -->

<input [(ngModel)]="data"/>

<button
  (click)="openModal()"
  splStrokeButton>
  Open Modal
</button>
```

```typescript
// test-modal-iii.component.ts

import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SPL_MODAL_DATA } from '@favian/simplor';

@Component({
  selector: 'app-test-modal-iii',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-modal-iii.component.html',
  styleUrls: ['./test-modal-iii.component.scss'],
  host: {
    class: 'spl-p-24',
  },
})
export class TestModalIiiComponent {
  constructor(@Inject(SPL_MODAL_DATA) public data: string) {}
}
```

```html
<!-- test-modal-iii.component.html -->

The data is: {{data}}
```

```scss
// test-modal-iii.component.scss

:host {
  display: block;
}
```
