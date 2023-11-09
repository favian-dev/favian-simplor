import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplModalRef, SplStrokeButtonDirective } from '@favian/simplor';

@Component({
  selector: 'app-test-modal-ii',
  standalone: true,
  imports: [CommonModule, SplStrokeButtonDirective],
  templateUrl: './test-modal-ii.component.html',
  styleUrls: ['./test-modal-ii.component.scss'],
  host: {
    class: 'spl-p-24',
  },
})
export class TestModalIiComponent {
  constructor(@Inject(SplModalRef) private _modalRef: SplModalRef) {}

  close(): void {
    this._modalRef.close();
  }
}
