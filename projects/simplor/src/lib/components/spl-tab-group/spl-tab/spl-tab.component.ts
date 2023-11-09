import { AfterContentInit, Component, ContentChild } from '@angular/core';
import { SplTabContentDirective } from './spl-tab-content.directive';
import { SplTabLabelDirective } from './spl-tab-label.directive';
import { SplError } from '../../../utils/error.util';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'spl-tab',
  template: '',
  host: {
    class: 'spl-tab',
  },
  standalone: true,
  imports: [CommonModule],
})
export class SplTabComponent implements AfterContentInit {
  @ContentChild(SplTabLabelDirective, { descendants: true }) tabLabel!: SplTabLabelDirective;
  @ContentChild(SplTabContentDirective, { descendants: true }) tabContent!: SplTabContentDirective;

  ngAfterContentInit() {
    if (!this.tabLabel) {
      throw new SplError('<ng-template splTabLabel> is required for <spl-tab>');
    }

    if (!this.tabContent) {
      throw new SplError('<ng-template splTabContent> is required for <spl-tab>');
    }
  }
}
