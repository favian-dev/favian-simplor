import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplTabComponent, SplTabContentDirective, SplTabGroupComponent, SplTabLabelDirective } from '@favian/simplor';

@Component({
  selector: 'app-tab-group-example-i',
  standalone: true,
  imports: [CommonModule, SplTabGroupComponent, SplTabLabelDirective, SplTabContentDirective, SplTabComponent],
  templateUrl: './tab-group-example-i.component.html',
  styleUrls: ['./tab-group-example-i.component.scss'],
})
export class TabGroupExampleIComponent {
  tabs = [1, 2, 3];
}
