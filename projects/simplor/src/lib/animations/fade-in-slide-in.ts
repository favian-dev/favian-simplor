import { animate, AnimationTriggerMetadata, keyframes, style, transition, trigger } from '@angular/animations';

/** This is the trigger name of the 'fade-in-slide-in' animation. */
export const FADE_IN_SLIDE_IN = 'fade-in-slide-in';

/** The void state value of the 'fade-in-slide-in' animation. */
export const FADE_IN_SLIDE_IN_VOID = 'void';

/** The left-show state value of the 'fade-in-slide-in' animation. */
export const FADE_IN_SLIDE_IN_LEFT_SHOW = 'left-show';

/** The right-show state value of the 'fade-in-slide-in' animation. */
export const FADE_IN_SLIDE_IN_RIGHT_SHOW = 'right-show';

/** The top-show state value of the 'fade-in-slide-in' animation. */
export const FADE_IN_SLIDE_IN_TOP_SHOW = 'top-show';

/** The bottom-show state value of the 'fade-in-slide-in' animation. */
export const FADE_IN_SLIDE_IN_BOTTOM_SHOW = 'bottom-show';

/**
 * This is a function that creates AnimationTriggerMetadata for the 'fade-in-slide-in' animation.
 * When the 'fade-in-slide-in' animation is in the void state, it moves 8px in a given direction and becomes transparent, and then returns to its original position when it is in the {direction}-show state.
 * When the animation state changes from void to {direction}-show or vice versa, the animation is executed according to the given 'timing' value.
 * @param slideDistance - This is the px value of the distance to slide. The default value is 8.
 * @param timing - Timing value for the animate() function.
 */
export function fadeInSlideIn(slideDistance = 8, timing = '.15s'): AnimationTriggerMetadata {
  return trigger(FADE_IN_SLIDE_IN, [
    transition(
      `${FADE_IN_SLIDE_IN_VOID} => ${FADE_IN_SLIDE_IN_LEFT_SHOW}`,
      animate(
        timing,
        keyframes([
          style({
            opacity: 0,
            translate: `-${slideDistance}px 0`,
          }),
          style({
            opacity: 1,
            translate: '0 0',
          }),
        ]),
      ),
    ),
    transition(
      `${FADE_IN_SLIDE_IN_LEFT_SHOW} => ${FADE_IN_SLIDE_IN_VOID}`,
      animate(
        timing,
        keyframes([
          style({
            opacity: 1,
            translate: '0 0',
          }),
          style({
            opacity: 0,
            translate: `-${slideDistance}px 0`,
          }),
        ]),
      ),
    ),
    transition(
      `${FADE_IN_SLIDE_IN_VOID} => ${FADE_IN_SLIDE_IN_RIGHT_SHOW}`,
      animate(
        timing,
        keyframes([
          style({
            opacity: 0,
            translate: `${slideDistance}px 0`,
          }),
          style({
            opacity: 1,
            translate: '0 0',
          }),
        ]),
      ),
    ),
    transition(
      `${FADE_IN_SLIDE_IN_RIGHT_SHOW} => ${FADE_IN_SLIDE_IN_VOID}`,
      animate(
        timing,
        keyframes([
          style({
            opacity: 1,
            translate: '0 0',
          }),
          style({
            opacity: 0,
            translate: `${slideDistance}px 0`,
          }),
        ]),
      ),
    ),
    transition(
      `${FADE_IN_SLIDE_IN_VOID} => ${FADE_IN_SLIDE_IN_TOP_SHOW}`,
      animate(
        timing,
        keyframes([
          style({
            opacity: 0,
            translate: `0 -${slideDistance}px`,
          }),
          style({
            opacity: 1,
            translate: '0 0',
          }),
        ]),
      ),
    ),
    transition(
      `${FADE_IN_SLIDE_IN_TOP_SHOW} => ${FADE_IN_SLIDE_IN_VOID}`,
      animate(
        timing,
        keyframes([
          style({
            opacity: 1,
            translate: '0 0',
          }),
          style({
            opacity: 0,
            translate: `0 -${slideDistance}px`,
          }),
        ]),
      ),
    ),
    transition(
      `${FADE_IN_SLIDE_IN_VOID} => ${FADE_IN_SLIDE_IN_BOTTOM_SHOW}`,
      animate(
        timing,
        keyframes([
          style({
            opacity: 0,
            translate: `0 ${slideDistance}px`,
          }),
          style({
            opacity: 1,
            translate: '0 0',
          }),
        ]),
      ),
    ),
    transition(
      `${FADE_IN_SLIDE_IN_BOTTOM_SHOW} => ${FADE_IN_SLIDE_IN_VOID}`,
      animate(
        timing,
        keyframes([
          style({
            opacity: 1,
            translate: '0 0',
          }),
          style({
            opacity: 0,
            translate: `0 ${slideDistance}px`,
          }),
        ]),
      ),
    ),
  ]);
}
