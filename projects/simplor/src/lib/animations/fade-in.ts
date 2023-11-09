import { animate, AnimationTriggerMetadata, state, style, transition, trigger } from '@angular/animations';

/** This is the trigger name of the 'fade-in' animation. */
export const FADE_IN = 'fade-in';

/** The void state value of the 'fade-in' animation. */
export const FADE_IN_VOID = 'void';

/** The show state value of the 'fade-in' animation. */
export const FADE_IN_SHOW = 'show';

/**
 * This is a function that creates AnimationTriggerMetadata for 'fade-in' animation.
 * The 'fade-in' animation is transparent when in the void state and appears when it is in the show state.
 * When the animation state changes from void to show or vice versa, the animation is executed according to the given 'timing' value.
 * @param timing - Timing value for the animate() function.
 */
export function fadeIn(timing = '.15s'): AnimationTriggerMetadata {
  return trigger(FADE_IN, [
    state(
      FADE_IN_VOID,
      style({
        opacity: 0,
      }),
    ),
    state(
      FADE_IN_SHOW,
      style({
        opacity: 1,
      }),
    ),
    transition(`${FADE_IN_VOID} <=> ${FADE_IN_SHOW}`, animate(timing)),
  ]);
}
