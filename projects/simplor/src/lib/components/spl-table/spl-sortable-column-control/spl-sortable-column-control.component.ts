import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplIconComponent } from '../../spl-icon/spl-icon.component';

/**
 * This is a type that defines the sort direction available in SplSortableColumnControlComponent.
 * 'desc' sorts in descending direction.
 * 'asc' sorts in ascending direction.
 * 'none' does not sort.
 */
export type SplSortableColumnDirection = 'desc' | 'asc' | 'none';

/** A component that displays icons according to the given sort direction. */
@Component({
  selector: 'spl-sortable-column-control',
  templateUrl: './spl-sortable-column-control.component.html',
  host: {
    class: 'spl-sortable-column-control',
  },
  standalone: true,
  imports: [CommonModule, SplIconComponent],
})
export class SplSortableColumnControlComponent {
  /**
   * Current sort direction for the column.
   * The set value is bound to the 'spl-direction' attribute.
   */
  @HostBinding('attr.spl-direction') direction: SplSortableColumnDirection = 'none';

  /** Returns the name of the sort icon according to the direction. */
  get sortIcon(): string {
    switch (this.direction) {
      case 'asc': {
        return 'arrow_drop_up';
      }

      case 'desc': {
        return 'arrow_drop_down';
      }

      default: {
        return 'check_indeterminate_small';
      }
    }
  }
}
