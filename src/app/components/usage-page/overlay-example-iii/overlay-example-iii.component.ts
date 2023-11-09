import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplOverlayService, SplStrokeButtonDirective } from '@favian/simplor';
import { TestOverlayIiiComponent } from './test-overlay-iii/test-overlay-iii.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-overlay-example-iii',
  standalone: true,
  imports: [CommonModule, SplStrokeButtonDirective, FormsModule],
  templateUrl: './overlay-example-iii.component.html',
  styleUrls: ['./overlay-example-iii.component.scss'],
})
export class OverlayExampleIiiComponent {
  data = 'Hello World';

  constructor(private _overlayService: SplOverlayService) {}

  openOverlay(): void {
    this._overlayService.open(TestOverlayIiiComponent, {
      data: this.data,
    });
  }
}
