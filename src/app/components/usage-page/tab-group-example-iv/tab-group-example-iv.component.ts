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
