import { Component, HostBinding } from '@angular/core';
import { FADE_IN_SLIDE_IN, FADE_IN_SLIDE_IN_BOTTOM_SHOW, fadeInSlideIn } from '../animations/fade-in-slide-in';

/**
 * This is an abstract class that binds to a Component or Directive to execute the 'fade-in-slide-in' animation with the 'bottom-show' state.
 * When a component or directive is rendered or destroyed in a view, the 'fade-in-slide-in' animation is executed immediately.
 */
@Component({
  selector: 'spl-fade-in-slide-up-animator',
  template: '',
  animations: [fadeInSlideIn()],
})
export abstract class SplFadeInSlideUpAnimator {
  @HostBinding(`@${FADE_IN_SLIDE_IN}`) fadeInSlideInState = FADE_IN_SLIDE_IN_BOTTOM_SHOW;
}
