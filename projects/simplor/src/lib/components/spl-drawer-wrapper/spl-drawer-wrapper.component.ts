import { Component, ElementRef, HostBinding, Inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FADE_IN_SLIDE_IN,
  FADE_IN_SLIDE_IN_BOTTOM_SHOW,
  FADE_IN_SLIDE_IN_LEFT_SHOW,
  FADE_IN_SLIDE_IN_RIGHT_SHOW,
  FADE_IN_SLIDE_IN_TOP_SHOW,
  FADE_IN_SLIDE_IN_VOID,
  fadeInSlideIn,
} from '../../animations/fade-in-slide-in';
import { SPL_DRAWER_STARTING_DIRECTION, SplDrawerStartingDirection } from '../../services/spl-drawer.service';

/**
 * This is a wrapper for Drawer Component.
 * All drawers are created within the wrapper and have a consistent shape.
 * The wrapper can display animations that open in different directions depending on the provided SplDrawerStartingSide.
 */
@Component({
  selector: 'spl-drawer-wrapper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spl-drawer-wrapper.component.html',
  host: {
    class: 'spl-drawer-wrapper',
  },
  animations: [fadeInSlideIn(32)],
})
export class SplDrawerWrapperComponent implements OnInit {
  /** ViewContainerRef of the container where the drawer component will be rendered. */
  @ViewChild('container', { read: ViewContainerRef }) viewContainerRef!: ViewContainerRef;

  /** ElementRef for a drawer container. */
  @ViewChild('drawerContainer', { read: ElementRef }) drawerContainer!: ElementRef<HTMLElement>;

  /**
   * This is the 'fade-in-slide-in' animation state.
   * The default value is FADE_IN_SLIDE_IN_VOID, and has different values depending on the provided SplDrawerStartingSide.
   */
  @HostBinding(`@${FADE_IN_SLIDE_IN}`) fadeInSlideInState = FADE_IN_SLIDE_IN_VOID;

  /** Bind the provided SplDrawerStartingSide value to the 'spl-drawer-starting-side' attribute. */
  @HostBinding('attr.spl-drawer-starting-side') startingSide = this._startingSide;

  constructor(@Inject(SPL_DRAWER_STARTING_DIRECTION) private _startingSide: SplDrawerStartingDirection) {}

  ngOnInit() {
    switch (this._startingSide) {
      case 'left': {
        this.fadeInSlideInState = FADE_IN_SLIDE_IN_LEFT_SHOW;
        break;
      }

      case 'right': {
        this.fadeInSlideInState = FADE_IN_SLIDE_IN_RIGHT_SHOW;
        break;
      }

      case 'top': {
        this.fadeInSlideInState = FADE_IN_SLIDE_IN_TOP_SHOW;
        break;
      }

      case 'bottom': {
        this.fadeInSlideInState = FADE_IN_SLIDE_IN_BOTTOM_SHOW;
        break;
      }
    }
  }
}
