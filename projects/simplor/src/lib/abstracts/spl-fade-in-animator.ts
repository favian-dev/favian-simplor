import { Component, HostBinding } from '@angular/core';
import { FADE_IN, FADE_IN_SHOW, fadeIn } from '../animations/fade-in';

/**
 * This is an abstract class that binds basic 'fade-in' animation to a Component or Directive.
 * When a Component or Directive is rendered or destroyed in a view, the 'fade-in' animation is executed immediately.
 */
@Component({
  selector: 'spl-fade-in-animator',
  template: '',
  animations: [fadeIn()],
})
export abstract class SplFadeInAnimator {
  @HostBinding(`@${FADE_IN}`) fadeInState = FADE_IN_SHOW;
}
