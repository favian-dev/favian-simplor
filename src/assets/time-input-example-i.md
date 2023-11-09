```typescript
// time-input-example-i.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplTimeInputComponent } from '@favian/simplor';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-time-input-example-i',
  standalone: true,
  imports: [CommonModule, SplTimeInputComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './time-input-example-i.component.html',
  styleUrls: ['./time-input-example-i.component.scss'],
  host: {
    class: 'spl-flex spl-column spl-items-start',
  },
})
export class TimeInputExampleIComponent {
  today = new Date();

  value = `${this.today.getHours()}:${this.today.getMinutes()}`;

  formControl = new FormControl(`${this.today.getHours()}:${this.today.getMinutes()}`);
}
```

```html
<!-- time-input-example-i.component.html -->

<spl-time-input></spl-time-input>

<spl-time-input [(ngModel)]="value"></spl-time-input>

{{value}}

<spl-time-input [formControl]="formControl"></spl-time-input>

{{formControl.value}}

<spl-time-input disabled></spl-time-input>
```

```scss
// time-input-example-i.component.scss

spl-time-input {
  width: 250px;
}

spl-time-input + spl-time-input {
  margin-top: 24px;
}
```
