import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[splCalendarDateExtra]',
  standalone: true,
})
export class SplCalendarDateExtraDirective {
  constructor(public readonly templateRef: TemplateRef<any>) {}
}
