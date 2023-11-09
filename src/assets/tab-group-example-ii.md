```typescript
// tab-group-example-ii.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplTabComponent, SplTabContentDirective, SplTabGroupComponent, SplTabLabelDirective } from '@favian/simplor';

@Component({
  selector: 'app-tab-group-example-ii',
  standalone: true,
  imports: [CommonModule, SplTabGroupComponent, SplTabComponent, SplTabLabelDirective, SplTabContentDirective],
  templateUrl: './tab-group-example-ii.component.html',
  styleUrls: ['./tab-group-example-ii.component.scss'],
})
export class TabGroupExampleIiComponent {
  tabs = [1, 2, 3];
}
```

```html
<!-- tab-group-example-ii.component.html -->

<spl-tab-group headerAlign="fill">
  <spl-tab *ngFor="let tab of tabs">
    <ng-template splTabLabel>
      Tab {{tab}}
    </ng-template>

    <ng-template splTabContent>
      Tab content {{tab}}
    </ng-template>
  </spl-tab>
</spl-tab-group>

<spl-tab-group headerAlign="start">
  <spl-tab *ngFor="let tab of tabs">
    <ng-template splTabLabel>
      Tab {{tab}}
    </ng-template>

    <ng-template splTabContent>
      Tab content {{tab}}
    </ng-template>
  </spl-tab>
</spl-tab-group>

<spl-tab-group headerAlign="center">
  <spl-tab *ngFor="let tab of tabs">
    <ng-template splTabLabel>
      Tab {{tab}}
    </ng-template>

    <ng-template splTabContent>
      Tab content {{tab}}
    </ng-template>
  </spl-tab>
</spl-tab-group>

<spl-tab-group headerAlign="end">
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
// tab-group-example-ii.component.scss

spl-tab-group + spl-tab-group {
  margin-top: 24px;
}
```
