import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplModalRef, SplStrokeButtonDirective } from '@favian/simplor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-modal-iv',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, SplStrokeButtonDirective],
  templateUrl: './test-modal-iv.component.html',
  styleUrls: ['./test-modal-iv.component.scss'],
  host: {
    class: 'spl-flex spl-column spl-items-stretch spl-p-24',
  },
})
export class TestModalIvComponent {
  result = '';

  constructor(@Inject(SplModalRef) private _modalRef: SplModalRef) {}

  closeWithResult(): void {
    this._modalRef.close(this.result);
  }
}
