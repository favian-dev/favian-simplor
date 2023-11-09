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
  selector: 'app-tab-group-example-v',
  standalone: true,
  imports: [
    CommonModule,
    SplStrokeButtonDirective,
    SplTabGroupComponent,
    SplTabComponent,
    SplTabLabelDirective,
    SplTabContentDirective,
  ],
  templateUrl: './tab-group-example-v.component.html',
  styleUrls: ['./tab-group-example-v.component.scss'],
})
export class TabGroupExampleVComponent {
  tabs = [1, 2, 3];
}
