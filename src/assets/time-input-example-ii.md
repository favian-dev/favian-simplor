```typescript
// time-input-example-ii.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplTimeInputComponent } from '@favian/simplor';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-time-input-example-ii',
  standalone: true,
  imports: [CommonModule, SplTimeInputComponent, FormsModule],
  templateUrl: './time-input-example-ii.component.html',
  styleUrls: ['./time-input-example-ii.component.scss'],
  host: {
    class: 'spl-flex spl-column spl-items-start',
  },
})
export class TimeInputExampleIiComponent {
  today = new Date();

  value = `${this.today.getHours()}:${this.today.getMinutes()}`;
}
```

```html
<!-- time-input-example-ii.component.html -->

<spl-time-input
  [(ngModel)]="value"
  use24Horus></spl-time-input>
{{value}}
```

```scss
// time-input-example-ii.component.scss

spl-time-input {
  width: 250px;
}
```
