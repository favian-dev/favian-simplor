import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplOverlayService, SplStrokeButtonDirective } from '@favian/simplor';
import { TestOverlayViComponent } from './test-overlay-vi/test-overlay-vi.component';

@Component({
  selector: 'app-overlay-example-vi',
  standalone: true,
  imports: [CommonModule, SplStrokeButtonDirective],
  templateUrl: './overlay-example-vi.component.html',
  styleUrls: ['./overlay-example-vi.component.scss'],
})
export class OverlayExampleViComponent {
  constructor(private _overlayService: SplOverlayService) {}

  openOverlay(): void {
    this._overlayService.open(TestOverlayViComponent, {
      providers: [
        {
          provide: 'PROVIDE_OVERLAY_DATA', // Use any injection token.
          useValue: 'Provided data',
        },
      ],
    });
  }
}
