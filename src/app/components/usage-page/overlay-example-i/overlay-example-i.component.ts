import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplOverlayService, SplStrokeButtonDirective } from '@favian/simplor';
import { TestOverlayIComponent } from './test-overlay-i/test-overlay-i.component';

@Component({
  selector: 'app-overlay-example-i',
  standalone: true,
  imports: [CommonModule, SplStrokeButtonDirective],
  templateUrl: './overlay-example-i.component.html',
  styleUrls: ['./overlay-example-i.component.scss'],
})
export class OverlayExampleIComponent {
  constructor(private _overlayService: SplOverlayService) {}

  openOverlay(): void {
    this._overlayService.open(TestOverlayIComponent);
  }
}
