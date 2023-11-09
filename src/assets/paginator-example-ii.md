```typescript
// paginator-example-ii.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplPaginatorComponent } from '@favian/simplor';

@Component({
  selector: 'app-paginator-example-ii',
  standalone: true,
  imports: [CommonModule, SplPaginatorComponent],
  templateUrl: './paginator-example-ii.component.html',
  styleUrls: ['./paginator-example-ii.component.scss'],
})
export class PaginatorExampleIiComponent {
  total = 1000;
  page = 1;
  size = 10;
  sizeOptions = [10, 30, 50, 100];

  onSizeChange(size: number): void {
    this.page = 1;
    this.size = size;
  }
}
```

```html
<!-- paginator-example-ii.component.html -->

<spl-paginator
  (sizeChange)="onSizeChange($event)"
  [(page)]="page"
  [size]="size"
  [sizeOptions]="sizeOptions"
  [total]="total"></spl-paginator>
```
