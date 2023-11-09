import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplOptionComponent, SplSelectComponent } from '@favian/simplor';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-example-ii',
  standalone: true,
  imports: [CommonModule, SplSelectComponent, SplOptionComponent, FormsModule],
  templateUrl: './select-example-ii.component.html',
  styleUrls: ['./select-example-ii.component.scss'],
})
export class SelectExampleIiComponent {
  options = [1, 2, 3];

  value1 = '';
  value2 = '';
  value3 = '';
}
