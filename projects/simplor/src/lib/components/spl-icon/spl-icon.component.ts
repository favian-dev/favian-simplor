import { Component, HostBinding, Inject, Input, Optional } from '@angular/core';
import { BooleanAttribute } from '../../utils/type.util';
import { convertBooleanAttribute } from '../../utils/convert.util';
import { CommonModule } from '@angular/common';
import { SPL_ICON_PROVIDER, SplIconOptions } from './spl-icon-provider';

/** Type definition available for icon. */
export type SplIconType = 'outlined' | 'rounded' | 'sharp';

/** Weight definition available for icon. */
export type SplIconWeight = '100' | '200' | '300' | '400' | '500' | '600' | '700';

/** Grade definition available for icon. */
export type SplIconGrade = '-25' | '0' | '200';

/** OpticalSize definition available for icon. */
export type SplIconOpticalSize = '20' | '24' | '40' | '48';

/**
 * This is an icon component that uses Google Material Symbols.
 * You can specify type, weight, grade, opticalSize, and fill properties.
 */
@Component({
  selector: 'spl-icon',
  templateUrl: './spl-icon.component.html',
  host: {
    class: 'spl-icon',
  },
  standalone: true,
  imports: [CommonModule],
})
export class SplIconComponent {
  /**
   * Sets the type of icon.
   * You can specify 'outlined', 'rounded', or 'sharp', and the default is 'outlined'.
   */
  @Input() type: SplIconType;

  /**
   * Sets the weight of the icon.
   * You can specify values from '100' to '700' in increments of 100, and the default value is '400'.
   */
  @Input() weight: SplIconWeight;

  /**
   * Sets the grade of the icon.
   * You can specify '-25', '0', and '200', and the default value is '0'.
   */
  @Input() grade: SplIconGrade;

  /**
   * Sets the optical size of the icon.
   * You can specify '20', '24', '40', and '48', and the default is '24'.
   */
  @Input() opticalSize: SplIconOpticalSize;

  constructor(@Inject(SPL_ICON_PROVIDER) @Optional() private _options: SplIconOptions) {
    const { type = 'outlined', weight = '400', grade = '0', opticalSize = '24', fill = false } = this._options || {};

    this.type = type;
    this.weight = weight;
    this.grade = grade;
    this.opticalSize = opticalSize;
    this.fill = fill;
  }

  /** This is the state of whether the icon is filled. */
  private _fill = false;

  /** Returns whether the icon is filled. */
  @Input()
  get fill(): boolean {
    return this._fill;
  }

  /**
   * Sets whether to fill the icon.
   * @param value - Fill state to set.
   */
  set fill(value: BooleanAttribute) {
    this._fill = convertBooleanAttribute(value);
  }

  /** If the type is 'outlined', it returns true and binds the 'material-symbols-outlined' class. */
  @HostBinding('class.material-symbols-outlined')
  get isOutlined(): boolean {
    return this.type === 'outlined';
  }

  /** If the type is 'rounded', it returns true and binds the 'material-symbols-rounded' class. */
  @HostBinding('class.material-symbols-rounded')
  get isRounded(): boolean {
    return this.type === 'rounded';
  }

  /** If the type is 'sharp', it returns true and binds the 'material-symbols-sharp' class. */
  @HostBinding('class.material-symbols-sharp')
  get isSharp(): boolean {
    return this.type === 'sharp';
  }

  /**
   * Returns the value for font-variation-settings style.
   * The value is determined by fill, weight, grade, and opticalSize.
   */
  @HostBinding('style.font-variation-settings')
  get fontVariationSettings(): string {
    return `'FILL' ${this.fill ? 1 : 0}, 'wght' ${this.weight}, 'GRAD' ${this.grade}, 'opsz' ${this.opticalSize}`;
  }
}
