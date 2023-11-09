import { Component, EventEmitter, Inject, Input, OnChanges, Optional, Output } from '@angular/core';
import { SPL_PAGINATOR_PROVIDER, SplPaginatorCurrentRangeLabelFn, SplPaginatorOptions } from './spl-paginator-provider';
import { CommonModule, DecimalPipe } from '@angular/common';
import { BooleanAttribute } from '../../utils/type.util';
import { convertBooleanAttribute } from '../../utils/convert.util';
import { SplSelectComponent } from '../spl-select/spl-select.component';
import { FormsModule } from '@angular/forms';
import { SplOptionComponent } from '../spl-option/spl-option.component';
import { SplButtonDirective } from '../spl-button/spl-button.directive';
import { SplIconComponent } from '../spl-icon/spl-icon.component';

/**
 * It is a paginator similar to the Material Design System.
 * You can customize the text representing the current page range by providing SplPaginatorOptions.
 */
@Component({
  selector: 'spl-paginator',
  templateUrl: './spl-paginator.component.html',
  host: {
    class: 'spl-paginator',
  },
  standalone: true,
  imports: [CommonModule, SplSelectComponent, FormsModule, SplOptionComponent, SplButtonDirective, SplIconComponent],
})
export class SplPaginatorComponent implements OnChanges {
  /** Sets the total record size. */
  @Input({ required: true }) total = 0;

  /**
   * Sets options for the size selector to an array of numbers.
   * If the array is empty, the size selector is not displayed.
   */
  @Input() sizeOptions: number[] = [];

  /**
   * Sets the current page.
   * The default is 1 and the minimum is 1.
   */
  @Input({ required: true }) page = 1;

  /** The emitter that will emit the changed page. */
  @Output() pageChange = new EventEmitter<number>();

  /**
   * Sets the record size to display per page.
   * The default value is 10.
   */
  @Input() size = 10;

  /** An emitter that will emit the changed size through the size selector. */
  @Output() sizeChange = new EventEmitter<number>();

  /**
   * A label to display the current page range.
   * By default, it displays as `${startRecordNumber} - ${endRecordNumber}`,
   * but you can change the format by providing SplPaginatorOptions.createCurrentRangeLabel .
   */
  currentRangeLabel = '';

  constructor(@Inject(SPL_PAGINATOR_PROVIDER) @Optional() private _options: SplPaginatorOptions) {}

  /** This is the display state of the buttons to go to the first and last pages. */
  private _showEndButtons = false;

  /** Returns the display state of the buttons to go to the first and last pages. */
  @Input()
  get showEndButtons(): boolean {
    return this._showEndButtons;
  }

  /**
   * Sets the display state of the buttons to go to the first and last pages.
   * @param value - Display state to set.
   */
  set showEndButtons(value: BooleanAttribute) {
    this._showEndButtons = convertBooleanAttribute(value);
  }

  /** Returns the last page number. */
  get lastPage(): number {
    return Math.ceil(this.total / this.size);
  }

  /** Returns true if the current page is the first page. */
  get isFirstPage(): boolean {
    return this.page === 1;
  }

  /** Returns true if the current page is the last page. */
  get isLastPage(): boolean {
    return this.page * this.size >= this.total;
  }

  /** Returns the state of whether to display the size selector. */
  get showSizeSelector(): boolean {
    return this.sizeOptions.length > 0;
  }

  /**
   * Returns a function that creates a label to display the current page range.
   * If SplPaginatorOptions.createCurrentRangeLabel is provided, that will be returned.
   */
  get createCurrentRangeLabel(): SplPaginatorCurrentRangeLabelFn {
    return (
      this._options?.createCurrentRangeLabel ||
      ((page, size, total) => {
        const decimalPipe = new DecimalPipe('en-US');
        const digitsInfo = '0.0-0';

        return `${decimalPipe.transform((page - 1) * size + 1, digitsInfo)} - ${decimalPipe.transform(
          Math.min(total, page * size),
          digitsInfo,
        )} / ${decimalPipe.transform(total, digitsInfo)}`;
      })
    );
  }

  ngOnChanges() {
    this.currentRangeLabel = this.createCurrentRangeLabel(this.page, this.size, this.total);
  }

  /** If there is a previous page, go to the previous page. */
  toPreviousPage(): void {
    if (!this.isFirstPage) {
      this.pageChange.emit(this.page - 1);
    }
  }

  /** If there is a next page, go to the next page. */
  toNextPage(): void {
    if (!this.isLastPage) {
      this.pageChange.emit(this.page + 1);
    }
  }

  /** Go to the first page. */
  toFirstPage(): void {
    this.pageChange.emit(1);
  }

  /** Go to the last page. */
  toLastPage(): void {
    this.pageChange.emit(this.lastPage);
  }
}
