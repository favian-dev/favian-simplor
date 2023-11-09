```typescript
// control-validator-example-i.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SplControlValidatorDirective } from '@favian/simplor';

@Component({
  selector: 'app-control-validator-example-i',
  standalone: true,
  imports: [CommonModule, FormsModule, SplControlValidatorDirective, ReactiveFormsModule],
  templateUrl: './control-validator-example-i.component.html',
  styleUrls: ['./control-validator-example-i.component.scss'],
})
export class ControlValidatorExampleIComponent {
  value = '';

  formControl = new FormControl('', [Validators.required, Validators.email]);
}
```

```html
<!-- control-validator-example-i.component.html -->

<input
  #ngModelValidator="controlValidator"
  [(ngModel)]="value"
  splControlValidator
  required/>

<div class="spl-fs-s spl-mt-4">
  <ng-container *ngIf="ngModelValidator.invalid; else valid">
    <ng-container *ngIf="ngModelValidator.hasError('required')">
      Input is required.
    </ng-container>
  </ng-container>

  <ng-template #valid>
    The validator's invalid getter returns true when the control is invalid and in a touched or dirty state.
  </ng-template>
</div>

<input
  #formControlValidator="controlValidator"
  [formControl]="formControl"
  class="spl-mt-24"
  type="email"
  splControlValidator
  required/>

<div class="spl-fs-s spl-mt-4">
  <ng-container *ngIf="formControlValidator.invalid; else valid">
    <ng-container *ngIf="formControlValidator.hasError('required')">
      Input is required.
    </ng-container>

    <ng-container *ngIf="formControlValidator.hasError('email')">
      Incorrect email.
    </ng-container>
  </ng-container>

  <ng-template #valid>
    The validator's invalid getter returns true when the control is invalid and in a touched or dirty state.
  </ng-template>
</div>
```
