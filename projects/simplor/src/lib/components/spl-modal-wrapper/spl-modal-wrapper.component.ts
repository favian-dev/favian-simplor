import { Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplFadeInSlideUpAnimator } from '../../abstracts/spl-fade-in-slide-up-animator';

/**
 * This is a wrapper for Modal Component.
 * All modals are created within the wrapper and have a consistent shape.
 */
@Component({
  selector: 'spl-modal-wrapper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spl-modal-wrapper.component.html',
  host: {
    class: 'spl-modal-wrapper',
  },
})
export class SplModalWrapperComponent extends SplFadeInSlideUpAnimator {
  /** ViewContainerRef of the container where the modal component will be rendered. */
  @ViewChild('container', { read: ViewContainerRef }) viewContainerRef!: ViewContainerRef;

  /** ElementRef for a modal container. */
  @ViewChild('modalContainer', { read: ElementRef }) modalContainerRef!: ElementRef<HTMLElement>;
}
