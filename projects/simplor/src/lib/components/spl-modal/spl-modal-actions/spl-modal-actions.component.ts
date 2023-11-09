import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * This is a component for modal actions.
 * The element to which SplModalActionDirective is bound can be displayed.
 * SplModalActionDirective is displayed stacked in column direction.
 */
@Component({
  selector: 'spl-modal-actions',
  templateUrl: './spl-modal-actions.component.html',
  host: {
    class: 'spl-modal-actions',
  },
  standalone: true,
  imports: [CommonModule],
})
export class SplModalActionsComponent {}
