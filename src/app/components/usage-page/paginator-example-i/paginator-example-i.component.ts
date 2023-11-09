import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplPaginatorComponent } from '@favian/simplor';

@Component({
  selector: 'app-paginator-example-i',
  standalone: true,
  imports: [CommonModule, SplPaginatorComponent],
  templateUrl: './paginator-example-i.component.html',
  styleUrls: ['./paginator-example-i.component.scss'],
})
export class PaginatorExampleIComponent {
  total = 1000;
  page = 1;
  size = 10;
}
