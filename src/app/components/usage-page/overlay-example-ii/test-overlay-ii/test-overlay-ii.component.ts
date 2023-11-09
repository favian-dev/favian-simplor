import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplOverlayRef, SplStrokeButtonDirective } from '@favian/simplor';

@Component({
  selector: 'app-test-overlay-ii',
  standalone: true,
  imports: [CommonModule, SplStrokeButtonDirective],
  templateUrl: './test-overlay-ii.component.html',
  styleUrls: ['./test-overlay-ii.component.scss'],
})
export class TestOverlayIiComponent {
  constructor(@Inject(SplOverlayRef) private _overlayRef: SplOverlayRef) {}

  close(): void {
    this._overlayRef.close();
  }
}
