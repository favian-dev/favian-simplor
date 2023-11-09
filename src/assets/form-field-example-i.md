```typescript
// form-field-example-i.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplFormFieldComponent, SplInputDirective } from '@favian/simplor';

@Component({
  selector: 'app-form-field-example-i',
  standalone: true,
  imports: [CommonModule, SplFormFieldComponent, SplInputDirective],
  templateUrl: './form-field-example-i.component.html',
  styleUrls: ['./form-field-example-i.component.scss'],
})
export class FormFieldExampleIComponent {}
```

```html
<!-- form-field-example-i.component.html -->

<spl-form-field>
  <label>
    Label
  </label>

  <input
    placeholder="Input..."
    splInput/>
</spl-form-field>
```

