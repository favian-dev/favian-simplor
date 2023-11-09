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
