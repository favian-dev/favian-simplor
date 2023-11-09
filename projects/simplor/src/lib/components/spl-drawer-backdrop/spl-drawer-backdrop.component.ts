import { Component, HostListener, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplFadeInAnimator } from '../../abstracts/spl-fade-in-animator';
import { SplDrawerRef } from '../../services/spl-drawer.service';
import { SplLogger } from '../../utils/logger.util';

/**
 * This is the backdrop for the Drawer Component.
 * SplDrawerRef of the related drawer is provided, and the drawer is closed when the host element is clicked.
 */
@Component({
  selector: 'spl-drawer-backdrop',
  standalone: true,
  imports: [CommonModule],
  template: '',
  host: {
    class: 'spl-drawer-backdrop',
  },
})
export class SplDrawerBackdropComponent extends SplFadeInAnimator {
  /** Logger for SplDrawerBackdropComponent. */
  private readonly _logger = new SplLogger('SplDrawerBackdropComponent');

  constructor(@Inject(SplDrawerRef) private _drawerRef: SplDrawerRef) {
    super();
  }

  /** Close the drawer by listening to the click event of the host element. */
  @HostListener('click')
  close(): void {
    this._logger.debug('Backdrop is clicked');
    this._drawerRef.close();
  }
}
