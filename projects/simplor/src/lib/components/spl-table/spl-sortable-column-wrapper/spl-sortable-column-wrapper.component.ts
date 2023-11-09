import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * This is a Component that contains the existing content and SplSortableColumnControlComponent
 * when the SplSortableColumnDirective is applied to the <th> element.
 */
@Component({
  selector: 'spl-sortable-column-wrapper',
  templateUrl: './spl-sortable-column-wrapper.component.html',
  host: {
    class: 'spl-sortable-column-wrapper',
  },
  standalone: true,
  imports: [CommonModule],
})
export class SplSortableColumnWrapperComponent {}
