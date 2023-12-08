import { Directive } from '@angular/core';
import { SplButtonEffectBaseDirective } from './spl-button-effect-base.directive';

/**
 * This is a Directive that creates a button with a border.
 * This extends 'SplButtonDirective'.
 */
@Directive({
  selector: 'button[splStrokeButton]',
  host: {
    class: 'spl-stroke-button',
  },
  standalone: true,
})
export class SplStrokeButtonDirective extends SplButtonEffectBaseDirective {}
