import { Directive } from '@angular/core';

/**
 * This is a Directive that can display bound elements as action items of SplModalActionsComponent.
 * Each SplModalActionDirective is displayed stacked in column direction inside the SplModalActionsComponent.
 */
@Directive({
  selector: '[splModalAction]',
  host: {
    class: 'spl-modal-action',
  },
  standalone: true,
})
export class SplModalActionDirective {}
