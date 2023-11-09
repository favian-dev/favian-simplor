import { Component, ElementRef, EventEmitter, HostBinding, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplElementAccessor } from '../../interfaces/spl-element-accessor';

/**
 * Component for option of SplSelectComponent.
 * You can input value and label, and by default, content is used as value and label.
 */
@Component({
  selector: 'spl-option',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spl-option.component.html',
  host: {
    class: 'spl-option',
  },
})
export class SplOptionComponent implements SplElementAccessor<HTMLElement> {
  /**
   * State indicating that the host element is selected.
   * Binds the ‘.spl-active’ class according to the value.
   */
  @HostBinding('class.spl-active') active = false;

  /**
   * State indicating that the host element is hovered or focused.
   * Binds the '.spl-highlight' class according to the value.
   */
  @HostBinding('class.spl-highlight') highlight = false;

  /**
   * An emitter that will emit a value when the host element is clicked.
   * Because there is no @Output() decorator, it cannot be accessed from the Component template
   * and is used internally in SplSelectComponent.
   */
  onClick = new EventEmitter<any>();

  /**
   * Emitter to be emitted when the host element is hovered.
   * Because there is no @Output() decorator, it cannot be accessed from the Component template
   * and is used internally in SplSelectComponent.
   */
  onHover = new EventEmitter<void>();

  constructor(public elementRef: ElementRef<HTMLElement>) {}

  /** The value set through the value setter. */
  private _value: any;

  /** Returns the value set through the setter or the textContent of the host element. */
  get value(): any {
    return this._value === undefined ? this.elementRef.nativeElement.textContent : this._value;
  }

  /**
   * Sets the value to be emitted when the option is selected.
   * @param value - Value to set.
   */
  @Input()
  set value(value: any) {
    this._value = value;
  }

  /** The label set through the label setter. */
  private _label = '';

  /** Returns the label set through the setter or the textContent of the host element. */
  get label(): string {
    return this._label || this.elementRef.nativeElement.textContent!;
  }

  /**
   * Sets the label to be displayed in SplSelectComponent when the option is selected.
   * @param value - Label to set.
   */
  @Input()
  set label(value: string) {
    this._label = value;
  }

  /** Listen to the click event of the host element and emit value through the onClick emitter. */
  @HostListener('click')
  onHostClick(): void {
    this.onClick.emit(this.value);
  }

  /** Listens for the mouseenter event of the host element and emits an onHover emitter. */
  @HostListener('mouseenter')
  onHostMouseEnter(): void {
    this.onHover.emit();
  }
}
