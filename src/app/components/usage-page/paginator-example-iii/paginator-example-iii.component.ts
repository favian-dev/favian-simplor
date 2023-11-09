import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createSplPaginatorProvider, SplPaginatorComponent } from '@favian/simplor';

@Component({
  selector: 'app-paginator-example-iii',
  standalone: true,
  imports: [CommonModule, SplPaginatorComponent],
  templateUrl: './paginator-example-iii.component.html',
  styleUrls: ['./paginator-example-iii.component.scss'],
  providers: [
    createSplPaginatorProvider({
      createCurrentRangeLabel: (page: number, size: number, total: number) => {
        return `${(page - 1) * size + 1} - ${page * size} of ${total}`;
      },
    }),
  ],
})
export class PaginatorExampleIiiComponent {
  total = 1000;
  page = 1;
  size = 10;
  sizeOptions = [10, 30, 50, 100];

  onSizeChange(size: number): void {
    this.page = 1;
    this.size = size;
  }
}
