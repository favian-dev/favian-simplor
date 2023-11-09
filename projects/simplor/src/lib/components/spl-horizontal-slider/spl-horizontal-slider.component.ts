import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  OnDestroy,
  Output,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SplButtonDirective } from '../spl-button/spl-button.directive';
import { SplIconComponent } from '../spl-icon/spl-icon.component';

/**
 * This is a component that creates a horizontally slide-able area.
 * If touch is possible, HTML's default overflow scrollbar is used. If touch is not possible, it provides a control that can slide left and right.
 * When the slide control is clicked, it moves in the corresponding direction by half the width of the area that can be slid.
 */
@Component({
  selector: 'spl-horizontal-slider',
  templateUrl: './spl-horizontal-slider.component.html',
  host: {
    class: 'spl-horizontal-slider',
  },
  standalone: true,
  imports: [CommonModule, SplButtonDirective, SplIconComponent],
})
export class SplHorizontalSliderComponent implements AfterViewInit, OnDestroy {
  /**
   * This is an emitter that emits the scroll event of the slide-able area.
   * This overwrites the default scroll event on the host element.
   */
  @Output('scroll') scrolled = new EventEmitter<Event>();

  /**
   * This is an emitter that emits the scrollend event of the slide-able area.
   * This overwrites the default scrollend event on the host element.
   */
  @Output('scrollend') scrollEnded = new EventEmitter<Event>();

  /** This is an ElementRef of a slide-able area. */
  @ViewChild('scrollContainer', { read: ElementRef }) scrollContainerRef!: ElementRef<HTMLElement>;

  /** This is the state of whether to display the button that can slide to the left. */
  showLeftButton = false;

  /** This is the state of whether to display the button that can slide to the right. */
  showRightButton = false;

  /** Timeout timer for throttling of scroll events. */
  private _scrollDetectTimer: any;

  /**
   * MutationObserver to detect content changes in slide-able area.
   * When a change in content is detected, the scroll area is calculated to determine
   * whether the left and right controls are displayed.
   */
  private _scrollContainerObserver?: MutationObserver;

  constructor(@Inject(PLATFORM_ID) private _platformId: Object) {}

  ngAfterViewInit() {
    this._detectScrollPosition();

    if (isPlatformBrowser(this._platformId)) {
      this._scrollContainerObserver = new MutationObserver(() => {
        this._detectScrollPosition();
      });
    }

    this._scrollContainerObserver?.observe(this.scrollContainerRef.nativeElement, {
      childList: true,
    });
  }

  ngOnDestroy() {
    this._scrollContainerObserver?.disconnect();
    clearTimeout(this._scrollDetectTimer);
  }

  /** Listen to the window's resize event and recalculate the scroll area. */
  @HostListener('window:resize')
  onWindowResize(): void {
    this._detectScrollPosition();
  }

  /**
   * It listens for the scroll event of the slide-able area, emits it to the outside, and then recalculates the scroll area.
   * @param event - Event from scroll event.
   */
  onScroll(event: Event): void {
    this.scrolled.emit(event);
    this._detectScrollPosition();
  }

  /**
   * It listens for the scrollend event of the slide-able area, emits it to the outside, and then recalculates the scroll area.
   * @param event - Event from scrollend event.
   */
  onScrollEnd(event: Event): void {
    this.scrollEnded.emit(event);
    this._detectScrollPosition();
  }

  /** Move the scroll to half of the total width of the slide-able area to the left. */
  toScrollLeft(): void {
    if (this.scrollContainerRef) {
      const scrollContainer = this.scrollContainerRef.nativeElement;

      scrollContainer.scrollTo({
        left: scrollContainer.scrollLeft - scrollContainer.offsetWidth / 2,
        behavior: 'smooth',
      });
    }
  }

  /** Move the scroll to half of the total width of the slide-able area to the right. */
  toScrollRight(): void {
    if (this.scrollContainerRef) {
      const scrollContainer = this.scrollContainerRef.nativeElement;

      scrollContainer.scrollTo({
        left: scrollContainer.scrollLeft + scrollContainer.offsetWidth / 2,
        behavior: 'smooth',
      });
    }
  }

  /** Detects scroll changes and updates the visibility of the control buttons. */
  private _detectScrollPosition(): void {
    if (!this.scrollContainerRef || this._scrollDetectTimer) {
      return;
    }

    this._scrollDetectTimer = setTimeout(() => {
      const { scrollLeft, scrollWidth, offsetWidth } = this.scrollContainerRef.nativeElement;

      this.showLeftButton = scrollLeft !== 0;
      this.showRightButton = scrollLeft + offsetWidth < scrollWidth;

      clearTimeout(this._scrollDetectTimer);
      delete this._scrollDetectTimer;
    });
  }
}
