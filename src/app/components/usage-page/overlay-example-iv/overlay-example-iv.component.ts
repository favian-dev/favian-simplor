import { Component, DestroyRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplOverlayRef, SplOverlayService, SplStrokeButtonDirective } from '@favian/simplor';
import { TestOverlayIvComponent } from './test-overlay-iv/test-overlay-iv.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-overlay-example-iv',
  standalone: true,
  imports: [CommonModule, SplStrokeButtonDirective],
  templateUrl: './overlay-example-iv.component.html',
  styleUrls: ['./overlay-example-iv.component.scss'],
})
export class OverlayExampleIvComponent {
  result?: string;

  private _overlayRef?: SplOverlayRef;

  constructor(
    private _overlayService: SplOverlayService,
    private _destroyRef: DestroyRef,
  ) {}

  openOverlay(): void {
    this._overlayRef = this._overlayService.open(TestOverlayIvComponent);

    this._overlayRef.onClose.pipe(takeUntilDestroyed(this._destroyRef)).subscribe((result) => {
      this.result = result;

      delete this._overlayRef;
    });
  }
}
