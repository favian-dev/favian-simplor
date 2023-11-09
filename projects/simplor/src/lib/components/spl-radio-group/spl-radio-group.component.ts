import {
  AfterContentInit,
  Component,
  ContentChildren,
  DestroyRef,
  HostBinding,
  HostListener,
  Input,
  OnDestroy,
  QueryList,
} from '@angular/core';
import { SplRadioButtonComponent } from './spl-radio-button/spl-radio-button.component';
import { Subscription } from 'rxjs';
import { SplControl } from '../../abstracts/spl-control';
import { BooleanAttribute, CanUndefined } from '../../utils/type.util';
import { convertBooleanAttribute } from '../../utils/convert.util';
import { SplLogger } from '../../utils/logger.util';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';

/**
 * This is the type for the radio buttons placement direction within the radio group.
 * 'column' places radio buttons vertically.
 * 'row' places radio buttons horizontally.
 */
export type SplRadioGroupDirection = 'column' | 'row';

/**
 * This is a container component for displaying radio buttons.
 * This includes a keyboard event for the radio button.
 */
@Component({
  selector: 'spl-radio-group',
  templateUrl: './spl-radio-group.component.html',
  host: {
    class: 'spl-radio-group',
  },
  standalone: true,
  imports: [CommonModule],
})
export class SplRadioGroupComponent extends SplControl implements AfterContentInit, OnDestroy {
  /**
   * Sets the direction of radio buttons.
   * This binds the value to the spl-radio-group-direction attribute.
   */
  @Input() @HostBinding('attr.spl-radio-group-direction') direction: SplRadioGroupDirection = 'row';

  /** This is a QueryList of radio buttons used as content. */
  @ContentChildren(SplRadioButtonComponent, { descendants: true })
  radioButtonQueryList!: QueryList<SplRadioButtonComponent>;

  /** This is the value of the currently selected radio button. */
  value: any;

  /** Logger for SplRadioGroupComponent. */
  private readonly _logger = new SplLogger('SplRadioGroupComponent');

  /** A subscription to subscribe to the onClick emitter of radio buttons. */
  private _radioButtonClickSubscription?: Subscription;

  /** Timeout timer to prevent NG0100 error when updating the selected option. */
  private _renderTimer: any;

  constructor(private _destroyRef: DestroyRef) {
    super();
  }

  /** The current disabled state of the Component. */
  private _disabled = false;

  /**
   * Returns the current disabled state of the Component.
   * Bind the '.spl-disabled' class according to the value.
   */
  @Input()
  @HostBinding('class.spl-disabled')
  get disabled(): boolean {
    return this._disabled;
  }

  /**
   * Sets the current disabled state of the Component.
   * @param value - Disabled state to set.
   */
  set disabled(value: BooleanAttribute) {
    this._disabled = convertBooleanAttribute(value);
  }

  /** Returns tabindex according to disabled status and binds value to attribute. */
  @HostBinding('attr.tabindex')
  get tabindex(): string {
    return this.disabled ? '-1' : '0';
  }

  ngAfterContentInit(): void {
    this._subscribeRadioButtonChanges();
    this._subscribeRadioButtonClick();
    this._updateSelectedRadioButton();
  }

  ngOnDestroy(): void {
    this._radioButtonClickSubscription?.unsubscribe();
    clearTimeout(this._renderTimer);
  }

  /**
   * Sets the value in the component.
   * This changes the selected radio button.
   * @param obj - Value to set.
   */
  override writeValue(obj: any): void {
    this.value = obj;
    this._updateSelectedRadioButton();
  }

  /**
   * Sets the disabled state on the Component.
   * @param isDisabled - Disabled state to set.
   */
  override setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  /**
   * Select the previous radio button by listening to the arrowup keydown event.
   * To prevent side effects, event is not propagated and the default is prevented.
   * @param event - KeyboardEvent.
   */
  @HostListener('keydown.arrowup', ['$event'])
  onHostArrowUp(event: KeyboardEvent): void {
    event.stopPropagation();
    event.preventDefault();

    this._toPrevious();
  }

  /**
   * Select the previous radio button by listening to the arrowleft keydown event.
   * To prevent side effects, event is not propagated and the default is prevented.
   * @param event - KeyboardEvent.
   */
  @HostListener('keydown.arrowleft', ['$event'])
  onHostArrowLeft(event: KeyboardEvent): void {
    event.stopPropagation();
    event.preventDefault();

    this._toPrevious();
  }

  /**
   * Select the next radio button by listening to the arrowdown keydown event.
   * To prevent side effects, event is not propagated and the default is prevented.
   * @param event - KeyboardEvent.
   */
  @HostListener('keydown.arrowdown', ['$event'])
  onHostArrowDown(event: KeyboardEvent): void {
    event.stopPropagation();
    event.preventDefault();

    this._toNext();
  }

  /**
   * Select the next radio button by listening to the arrowright keydown event.
   * To prevent side effects, event is not propagated and the default is prevented.
   * @param event - KeyboardEvent.
   */
  @HostListener('keydown.arrowright', ['$event'])
  onHostArrowRight(event: KeyboardEvent): void {
    event.stopPropagation();
    event.preventDefault();

    this._toNext();
  }

  /**
   * Select the previous radio button.
   * This calls the valueChange() and writeValue() methods.
   */
  private _toPrevious(): void {
    if (this.disabled) {
      return;
    }

    const activeIndex = this._getCurrentActiveIndex();
    const radioButton = this._getRadioButtonByIndex(Math.max(0, activeIndex - 1));

    if (radioButton) {
      this.valueChange(radioButton.value);
      this.writeValue(radioButton.value);
    }
  }

  /**
   * Select the next radio button.
   * This calls the valueChange() and writeValue() methods.
   */
  private _toNext(): void {
    if (this.disabled) {
      return;
    }

    const activeIndex = this._getCurrentActiveIndex();
    const radioButton = this._getRadioButtonByIndex(Math.min(this.radioButtonQueryList.length - 1, activeIndex + 1));

    if (radioButton) {
      this.valueChange(radioButton.value);
      this.writeValue(radioButton.value);
    }
  }

  /** Returns the index of the currently selected radio button. */
  private _getCurrentActiveIndex(): number {
    let activeIndex = -1;

    // To stop from the active option, use find() method instead of forEach().
    this.radioButtonQueryList.find((optionItem, index) => {
      if (optionItem.value === this.value) {
        activeIndex = index;
        return true;
      }

      return false;
    });

    return activeIndex;
  }

  /**
   * Returns SplRadioButtonComponent at the given index.
   * @param index - Index to get SplRadioButtonComponent.
   */
  private _getRadioButtonByIndex(index: number): CanUndefined<SplRadioButtonComponent> {
    return this.radioButtonQueryList.get(index);
  }

  /** Updates the selected radio button according to the current value. */
  private _updateSelectedRadioButton(): void {
    clearTimeout(this._renderTimer);

    this._renderTimer = setTimeout(() => {
      this.radioButtonQueryList?.forEach((radioButtonItem) => {
        radioButtonItem.active = radioButtonItem.value === this.value;
      });
    });
  }

  /**
   * Subscribes to changes in the QueryList of radio buttons.
   * When the radio buttons change, the Component resubscribes to the onClick emitter and updates the selected radio button again.
   */
  private _subscribeRadioButtonChanges(): void {
    this.radioButtonQueryList.changes.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => {
      this._subscribeRadioButtonClick();
      this._updateSelectedRadioButton();
    });
  }

  /** Subscribes to the onClick emitter of radio buttons. */
  private _subscribeRadioButtonClick(): void {
    const subscription = new Subscription();

    this._radioButtonClickSubscription?.unsubscribe();

    subscription.add(
      ...this.radioButtonQueryList.map((radioButtonItem) => {
        return radioButtonItem.onClick.subscribe((value) => {
          if (this.disabled) {
            return;
          }

          this._logger.debug('Radio clicked', value);

          this.valueChange(value);
          this.writeValue(value);
        });
      }),
    );

    this._radioButtonClickSubscription = subscription;
  }
}
