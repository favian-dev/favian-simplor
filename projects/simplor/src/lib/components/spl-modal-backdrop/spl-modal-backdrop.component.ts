import { Component, HostListener, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplModalRef } from '../../services/spl-modal.service';
import { SplLogger } from '../../utils/logger.util';
import { SplFadeInAnimator } from '../../abstracts/spl-fade-in-animator';

/**
 * This is the backdrop for the Modal Component.
 * SplModalRef of the related modal is provided, and the modal is closed when the host element is clicked.
 */
@Component({
  selector: 'spl-modal-backdrop',
  standalone: true,
  imports: [CommonModule],
  template: '',
  host: {
    class: 'spl-modal-backdrop',
  },
})
export class SplModalBackdropComponent extends SplFadeInAnimator {
  /** Logger for SplModalBackdropComponent. */
  private readonly _logger = new SplLogger('SplModalBackdropComponent');

  constructor(@Inject(SplModalRef) private _modalRef: SplModalRef) {
    super();
  }

  /** Close the modal by listening to the click event of the host element. */
  @HostListener('click')
  close(): void {
    this._logger.debug('Backdrop is clicked');
    this._modalRef.close();
  }
}
