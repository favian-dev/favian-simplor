import { ElementRef } from '@angular/core';

/**
 * Interface for ElementRef of host element.
 * ElementType is the type of the host element.
 */
export interface SplElementAccessor<ElementType extends HTMLElement> {
  /** ElementRef of the host element. */
  elementRef: ElementRef<ElementType>;
}
