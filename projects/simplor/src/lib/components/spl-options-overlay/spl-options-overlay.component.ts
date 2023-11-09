import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnDestroy,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SPL_OVERLAY_DATA, SplOverlayRef } from '../../services/spl-overlay.service';
import { SplElementAccessor } from '../../interfaces/spl-element-accessor';
import { SplOptionComponent } from '../spl-option/spl-option.component';
import { Subscription } from 'rxjs';
import { SplLogger } from '../../utils/logger.util';
import { SplFadeInSlideUpAnimator } from '../../abstracts/spl-fade-in-slide-up-animator';

/** Overlay data that can be provided for SplOptionsOverlayComponent. */
export interface SplOptionsOverlayData {
  /**
   * TemplateRef containing options.
   * The contents of TemplateRef are rendered inside SplOptionsOverlayComponent.
   */
  optionsTemplate: TemplateRef<any>;

  /** QueryList for SplOptionComponent. */
  optionsQueryList: QueryList<SplOptionComponent>;

  /** The value selected before opening SplOptionsOverlayComponent. */
  value: any;
}

/** This is an overlay Component to display options in SplSelectComponent. */
@Component({
  selector: 'spl-options-overlay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spl-options-overlay.component.html',
  host: {
    class: 'spl-options-overlay',
    // To give focus to the host element when a component is attached to a view.
    tabindex: '0',
  },
})
export class SplOptionsOverlayComponent
  extends SplFadeInSlideUpAnimator
  implements AfterViewInit, SplElementAccessor<HTMLElement>, OnDestroy
{
  /**
   * The maximum height of the host element.
   * The overlay is displayed below SplSelectComponent by default, but appears above it if space for the maximum height is not available.
   * If it is not possible to secure the maximum space height even from above, it will be displayed below.
   */
  static maxHeight = 250;

  /** This is a ViewContainerRef to render a TemplateRef containing SplOptionComponent as content. */
  @ViewChild('container', { read: ViewContainerRef }) viewContainerRef!: ViewContainerRef;

  /** Logger for SplOptionsOverlayComponent. */
  private readonly _logger = new SplLogger('SplOptionsOverlayComponent');

  /** Indicates the index of the currently focused option. */
  private _highlightIndex = 0;

  /** Subscription to subscribe to SplOptionComponent's onHover emitter. */
  private _optionsHoverSubscription?: Subscription;

  constructor(
    @Inject(SPL_OVERLAY_DATA) private _data: SplOptionsOverlayData,
    @Inject(SplOverlayRef) private _overlayRef: SplOverlayRef<SplOptionsOverlayComponent>,
    public elementRef: ElementRef<HTMLElement>,
  ) {
    super();
  }

  ngAfterViewInit() {
    this.viewContainerRef.createEmbeddedView(this._data.optionsTemplate);
    this.elementRef.nativeElement.focus({
      preventScroll: true,
    });

    this._subscribeOptionsHover();

    // To prevent NG0100.
    setTimeout(() => {
      this._setActiveOption();
      this._setHighlightedOption();
      this._scrollToHighlightedOption();
    });
  }

  ngOnDestroy() {
    this._optionsHoverSubscription?.unsubscribe();
  }

  /** Close the overlay by listening to the blur event of the host element. */
  @HostListener('blur')
  onHostBlur(): void {
    this.close();
  }

  /**
   * Listen to the 'enter' keydown event of the host element and select the option of the currently highlighted index.
   * To prevent side effects, event is not propagated and the default is prevented.
   * @param event - KeyboardEvent.
   */
  @HostListener('keydown.enter', ['$event'])
  onHostEnter(event: KeyboardEvent): void {
    event.stopPropagation();
    event.preventDefault();

    const option = this._data.optionsQueryList.get(this._highlightIndex);

    if (option) {
      this.close(option.value);
    }
  }

  /**
   * Listen to the 'arrowup' keydown event of the host element and select the previous option of the currently highlighted index.
   * To prevent side effects, event is not propagated and the default is prevented.
   * @param event - KeyboardEvent.
   */
  @HostListener('keydown.arrowup', ['$event'])
  onHostArrowUp(event: KeyboardEvent): void {
    event.stopPropagation();
    event.preventDefault();

    this._highlightIndex = Math.max(0, this._highlightIndex - 1);
    this._setHighlightedOption();
    this._scrollToHighlightedOption();
  }

  /**
   * Listen to the 'arrowdown' keydown event of the host element and select the next option of the currently highlighted index.
   * To prevent side effects, event is not propagated and the default is prevented.
   * @param event - KeyboardEvent.
   */
  @HostListener('keydown.arrowdown', ['$event'])
  onHostArrowDown(event: KeyboardEvent): void {
    event.stopPropagation();
    event.preventDefault();

    this._highlightIndex = Math.min(this._data.optionsQueryList.length - 1, this._highlightIndex + 1);
    this._setHighlightedOption();
    this._scrollToHighlightedOption();
  }

  /**
   * Close the overlay with result.
   * @param result - Result data.
   */
  close(result?: any): void {
    this._overlayRef.close(result);
  }

  /** The index of the initially selected option is retrieved through the value of the injected overlay data. */
  private _setActiveOption(): void {
    const { value, optionsQueryList } = this._data;

    optionsQueryList.forEach((optionItem, index) => {
      optionItem.active = optionItem.value === value;

      if (optionItem.active) {
        this._highlightIndex = index;
      }
    });
  }

  /** Changes the highlight state of the option according to the current highlighted index. */
  private _setHighlightedOption(): void {
    const { optionsQueryList } = this._data;

    optionsQueryList.forEach((optionItem, index) => {
      optionItem.highlight = index === this._highlightIndex;
    });
  }

  /** Move the scroll of the overlay so that the option whose highlight state is true is in the center. */
  private _scrollToHighlightedOption(): void {
    const option = this._data.optionsQueryList.get(this._highlightIndex);

    if (option) {
      const { scrollTop: previousScrollTop = 0 } = this.elementRef.nativeElement;

      const optionDomRect = option.elementRef.nativeElement.getBoundingClientRect();
      const containerDomRect = this.elementRef.nativeElement.getBoundingClientRect();

      const topDiffer = containerDomRect.top - optionDomRect.top;

      this._logger.debug('Previous scrollTop', previousScrollTop);
      this._logger.debug('Top differ', topDiffer);
      this._logger.debug('New scrollTop', previousScrollTop + topDiffer);

      this.elementRef.nativeElement.scrollTop = previousScrollTop - topDiffer - containerDomRect.height / 2;
    }
  }

  /** Subscribes to SplOptionComponent's onHover emitter to update the highlighted index. */
  private _subscribeOptionsHover(): void {
    const subscription = new Subscription();

    this._optionsHoverSubscription?.unsubscribe();

    subscription.add(
      ...this._data.optionsQueryList.map((optionItem, index) => {
        return optionItem.onHover.subscribe(() => {
          this._highlightIndex = index;
          this._setHighlightedOption();
        });
      }),
    );

    this._optionsHoverSubscription = subscription;
  }
}
