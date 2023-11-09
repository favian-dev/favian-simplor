import { AfterViewInit, Component, ElementRef, HostListener, Inject } from '@angular/core';
import { SPL_OVERLAY_DATA, SplOverlayRef } from '../../services/spl-overlay.service';
import { CommonModule } from '@angular/common';
import { SplElementAccessor } from '../../interfaces/spl-element-accessor';
import { SplEffectDirective } from '../spl-effect/spl-effect.directive';
import { SplFadeInSlideUpAnimator } from '../../abstracts/spl-fade-in-slide-up-animator';

/**
 * An overlay component to display a short message.
 * Messages can be displayed through SplMessageService, and only one message can be displayed at a time.
 */
@Component({
  selector: 'spl-message',
  templateUrl: './spl-message.component.html',
  host: {
    class: 'spl-message',
  },
  standalone: true,
  imports: [CommonModule],
  hostDirectives: [SplEffectDirective],
})
export class SplMessageComponent
  extends SplFadeInSlideUpAnimator
  implements AfterViewInit, SplElementAccessor<HTMLElement>
{
  constructor(
    @Inject(SplOverlayRef) private _overlayRef: SplOverlayRef,
    @Inject(SPL_OVERLAY_DATA) private _message: string,
    public elementRef: ElementRef<HTMLElement>,
  ) {
    super();
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.innerText = this._message;
  }

  /** Listen to the click event of the host element and close the message overlay. */
  @HostListener('click')
  onHostClick(): void {
    this._overlayRef.close();
  }
}
