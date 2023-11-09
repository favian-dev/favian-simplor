import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[splTabLabel]',
  host: {
    class: 'spl-tab-content',
  },
  standalone: true,
})
export class SplTabLabelDirective {
  constructor(public templateRef: TemplateRef<any>) {}
}
