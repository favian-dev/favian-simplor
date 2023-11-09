import { AfterViewInit, Component, ElementRef, EventEmitter, HostBinding, HostListener, Input } from '@angular/core';
import { SplEffectDirective } from '../../spl-effect/spl-effect.directive';
import { CommonModule } from '@angular/common';
import { BooleanAttribute } from '../../../utils/type.util';
import { convertBooleanAttribute } from '../../../utils/convert.util';
import { SplElementAccessor } from '../../../interfaces/spl-element-accessor';

/**
 * A toggle button available for SplToggleButtonGroupComponent.
 * It has a unique value and only 1 can be selected within the group.
 */
@Component({
  selector: 'spl-toggle-button',
  templateUrl: './spl-toggle-button.component.html',
  host: {
    class: 'spl-toggle-button',
  },
  hostDirectives: [
    {
      directive: SplEffectDirective,
      inputs: ['theme', 'disableEffect'],
    },
  ],
  standalone: true,
  imports: [CommonModule],
})
export class SplToggleButtonComponent implements SplElementAccessor<HTMLElement>, AfterViewInit {
  /** Sets the value of button. */
  @Input({ required: true }) value!: any;

  /**
   * The active state of the button.
   * Binds the '.spl-active' class according to the value.
   */
  @HostBinding('class.spl-active') active = false;

  /**
   * The onClick emitter used internally by SplToggleButtonGroupComponent.
   * Emitted when the host element is clicked.
   */
  onClick = new EventEmitter<void>();

  constructor(public elementRef: ElementRef<HTMLElement>) {}

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
    this._bindDisabledAttribute();
  }

  /** Returns tabindex according to disabled status and binds value to attribute. */
  @HostBinding('attr.tabindex')
  get tabindex(): string {
    return this.disabled ? '-1' : '0';
  }

  ngAfterViewInit() {
    this._bindDisabledAttribute();
  }

  /** Listens for the click event of the host element and emits an onClick emitter. */
  @HostListener('click')
  onHostClick(): void {
    if (!this.disabled) {
      this.onClick.emit();
    }
  }

  /**
   * Listens for the 'enter' keydown event of the host element and emits an onClick emitter.
   * To prevent side effects, event is not propagated and the default is prevented.
   * @param event - KeyboardEvent.
   */
  @HostListener('keydown.enter', ['$event'])
  onEnterKeyDown(event: KeyboardEvent): void {
    event.stopPropagation();
    event.preventDefault();

    this.onHostClick();
  }

  /**
   * Listens for the 'space' keydown event of the host element and emits an onClick emitter.
   * To prevent side effects, event is not propagated and the default is prevented.
   * @param event - KeyboardEvent.
   */
  @HostListener('keydown.space', ['$event'])
  onSpaceKeyDown(event: KeyboardEvent): void {
    event.stopPropagation();
    event.preventDefault();

    this.onHostClick();
  }

  /**
   * A function that binds the disabled attribute to the host element according to the current disabled state.
   * Used to disable SplEffectDirective.
   */
  private _bindDisabledAttribute(): void {
    if (this.disabled) {
      this.elementRef?.nativeElement.setAttribute('disabled', '');
    } else {
      this.elementRef?.nativeElement.removeAttribute('disabled');
    }
  }
}
