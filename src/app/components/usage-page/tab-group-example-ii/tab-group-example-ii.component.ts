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
