```typescript
// tab-group-example-v.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SplStrokeButtonDirective,
  SplTabComponent,
  SplTabContentDirective,
  SplTabGroupComponent,
  SplTabLabelDirective,
} from '@favian/simplor';

@Component({
  selector: 'app-tab-group-example-v',
  standalone: true,
  imports: [
    CommonModule,
    SplStrokeButtonDirective,
    SplTabGroupComponent,
    SplTabComponent,
    SplTabLabelDirective,
    SplTabContentDirective,
  ],
  templateUrl: './tab-group-example-v.component.html',
  styleUrls: ['./tab-group-example-v.component.scss'],
})
export class TabGroupExampleVComponent {
  tabs = [1, 2, 3];
}
```

```html
<!-- tab-group-example-v.component.html -->

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

<spl-tab-group instant>
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

```scss
// tab-group-example-v.component.scss

spl-tab-group + spl-tab-group {
  margin-top: 24px;
}
```
