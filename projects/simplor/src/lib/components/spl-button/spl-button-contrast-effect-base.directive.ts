import { AfterViewInit, Directive, HostBinding, Input, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SplContrastEffectDirective } from '../spl-effect/spl-contrast-effect.directive';
import { SplTheme } from '../../utils/type.util';

@Directive({
  selector: '[splButtonContrastEffectBase]',
  standalone: true,
  host: {
    class: 'spl-button',
    type: 'button',
  },
})
export class SplButtonContrastEffectBaseDirective
  extends SplContrastEffectDirective
  implements AfterViewInit, OnDestroy
{
  /** Use one of the 'SplTheme' values and set the theme of the button and effect. */
  @Input() @HostBinding('attr.spl-theme') override theme: SplTheme = 'none';

  /** Mutation observer to detect disabled attribute */
  protected _mutationObserver?: MutationObserver;

  constructor() {
    super();
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this._platformId)) {
      this._mutationObserver = new MutationObserver((records) => {
        records.forEach((record) => {
          const target = record.target as HTMLButtonElement;

          this.disableEffect = target.disabled;
        });
      });

      this._mutationObserver.observe(this.elementRef.nativeElement, {
        attributes: true,
      });
    }
  }

  ngOnDestroy() {
    this._mutationObserver?.disconnect();
  }
}
