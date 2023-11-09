```typescript
// tab-group-example-iv.component.ts

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
  selector: 'app-tab-group-example-iv',
  standalone: true,
  imports: [
    CommonModule,
    SplStrokeButtonDirective,
    SplTabGroupComponent,
    SplTabComponent,
    SplTabLabelDirective,
    SplTabContentDirective,
  ],
  templateUrl: './tab-group-example-iv.component.html',
  styleUrls: ['./tab-group-example-iv.component.scss'],
})
export class TabGroupExampleIvComponent {
  tabs = [1, 2, 3];
  activeIndex = 1;

  move(index: number): void {
    this.activeIndex = index;
  }
}
```

```html
<!-- tab-group-example-iv.component.html -->

<button
  (click)="move(0)"
  splStrokeButton>
  To tab 1
</button>

<button
  (click)="move(2)"
  splStrokeButton>
  To tab 3
</button>

<spl-tab-group [(activeIndex)]="activeIndex">
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
// tab-group-example-iv.component.scss

spl-tab-group {
  margin-top: 24px;
}
```
