import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplTableDirective } from '@favian/simplor';

@Component({
  selector: 'app-table-example-i',
  standalone: true,
  imports: [CommonModule, SplTableDirective],
  templateUrl: './table-example-i.component.html',
  styleUrls: ['./table-example-i.component.scss'],
})
export class TableExampleIComponent {
  data = [
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
}
