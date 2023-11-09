```typescript
// form-field-example-ii.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SplControlValidatorDirective,
  SplErrorComponent,
  SplFormFieldComponent,
  SplHintComponent,
  SplInputDirective,
} from '@favian/simplor';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-field-example-ii',
  standalone: true,
  imports: [
    CommonModule,
    SplFormFieldComponent,
    SplInputDirective,
    SplHintComponent,
    SplErrorComponent,
    ReactiveFormsModule,
    SplControlValidatorDirective,
  ],
  templateUrl: './form-field-example-ii.component.html',
  styleUrls: ['./form-field-example-ii.component.scss'],
})
export class FormFieldExampleIiComponent {
  formControl = new FormControl('', Validators.email);
}
```

```html
<!-- form-field-example-ii.component.html -->

<spl-form-field>
  <label>
    Email
  </label>

  <input
    #emailValidator="controlValidator"
    [formControl]="formControl"
    placeholder="Email..."
    type="email"
    splControlValidator
    splInput/>

  <ng-container *ngIf="emailValidator.invalid; else emailNotInvalid">
    <spl-error *ngIf="emailValidator.hasError('email')">
      Invalid email
    </spl-error>
  </ng-container>

  <ng-template #emailNotInvalid>
    <spl-hint>
      Input email
    </spl-hint>
  </ng-template>
</spl-form-field>
```
