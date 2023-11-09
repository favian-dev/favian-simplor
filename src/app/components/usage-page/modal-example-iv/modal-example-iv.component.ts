import { Component, DestroyRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplModalRef, SplModalService, SplStrokeButtonDirective } from '@favian/simplor';
import { TestModalIvComponent } from './test-modal-iv/test-modal-iv.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-modal-example-iv',
  standalone: true,
  imports: [CommonModule, SplStrokeButtonDirective],
  templateUrl: './modal-example-iv.component.html',
  styleUrls: ['./modal-example-iv.component.scss'],
})
export class ModalExampleIvComponent {
  result?: string;

  private _modalRef?: SplModalRef;

  constructor(
    private _modalService: SplModalService,
    private _destroyRef: DestroyRef,
  ) {}

  openModal(): void {
    this._modalRef = this._modalService.open(TestModalIvComponent);

    this._modalRef.onClose.pipe(takeUntilDestroyed(this._destroyRef)).subscribe((result) => {
      this.result = result;

      delete this._modalRef;
    });
  }
}
