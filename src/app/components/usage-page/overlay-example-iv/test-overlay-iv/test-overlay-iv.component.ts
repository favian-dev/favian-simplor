import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplOverlayRef, SplStrokeButtonDirective } from '@favian/simplor';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-overlay-iv',
  standalone: true,
  imports: [CommonModule, SplStrokeButtonDirective, FormsModule],
  templateUrl: './test-overlay-iv.component.html',
  styleUrls: ['./test-overlay-iv.component.scss'],
  host: {
    class: 'spl-flex spl-column spl-items-stretch spl-bg-background-100 spl-p-24 spl-shadow',
  },
})
export class TestOverlayIvComponent {
  result = '';

  constructor(@Inject(SplOverlayRef) private _overlayRef: SplOverlayRef) {}

  closeWithResult(): void {
    this._overlayRef.close(this.result);
  }
}
