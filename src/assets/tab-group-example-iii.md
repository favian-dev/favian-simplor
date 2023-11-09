```typescript
// tab-group-example-iii.component.ts

import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SplStrokeButtonDirective,
  SplTabComponent,
  SplTabContentDirective,
  SplTabGroupComponent,
  SplTabLabelDirective,
} from '@favian/simplor';

@Component({
  selector: 'app-tab-group-example-iii',
  standalone: true,
  imports: [
    CommonModule,
    SplTabComponent,
    SplTabGroupComponent,
    SplTabLabelDirective,
    SplTabContentDirective,
    SplStrokeButtonDirective,
  ],
  templateUrl: './tab-group-example-iii.component.html',
  styleUrls: ['./tab-group-example-iii.component.scss'],
})
export class TabGroupExampleIiiComponent {
  @ViewChild('animateTabGroup') animateTabGroup!: SplTabGroupComponent;
  @ViewChild('instantTabGroup') instantTabGroup!: SplTabGroupComponent;

  tabs = [1, 2, 3];

  move(index: number): void {
    this.animateTabGroup.scrollToContentByIndex(index);
    this.instantTabGroup.scrollToContentByIndex(index, true);
  }
}
```

```html
<!-- tab-group-example-iii.component.html -->

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

<spl-tab-group #animateTabGroup>
  <spl-tab *ngFor="let tab of tabs">
    <ng-template splTabLabel>
      Tab {{tab}}
    </ng-template>

    <ng-template splTabContent>
      Tab content {{tab}}
    </ng-template>
  </spl-tab>
</spl-tab-group>

<spl-tab-group #instantTabGroup>
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
// tab-group-example-iii.component.scss

spl-tab-group {
  margin-top: 24px;
}
```
