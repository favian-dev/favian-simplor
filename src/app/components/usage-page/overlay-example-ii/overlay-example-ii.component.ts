import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplOverlayService, SplStrokeButtonDirective } from '@favian/simplor';
import { TestOverlayIiComponent } from './test-overlay-ii/test-overlay-ii.component';

@Component({
  selector: 'app-overlay-example-ii',
  standalone: true,
  imports: [CommonModule, SplStrokeButtonDirective],
  templateUrl: './overlay-example-ii.component.html',
  styleUrls: ['./overlay-example-ii.component.scss'],
})
export class OverlayExampleIiComponent {
  constructor(private _overlayService: SplOverlayService) {}

  openOverlay(): void {
    this._overlayService.open(TestOverlayIiComponent);
  }
}
