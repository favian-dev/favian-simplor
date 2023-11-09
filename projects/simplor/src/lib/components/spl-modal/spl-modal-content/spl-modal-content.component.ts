import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * This is a component for modal content.
 * Contains the content to be included in the modal body.
 */
@Component({
  selector: 'spl-modal-content',
  templateUrl: './spl-modal-content.component.html',
  host: {
    class: 'spl-modal-content',
  },
  standalone: true,
  imports: [CommonModule],
})
export class SplModalContentComponent {}
