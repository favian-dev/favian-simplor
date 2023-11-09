import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * This is an outlet component that can render various types of overlays.
 * When SplOverlayService is injected, it is automatically created under the body, and all overlays are created within it.
 * There can only be one in the entire app.
 */
@Component({
  selector: 'spl-overlay-outlet',
  templateUrl: './spl-overlay-outlet.component.html',
  host: {
    class: 'spl-overlay-outlet',
  },
  standalone: true,
  imports: [CommonModule],
})
export class SplOverlayOutletComponent {
  /** The ViewContainerRef that will render the overlay. */
  @ViewChild('container', { read: ViewContainerRef }) viewContainerRef!: ViewContainerRef;
}
