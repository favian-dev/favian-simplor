import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplThemeAttribute } from '../../../interfaces/spl-theme-attribute';
import { SplTheme } from '../../../utils/type.util';
import { FADE_IN, FADE_IN_SHOW, fadeIn } from '../../../animations/fade-in';

@Component({
  selector: 'spl-effect-overlay',
  standalone: true,
  imports: [CommonModule],
  template: '',
  host: {
    class: 'spl-effect-overlay',
  },
  animations: [fadeIn('.1s')],
})
export class SplEffectOverlayComponent implements SplThemeAttribute {
  @HostBinding('class.spl-active') active = false;
  @HostBinding('attr.spl-theme') theme: SplTheme = 'none';
  @HostBinding(`@${FADE_IN}`) fadeInState = FADE_IN_SHOW;
}
