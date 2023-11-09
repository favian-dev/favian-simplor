import { Injectable } from '@angular/core';
import { SplLogger } from '../utils/logger.util';

/**
 * A type of definition of callback function to call when position has changed.
 * @param rect - DOMRect of observed element which position is changed.
 */
export type SplPositionTrackerFn = (rect: DOMRect) => void;

/**
 * A service detects position of elements.
 * Uses requestAnimationFrame internally and detects position of component in real-time.
 * When change has detected, call set SplPositionTrackerFn.
 * To use the only global requestAnimationFrame, it is provided in root scope.
 */
@Injectable({
  providedIn: 'root',
})
export class SplPositionTrackerService {
  /** Logger for SplPositionTrackerService. */
  private readonly _logger = new SplLogger('SplPositionTrackerService');

  /**
   * Map of elements tracked by this service.
   * Key is each element object.
   */
  private _trackedElements = new Map<HTMLElement, SplPositionTrackerFn>();

  /**
   * Map of DOMRect for each tracked element.
   * It's updated on every requestAnimationFrame.
   */
  private _trackedPositions = new Map<HTMLElement, DOMRect>();

  /** State of whether requestAnimationFrame is running. */
  private _animating = false;

  /** Frame value for requestAnimationFrame. */
  private _frame: any;

  /**
   * Observe a new element.
   * It starts requestAnimationFrame when not running animation.
   * @param element - Element to observe.
   * @param onChange - Callback function to be called when change has detected.
   */
  observe(element: HTMLElement, onChange: SplPositionTrackerFn): void {
    this._logger.debug('Observe element position', element.tagName);

    this._trackedElements.set(element, onChange);
    this._trackedPositions.set(element, element.getBoundingClientRect());

    if (!this._animating) {
      this._animating = true;
      this._animate();
    }
  }

  /**
   * Unobserve given element.
   * When there are no observing element in tracked elements, it stops animation.
   * @param element - Element to unobserve.
   */
  unobserve(element: HTMLElement): void {
    this._logger.debug('Unobserve element position', element.tagName);

    this._trackedElements.delete(element);
    this._trackedPositions.delete(element);

    if (this._trackedElements.size === 0) {
      this._animating = false;
      cancelAnimationFrame(this._frame);
    }
  }

  /**
   * Detect changes of tracked elements.
   * If current DOMRect of each element is difference with previous tracked DOMRect, SplPositionTrackerFn will be called.
   */
  private _detectChanges(): void {
    this._trackedPositions.forEach((previousDomRect, element) => {
      const currentDomRect = element.getBoundingClientRect();

      if (JSON.stringify(currentDomRect.toJSON()) !== JSON.stringify(previousDomRect.toJSON())) {
        this._logger.debug('Position has changed', element.tagName);

        const onChange = this._trackedElements.get(element);

        if (onChange) {
          onChange(currentDomRect);
        }

        this._trackedPositions.set(element, currentDomRect);
      }
    });
  }

  /**
   * Starts requestAnimationFrame and detects changes.
   * It does nothing when animating is false.
   */
  private _animate(): void {
    if (this._animating) {
      this._detectChanges();
      this._frame = requestAnimationFrame(() => this._animate());
    }
  }
}
