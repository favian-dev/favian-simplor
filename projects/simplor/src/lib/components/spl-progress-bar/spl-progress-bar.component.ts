import { Component, HostBinding, Input, OnDestroy } from '@angular/core';
import { SplThemeAttribute } from '../../interfaces/spl-theme-attribute';
import { NumberLike, SplTheme } from '../../utils/type.util';
import { convertNumberLike } from '../../utils/convert.util';
import { CommonModule } from '@angular/common';

/**
 * This is a component that displays the current progress status in the form of a horizontal bar.
 * You can set the color according to the theme by using the theme attribute.
 */
@Component({
  selector: 'spl-progress-bar',
  templateUrl: './spl-progress-bar.component.html',
  host: {
    class: 'spl-progress-bar',
  },
  standalone: true,
  imports: [CommonModule],
})
export class SplProgressBarComponent implements SplThemeAttribute, OnDestroy {
  /** Sets the theme color of the progress bar. */
  @Input() @HostBinding('attr.spl-theme') theme: SplTheme = 'none';

  /**
   * Indicates the percentage of current progress.
   * It has a value between 0 and 100.
   */
  percentage = 0;

  /** This is a Timeout timer to prevent NG0100 that may occur when calculating percentage. */
  private _calculateTimer: any;

  ngOnDestroy() {
    clearTimeout(this._calculateTimer);
  }

  /** A value indicating the current progress. */
  private _value = 0;

  /** Returns a value indicating the current progress. */
  get value(): number {
    return this._value;
  }

  /**
   * Sets a value indicating the current progress.
   * A percentage is calculated each time a value is set.
   * @param value - Value to set.
   */
  @Input()
  set value(value: NumberLike) {
    value = convertNumberLike(value);

    if (value !== this.value) {
      this._value = value;
      this.calculatePercentage();
    }
  }

  /** A value indicating the total progress. */
  private _total = 0;

  /** Returns a value indicating the total progress. */
  get total(): number {
    return this._total;
  }

  /**
   * Sets a value indicating the total progress.
   * A percentage is calculated each time a value is set.
   * @param value - Value to set.
   */
  @Input()
  set total(value: NumberLike) {
    const total = convertNumberLike(value);

    if (total !== this._total) {
      this._total = total;
      this.calculatePercentage();
    }
  }

  /**
   * Calculate percentage using the currently set total and value.
   * setTimeout() is used internally to prevent NG0100 error.
   */
  calculatePercentage(): void {
    clearTimeout(this._calculateTimer);

    // To prevent NG0100 error.
    this._calculateTimer = setTimeout(() => {
      this.percentage = this.total > 0 ? (this.value / this.total) * 100 : 0;
    });
  }
}
