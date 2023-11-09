```typescript
// table-example-ii.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplSortableColumnDirective, SplTableDirective, SplTableSortChangeEvent } from '@favian/simplor';

interface TableItem {
  name: string;
  sold: number;
  remaining: number;
}

@Component({
  selector: 'app-table-example-ii',
  standalone: true,
  imports: [CommonModule, SplTableDirective, SplSortableColumnDirective],
  templateUrl: './table-example-ii.component.html',
  styleUrls: ['./table-example-ii.component.scss'],
})
export class TableExampleIiComponent implements OnInit {
  data: TableItem[] = [
    {
      name: 'Apple',
      sold: 3,
      remaining: 7,
    },
    {
      name: 'Banana',
      sold: 7,
      remaining: 10,
    },
    {
      name: 'Cookie',
      sold: 1,
      remaining: 15,
    },
    {
      name: 'Orange',
      sold: 2,
      remaining: 1,
    },
  ];

  sort: SplTableSortChangeEvent = {
    name: 'sold',
    direction: 'asc',
  };

  sortedData: TableItem[] = [];

  ngOnInit() {
    this.onSortChange(this.sort);
  }

  onSortChange(event: SplTableSortChangeEvent): void {
    this.sort = event;

    const { name, direction } = event;

    const data = [...this.data];

    if (direction === 'none') {
      this.sortedData = data;
    } else {
      this.sortedData = data.sort((a: any, b: any) => {
        if (direction === 'asc') {
          return a[name] - b[name];
        } else {
          return b[name] - a[name];
        }
      });
    }
  }
}
```

```html
<!-- table-example-ii.component.html -->

<table
  (sortChange)="onSortChange($event)"
  [sort]="sort"
  splTable>
  <thead>
    <tr>
      <th>
        Name
      </th>

      <th
        name="sold"
        splSortableColumn>
        Sold
      </th>

      <th
        name="remaining"
        allowNoneDirection
        splSortableColumn>
        Remaining
      </th>
    </tr>
  </thead>

  <tbody>
    <tr *ngFor="let item of sortedData">
      <td>
        {{item.name}}
      </td>

      <td>
        {{item.sold}}
      </td>

      <td>
        {{item.remaining}}
      </td>
    </tr>
  </tbody>
</table>
```
