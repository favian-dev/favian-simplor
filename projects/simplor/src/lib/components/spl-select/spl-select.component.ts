import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChildren,
  DestroyRef,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnDestroy,
  QueryList,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { SplOptionComponent } from '../spl-option/spl-option.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subscription } from 'rxjs';
import { SplControl } from '../../abstracts/spl-control';
import { BooleanAttribute, CanUndefined, Nullable } from '../../utils/type.util';
import { SplOverlayRef, SplOverlayService } from '../../services/spl-overlay.service';
import { SplElementAccessor } from '../../interfaces/spl-element-accessor';
import {
  SplOptionsOverlayComponent,
  SplOptionsOverlayData,
} from '../spl-options-overlay/spl-options-overlay.component';
import { SplPositionTrackerService } from '../../services/spl-position-tracker.service';
import { SplLogger } from '../../utils/logger.util';
import { convertBooleanAttribute } from '../../utils/convert.util';
import { CommonModule } from '@angular/common';
import { SplIconComponent } from '../spl-icon/spl-icon.component';

/**
 * Component that replaces the <select> element.
 * Allows user to select one of the options.
 */
@Component({
  selector: 'spl-select',
  templateUrl: './spl-select.component.html',
  host: {
    class: 'spl-input spl-select',
  },
  standalone: true,
  imports: [CommonModule, SplIconComponent],
})
export class SplSelectComponent<Value>
  extends SplControl
  implements AfterContentInit, AfterViewInit, OnDestroy, SplElementAccessor<HTMLElement>
{
  /** Sets a placeholder to display when there is no value. */
  @Input() placeholder = 'Select';

  /** This is a TemplateRef containing the SplOptionComponent used as content. */
  @ViewChild('optionsTemplate', { read: TemplateRef }) optionsTemplate!: TemplateRef<any>;

  /** QueryList of SplOptionComponent used as content. */
  @ContentChildren(SplOptionComponent, { descendants: true }) optionQueryList!: QueryList<SplOptionComponent>;

  /**
   * State whether the options overlay is open.
   * Binds the ‘.spl-opened’ class according to the value.
   */
  @HostBinding('class.spl-opened') overlayOpened = false;

  /** This is the value of the currently selected option. */
  value: Nullable<Value> = null;

  /** This is the label of the currently selected option. */
  label = '';

  /** Logger for SplSelectComponent. */
  private readonly _logger = new SplLogger('SplSelectComponent');

  /** Timeout timer to prevent NG0100 error when updating the label according to the selected option. */
  private _renderTimer: any;

  /** SplOverlayRef of the open options overlay. */
  private _optionsOverlayRef?: SplOverlayRef<SplOptionsOverlayComponent, Value>;

  /** A subscription to subscribe to the onClick emitter of options. */
  private _optionClickSubscription?: Subscription;

  /** A subscription to subscribe to the onClose emitter of SplOverlayRef of options overlay. */
  private _optionsOverlayCloseSubscription?: Subscription;

  constructor(
    public elementRef: ElementRef<HTMLElement>,
    private _destroyRef: DestroyRef,
    private _overlayService: SplOverlayService,
    private _positionTrackerService: SplPositionTrackerService,
  ) {
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
    this._subscribeOptionQueryListChanges();
    this._subscribeOptionClick();
  }

  ngAfterViewInit(): void {
    this._updateLabel();
  }

  ngOnDestroy(): void {
    this._unobserveHostPosition();
    this._optionClickSubscription?.unsubscribe();
    this._optionsOverlayCloseSubscription?.unsubscribe();

    clearTimeout(this._renderTimer);
  }

  /**
   * Sets value in Component.
   * The label is also updated according to the set value.
   * @param obj - Value to set.
   */
  override writeValue(obj: any): void {
    this.value = obj;
    this._updateLabel();
  }

  /**
   * Sets the disabled state on the Component.
   * @param isDisabled - Disabled state to set.
   */
  override setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  /** Listen to the click event of the host element and open the options overlay. */
  @HostListener('click')
  openOptionsByClick(): void {
    this.openOptions();
  }

  /** Listen to the 'enter' keydown event of the host element and open the options overlay. */
  @HostListener('keydown.enter')
  openOptionsByEnter(): void {
    this.openOptions();
  }

  /**
   * Listen to the 'arrowup' keydown event of the host element and select the previous option of the currently selected option.
   * If no option is currently selected, the first option is selected.
   * To prevent side effects, event is not propagated and the default is prevented.
   * @param event - KeyboardEvent.
   */
  @HostListener('keydown.arrowup', ['$event'])
  onHostArrowUp(event: KeyboardEvent): void {
    if (this.disabled) {
      return;
    }

    event.stopPropagation();
    event.preventDefault();

    const activeIndex = this._getCurrentActiveIndex();
    const previousOption = this._getOptionByIndex(Math.max(0, activeIndex - 1));

    if (previousOption) {
      this.valueChange(previousOption.value);
      this.writeValue(previousOption.value);
    }
  }

  /**
   * Listen to the 'arrowdown' keydown event of the host element and select the next option of the currently selected option.
   * If no option is currently selected, the first option is selected.
   * To prevent side effects, event is not propagated and the default is prevented.
   * @param event - KeyboardEvent.
   */
  @HostListener('keydown.arrowdown', ['$event'])
  onHostArrowDown(event: KeyboardEvent): void {
    if (this.disabled) {
      return;
    }

    event.stopPropagation();
    event.preventDefault();

    const activeIndex = this._getCurrentActiveIndex();
    const nextOption = this._getOptionByIndex(Math.min(this.optionQueryList.length - 1, activeIndex + 1));

    if (nextOption) {
      this.valueChange(nextOption.value);
      this.writeValue(nextOption.value);
    }
  }

  /** Focus on the host element. */
  focus(): void {
    this.elementRef.nativeElement.focus();
  }

  /**
   * Open the options overlay.
   * If there is an existing open overlay or is disabled, it is ignored.
   */
  openOptions(): void {
    if (this.disabled || this.overlayOpened) {
      return;
    }

    this._optionsOverlayRef = this._overlayService.open<SplOptionsOverlayComponent, SplOptionsOverlayData, Value>(
      SplOptionsOverlayComponent,
      {
        data: {
          optionsTemplate: this.optionsTemplate,
          optionsQueryList: this.optionQueryList,
          value: this.value,
        },
        styles: this._getOptionsStyles(),
      },
    );

    this.overlayOpened = true;
    this._observeHostPosition();
    this._subscribeOptionsOverlayClose(this._optionsOverlayRef);
  }

  /**
   * Subscribes to changes in the QueryList of options.
   * When options change, the component resubscribes to the onClick emitter and updates the label again.
   */
  private _subscribeOptionQueryListChanges(): void {
    this.optionQueryList.changes.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => {
      this._subscribeOptionClick();
      this._updateLabel();
    });
  }

  /** To close the opened SplOverlayRef with value, it subscribes to onClick emitter of options. */
  private _subscribeOptionClick(): void {
    const subscription = new Subscription();

    this._optionClickSubscription?.unsubscribe();

    subscription.add(
      ...this.optionQueryList.map((option) => {
        return option.onClick.subscribe((value) => {
          this._logger.debug('Click emitted from option', value);
          this._optionsOverlayRef?.close(value);
        });
      }),
    );

    this._optionClickSubscription = subscription;
  }

  /** Update the label according to the current value. */
  private _updateLabel(): void {
    clearTimeout(this._renderTimer);

    this._renderTimer = setTimeout(() => {
      const option = this.optionQueryList?.find((option) => {
        return option.value === this.value;
      });

      if (option) {
        this.label = option.label;
      } else {
        this.label = '';
      }
    });
  }

  /**
   * Subscribes to the onClose emitter of an opened SplOverlayRef to set the returned result to the Component when SplOverlayRef is closed.
   * @param optionsOverlayRef - Opened SplOverlayRef for options.
   */
  private _subscribeOptionsOverlayClose(optionsOverlayRef: SplOverlayRef<SplOptionsOverlayComponent, Value>): void {
    const subscription = new Subscription();

    this._optionsOverlayCloseSubscription?.unsubscribe();

    subscription.add(
      optionsOverlayRef.onClose.subscribe((result) => {
        if (result) {
          this.valueChange(result);
          this.writeValue(result);
          this.focus();
        }

        this._unobserveHostPosition();

        // Delete OverlayRef and overlayOpened status after 100ms timeout to prevent re-opening options
        // when clicking select component to close opened options.
        setTimeout(() => {
          this.overlayOpened = false;
          delete this._optionsOverlayRef;
        }, 100);
      }),
    );

    this._optionsOverlayCloseSubscription = subscription;
  }

  /**
   * Calculate the styles to apply to SplOverlayRef to open and return.
   * This calculates whether the overlay should be placed above or below the component based on the top and bottom margins.
   */
  private _getOptionsStyles(): Partial<CSSStyleDeclaration> {
    const { maxHeight } = SplOptionsOverlayComponent;
    const domRect = this.elementRef.nativeElement.getBoundingClientRect();
    const styles: Partial<CSSStyleDeclaration> = {
      width: domRect.width + 'px',
      left: domRect.left + 'px',
    };

    const bottomAvailable = domRect.bottom + maxHeight < window.innerHeight;
    const topAvailable = domRect.top - maxHeight > 0;

    if (!bottomAvailable && topAvailable) {
      styles.bottom = window.innerHeight - domRect.top + 'px';
    } else {
      styles.top = domRect.bottom + 'px';
    }

    return styles;
  }

  /** Updates the position of the open SplOverlayRef by observing the position of the host element. */
  private _observeHostPosition(): void {
    this._positionTrackerService.observe(this.elementRef.nativeElement, (domRect) => {
      this._optionsOverlayRef?.updateStyles(this._getOptionsStyles());

      const hideOnTop = domRect.bottom < 0;
      const hideUnderBottom = domRect.top > window.innerHeight;

      if (hideOnTop || hideUnderBottom) {
        this._optionsOverlayRef?.close();
      }
    });
  }

  /** Unobserve the position of the host element. */
  private _unobserveHostPosition(): void {
    this._positionTrackerService.unobserve(this.elementRef.nativeElement);
  }

  /** Returns the index of the currently selected option. */
  private _getCurrentActiveIndex(): number {
    let activeIndex = -1;

    // To stop from the active option, use find() method instead of forEach().
    this.optionQueryList.find((optionItem, index) => {
      if (optionItem.value === this.value) {
        activeIndex = index;
        return true;
      }

      return false;
    });

    return activeIndex;
  }

  /**
   * Returns the SplOptionComponent of the given index.
   * @param index - Index to get SplOptionComponent.
   */
  private _getOptionByIndex(index: number): CanUndefined<SplOptionComponent> {
    return this.optionQueryList.get(index);
  }
}
