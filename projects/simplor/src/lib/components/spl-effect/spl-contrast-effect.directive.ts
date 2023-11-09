import { Directive } from '@angular/core';
import { SplEffectDirective } from './spl-effect.directive';
import { SplEffectOverlayComponent } from './spl-effect-overlay/spl-effect-overlay.component';

@Directive({
  selector: '[splContrastEffect]',
  standalone: true,
  host: {
    class: 'spl-contrast-effect',
  },
  providers: [SplEffectOverlayComponent],
})
export class SplContrastEffectDirective extends SplEffectDirective {
  constructor() {
    super();
  }
}
