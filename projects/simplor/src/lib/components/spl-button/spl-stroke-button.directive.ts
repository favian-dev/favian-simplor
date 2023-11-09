import { Directive } from '@angular/core';
import { SplButtonDirective } from './spl-button.directive';
import { SplEffectDirective } from '../spl-effect/spl-effect.directive';

/**
 * This is a Directive that creates a button with a border.
 * This extends 'SplButtonDirective'.
 */
@Directive({
  selector: 'button[splStrokeButton]',
  host: {
    class: 'spl-stroke-button',
  },
  hostDirectives: [
    {
      directive: SplEffectDirective,
      inputs: ['theme', 'disableEffect'],
    },
  ],
  standalone: true,
})
export class SplStrokeButtonDirective extends SplButtonDirective {}
