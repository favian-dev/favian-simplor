import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[splTabContent]',
  host: {
    class: 'spl-tab-content',
  },
  standalone: true,
})
export class SplTabContentDirective {
  constructor(public templateRef: TemplateRef<any>) {}
}
