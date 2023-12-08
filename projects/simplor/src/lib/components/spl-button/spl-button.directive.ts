import { Directive } from '@angular/core';
import { SplButtonEffectBaseDirective } from './spl-button-effect-base.directive';

/**
 * This is a Directive that creates the most basic form of button.
 * It is used with the <button> element, and the type attribute of the element has 'button' as the default value.
 * 'SplEffectDirective' is bound, so appropriate effects are applied according to the user's actions, and the theme of buttons and effects can be set through the 'theme' attribute.
 */
@Directive({
  selector: 'button[splButton]',
  standalone: true,
})
export class SplButtonDirective extends SplButtonEffectBaseDirective {}
