import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * This is a component for modal header.
 * Displays content as title.
 */
@Component({
  selector: 'spl-modal-header',
  templateUrl: './spl-modal-header.component.html',
  host: {
    class: 'spl-modal-header',
  },
  standalone: true,
  imports: [CommonModule],
})
export class SplModalHeaderComponent {}
