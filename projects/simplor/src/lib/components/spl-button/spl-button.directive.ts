import { Directive, HostBinding, Input } from '@angular/core';
import { SplTheme } from '../../utils/type.util';
import { SplThemeAttribute } from '../../interfaces/spl-theme-attribute';
import { SplEffectDirective } from '../spl-effect/spl-effect.directive';

/**
 * This is a Directive that creates the most basic form of button.
 * It is used with the <button> element, and the type attribute of the element has 'button' as the default value.
 * 'SplEffectDirective' is bound, so appropriate effects are applied according to the user's actions, and the theme of buttons and effects can be set through the 'theme' attribute.
 */
@Directive({
  selector: 'button[splButton]',
  host: {
    class: 'spl-button',
    type: 'button',
  },
  hostDirectives: [
    {
      directive: SplEffectDirective,
      inputs: ['theme', 'disableEffect'],
    },
  ],
  standalone: true,
})
export class SplButtonDirective implements SplThemeAttribute {
  /** Use one of the 'SplTheme' values and set the theme of the button and effect. */
  @Input() @HostBinding('attr.spl-theme') theme: SplTheme = 'none';
}
