```typescript
// textarea-example-i.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplTextareaDirective } from '@favian/simplor';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-textarea-example-i',
  standalone: true,
  imports: [CommonModule, SplTextareaDirective, ReactiveFormsModule, FormsModule],
  templateUrl: './textarea-example-i.component.html',
  styleUrls: ['./textarea-example-i.component.scss'],
})
export class TextareaExampleIComponent {
  value = 'Hello World';

  formControl = new FormControl('Hello World');
}
```

```html
<!-- textarea-example-i.component.html -->

<textarea splTextarea></textarea>

<textarea
  [(ngModel)]="value"
  splTextarea></textarea>

<textarea
  [formControl]="formControl"
  splTextarea></textarea>

<textarea
  disabled
  splTextarea></textarea>
```
