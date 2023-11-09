import {
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
  PLATFORM_ID,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { SplTabComponent } from './spl-tab/spl-tab.component';
import { BooleanAttribute, NumberLike } from '../../utils/type.util';
import { convertBooleanAttribute, convertNumberLike } from '../../utils/convert.util';
import { SplLogger } from '../../utils/logger.util';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SplHorizontalSliderComponent } from '../spl-horizontal-slider/spl-horizontal-slider.component';
import { SplEffectDirective } from '../spl-effect/spl-effect.directive';

/**
 * This is a type that defines the alignment of the tab header.
 * 'fill' fills each tab header to fit the entire width.
 * 'start' aligns each tab header to the left.
 * 'end' aligns each tab header to the right.
 * 'center' aligns each tab header to the center.
 */
export type SplTabHeaderAlign = 'fill' | 'start' | 'end' | 'center';

/**
 * This is a container component for displaying tab header and tab content.
 * Because the header is in SplHorizontalSliderComponent, the horizontal slider operates when the number of tabs increases.
 */
@Component({
  selector: 'spl-tab-group',
  templateUrl: './spl-tab-group.component.html',
  host: {
    class: 'spl-tab-group',
  },
  standalone: true,
  imports: [CommonModule, SplHorizontalSliderComponent, SplEffectDirective],
})
export class SplTabGroupComponent implements OnInit, AfterViewInit, OnDestroy {
  /**
   * Sets the alignment of the tab header.
   * The default is 'fill'.
   */
  @Input() headerAlign: SplTabHeaderAlign = 'fill';

  /**
   * This is an emitter that emits the index of the currently activated tab.
   * Emitted whenever the scroll of the body element ends.
   */
  @Output() activeIndexChange = new EventEmitter<number>();

  /** ElementRef for the body area element of the tab group. */
  @ViewChild('tabBody', { read: ElementRef }) tabBodyRef!: ElementRef<HTMLElement>;

  /** ElementRef for the wrapper element wrapping each tab item in the body area. */
  @ViewChildren('tabWrapper', { read: ElementRef }) tabWrapperQueryList!: QueryList<ElementRef<HTMLElement>>;

  /** QueryList for SplTabComponent used as content. */
  @ContentChildren(SplTabComponent, { descendants: true }) splTabQueryList!: QueryList<SplTabComponent>;

  /** Logger for SplTabGroupComponent. */
  private readonly _logger = new SplLogger('SplTabGroupComponent');

  /**
   * IntersectionObserver to detect intersection of each tab wrapper element.
   * Whenever a tab wrapper element is intersecting, activeIndex is changed to the index of the corresponding element.
   */
  private _intersectionObserver?: IntersectionObserver;

  /**
   * When the intersection of TabBody changes due to IntersectionObserver, intersectedIndex is updated.
   * At this time, if the value of preventUpdatingIndexByScrolling is true, the highlight of the tab header changes only according to the value of activeIndex.
   * If the value of preventUpdatingIndexByScrolling is false, the highlight of the tab header changes according to the value of intersectedIndex.
   */
  private _preventUpdatingIndexByScrolling = false;

  /** Index of the currently active tab detected according to IntersectionObserver. */
  private _intersectedIndex = 0;

  constructor(@Inject(PLATFORM_ID) private _platformId: Object) {}

  /** Index of the currently active tab. */
  private _activeIndex = 0;

  /** Returns the index of the currently active tab. */
  get activeIndex(): number {
    return this._activeIndex;
  }

  /**
   * Sets the active tab index.
   * When setting an index, if the view has been initialized, scroll to the tab item at that index.
   * If not, update the activeIndex and then scroll to the active index in ngAfterViewInit().
   * @param value - Index to set.
   */
  @Input()
  set activeIndex(value: NumberLike) {
    const activeIndex = convertNumberLike(value);

    this._logger.debug('ActiveIndex is updated', activeIndex);

    this._activeIndex = activeIndex;
    this.scrollToContentByIndex(activeIndex);
  }

  /** Value for whether to execute tab changes immediately. */
  private _instant = false;

  /** Returns whether to execute tab change immediately. */
  @Input()
  get instant(): boolean {
    return this._instant;
  }

  /**
   * Set whether to execute tab changes immediately.
   * @param value - Value for whether to execute tab changes immediately.
   */
  set instant(value: BooleanAttribute) {
    this._instant = convertBooleanAttribute(value);
  }

  get highlightedIndex(): number {
    return this._preventUpdatingIndexByScrolling ? this.activeIndex : this._intersectedIndex;
  }

  ngOnInit() {
    this._intersectedIndex = this.activeIndex;
  }

  ngAfterViewInit() {
    this._logger.debug('ActiveIndex after initialized', this.activeIndex);

    if (isPlatformBrowser(this._platformId)) {
      this._intersectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this._intersectedIndex = this.getActiveIndexByTarget(entry.target);
              this._logger.debug('Intersected index', this._intersectedIndex);
            }
          });
        },
        {
          threshold: 0.5,
        },
      );

      this.tabWrapperQueryList.forEach((tabWrapperRef) => {
        this._intersectionObserver?.observe(tabWrapperRef.nativeElement);
      });

      this.scrollToContentByIndex(this.activeIndex, true);
    }
  }

  ngOnDestroy() {
    this._intersectionObserver?.disconnect();
  }

  /**
   * Scrolls to the tab item of the given index.
   * @param index - Index of the tab item.
   * @param instant - If true, moves to the tab item immediately without smooth scrolling.
   *  The default value uses the value of the instant getter.
   */
  scrollToContentByIndex(index: number, instant = this.instant): void {
    const { tabBodyRef } = this;

    this._logger.debug('Scroll to content by index', index);

    const activeContentRef = this.tabWrapperQueryList?.get(index);

    if (activeContentRef && tabBodyRef) {
      this._logger.debug('Scroll to content by index with instant', instant);

      // To keep the highlight even if the intersectedIndex is updated while the scroll animation is running.
      this._preventUpdatingIndexByScrolling = !instant;

      const tabBody = tabBodyRef.nativeElement;
      const activeContent = activeContentRef.nativeElement;
      const activeContentDomRect = activeContent.getBoundingClientRect();
      const tabBodyDomRect = tabBody.getBoundingClientRect();

      this.tabBodyRef.nativeElement.scrollTo({
        left: activeContentDomRect.left - tabBodyDomRect.left + tabBody.scrollLeft,
        behavior: instant ? 'instant' : 'smooth',
      });

      // When instant is true, the scrollend event is not triggered,
      // so the onScrollEnd() method should be called immediately.
      if (instant) {
        this.onScrollEnd();
      }
    }
  }

  /**
   * When the tab button is clicked, activeIndex is updated.
   * @param index - Index of the clicked tab button.
   */
  onTabButtonClick(index: number): void {
    this._logger.debug('Tab button is clicked', index);
    this.activeIndex = index;
  }

  /**
   * Finds the index of the activated tab item using the given target element and updates activeIndex.
   * @param target - The target element should be one of the tab wrapper elements.
   */
  getActiveIndexByTarget(target: Element): number {
    let activeIndex = -1;

    if (this.tabBodyRef && this.tabWrapperQueryList) {
      this.tabWrapperQueryList.find((tabWrapperRef, index) => {
        if (tabWrapperRef.nativeElement === target) {
          activeIndex = index;
          return true;
        }

        return false;
      });
    }

    return activeIndex;
  }

  /** Listen for the scrollend event in the tab body area and emit an activeIndexChange emitter. */
  onScrollEnd(): void {
    this._logger.debug('Intersected index after scroll ended', this._intersectedIndex);
    this._logger.debug('Active index after scroll ended', this._activeIndex);

    this._preventUpdatingIndexByScrolling = false;
    this._activeIndex = this._intersectedIndex;
    this.activeIndexChange.emit(this.activeIndex);
  }
}
