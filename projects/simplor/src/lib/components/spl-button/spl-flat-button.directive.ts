import { Directive } from '@angular/core';
import { SplButtonContrastEffectBaseDirective } from './spl-button-contrast-effect-base.directive';

/**
 * This Directive creates a button filled with the given theme color.
 * This extends 'SplButtonDirective'.
 */
@Directive({
  selector: 'button[splFlatButton]',
  host: {
    class: 'spl-flat-button',
  },
  standalone: true,
})
export class SplFlatButtonDirective extends SplButtonContrastEffectBaseDirective {}
