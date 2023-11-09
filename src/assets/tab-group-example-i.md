```typescript
// tab-group-example-i.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplTabComponent, SplTabContentDirective, SplTabGroupComponent, SplTabLabelDirective } from '@favian/simplor';

@Component({
  selector: 'app-tab-group-example-i',
  standalone: true,
  imports: [CommonModule, SplTabGroupComponent, SplTabLabelDirective, SplTabContentDirective, SplTabComponent],
  templateUrl: './tab-group-example-i.component.html',
  styleUrls: ['./tab-group-example-i.component.scss'],
})
export class TabGroupExampleIComponent {
  tabs = [1, 2, 3];
}
```

```html
<!-- tab-group-example-i.component.html -->

<spl-tab-group>
  <spl-tab *ngFor="let tab of tabs">
    <ng-template splTabLabel>
      Tab {{tab}}
    </ng-template>

    <ng-template splTabContent>
      Tab content {{tab}}
    </ng-template>
  </spl-tab>
</spl-tab-group>
```
