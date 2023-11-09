```typescript
// checkbox-example-i.component.html

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplCheckboxComponent } from '@favian/simplor';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkbox-example-i',
  standalone: true,
  imports: [CommonModule, SplCheckboxComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './checkbox-example-i.component.html',
  styleUrls: ['./checkbox-example-i.component.scss'],
})
export class CheckboxExampleIComponent {
  value = false;

  formControl = new FormControl(false);
}
```

```html
<!-- checkbox-example-i.component.html -->

<spl-checkbox>Label</spl-checkbox>

<spl-checkbox
  [(ngModel)]="value"
  class="spl-ml-24">With NgModel: {{value}}
</spl-checkbox>

<spl-checkbox
  class="spl-ml-24"
  [formControl]="formControl">With FormControl: {{formControl.value}}
</spl-checkbox>

<spl-checkbox
  class="spl-ml-24"
  disabled>Label
</spl-checkbox>
```
