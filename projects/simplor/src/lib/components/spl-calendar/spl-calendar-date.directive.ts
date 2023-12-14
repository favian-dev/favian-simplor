import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[splCalendarDate]',
  standalone: true,
})
export class SplCalendarDateDirective {
  constructor(public readonly templateRef: TemplateRef<any>) {}
}
