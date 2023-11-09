import { Directive } from '@angular/core';
import { SplButtonDirective } from './spl-button.directive';
import { SplContrastEffectDirective } from '../spl-effect/spl-contrast-effect.directive';

/**
 * This Directive creates a button filled with the given theme color.
 * This extends 'SplButtonDirective'.
 */
@Directive({
  selector: 'button[splFlatButton]',
  host: {
    class: 'spl-flat-button',
  },
  hostDirectives: [
    {
      directive: SplContrastEffectDirective,
      inputs: ['theme', 'disableEffect'],
    },
  ],
  standalone: true,
})
export class SplFlatButtonDirective extends SplButtonDirective {}
