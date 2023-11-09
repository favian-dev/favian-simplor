import {
  AfterContentInit,
  Component,
  ContentChildren,
  DestroyRef,
  HostBinding,
  Input,
  OnDestroy,
  QueryList,
} from '@angular/core';
import { SplToggleButtonComponent } from './spl-toggle-button/spl-toggle-button.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subscription } from 'rxjs';
import { SplControl } from '../../abstracts/spl-control';
import { BooleanAttribute } from '../../utils/type.util';
import { convertBooleanAttribute } from '../../utils/convert.util';
import { SplLogger } from '../../utils/logger.util';
import { CommonModule } from '@angular/common';

/**
 * A type that defines the direction of SplToggleButtonComponent.
 * 'horizontal' places the buttons horizontally.
 * 'vertical' places the buttons vertically.
 */
export type SplToggleButtonDirection = 'horizontal' | 'vertical';

/**
 * This is a Component that allows you to select one of several buttons.
 * Buttons can be placed vertically or horizontally depending on the direction.
 */
@Component({
  selector: 'spl-toggle-button-group',
  templateUrl: './spl-toggle-button-group.component.html',
  host: {
    class: 'spl-toggle-button-group',
  },
  standalone: true,
  imports: [CommonModule],
})
export class SplToggleButtonGroupComponent extends SplControl implements AfterContentInit, OnDestroy {
  /**
   * Sets the placement direction of buttons.
   * The set value is bound to the 'spl-direction' attribute.
   */
  @Input() @HostBinding('attr.spl-direction') direction: SplToggleButtonDirection = 'horizontal';

  /** QueryList of SplToggleButtonComponent used as content. */
  @ContentChildren(SplToggleButtonComponent, { descendants: true })
  buttonQueryList!: QueryList<SplToggleButtonComponent>;

  /** Value of the currently selected button. */
  value: any;

  /** Logger for SplToggleButtonGroupComponent. */
  private readonly _logger = new SplLogger('SplToggleButtonGroupComponent');

  /** A subscription to subscribe to the SplToggleButtonComponent's onClick emitter. */
  private _buttonClickSubscription?: Subscription;

  /** Timeout timer to prevent NG0100 error. */
  private _renderTimer: any;

  /** State whether the disabled state has been updated. */
  private _disabledStateHasUpdated = false;

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
    this._disabledStateHasUpdated = true;
    this._updateButtonsDisabledStates();
  }

  ngAfterContentInit(): void {
    this._subscribeButtonQueryListChanges();
    this._subscribeButtonClick();

    // To prevent NG0100 error.
    this._renderTimer = setTimeout(() => {
      this._updateActiveState();

      if (this._disabledStateHasUpdated) {
        this._updateButtonsDisabledStates();
      }
    });
  }

  ngOnDestroy() {
    clearTimeout(this._renderTimer);
  }

  /**
   * Sets the value in Component.
   * The active button changes depending on the set value.
   * @param obj - Value to set.
   */
  override writeValue(obj: any): void {
    this.value = obj;
    this._updateActiveState();
  }

  /**
   * Sets the disabled state on the Component.
   * @param isDisabled - Disabled state to set.
   */
  override setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  /**
   * Subscribe to changes in SplToggleButtonComponent's QueryList.
   * Every time the QueryList changes, resubscribes to the onClick emitter and updates the active button.
   */
  private _subscribeButtonQueryListChanges(): void {
    this.buttonQueryList.changes.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => {
      this._subscribeButtonClick();
      this._updateActiveState();
    });
  }

  /**
   * Subscribe to the onClick emitter of SplToggleButtonComponent.
   * When the onClick emitter is emitted, the value of that button is applied to the control.
   */
  private _subscribeButtonClick(): void {
    const subscription = new Subscription();

    subscription.add(
      ...this.buttonQueryList.map((button) => {
        return button.onClick.subscribe(() => {
          this._logger.debug(`Toggle button is clicked with value: ${button.value}`);

          this.valueChange(button.value);
          this.writeValue(button.value);
        });
      }),
    );

    this._buttonClickSubscription?.unsubscribe();
    this._buttonClickSubscription = subscription;
  }

  /** Updates the active button according to the current value of the component. */
  private _updateActiveState(): void {
    this.buttonQueryList?.forEach((button) => {
      button.active = button.value === this.value;
    });
  }

  /** Updates the disabled state of buttons. */
  private _updateButtonsDisabledStates(): void {
    this.buttonQueryList?.forEach((button) => {
      button.disabled = this.disabled;
    });
  }
}
