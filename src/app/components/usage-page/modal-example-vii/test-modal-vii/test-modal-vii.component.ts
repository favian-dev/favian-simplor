import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SplModalActionDirective,
  SplModalActionsComponent,
  SplModalContentComponent,
  SplModalHeaderComponent,
  SplModalRef,
  SplStrokeButtonDirective,
} from '@favian/simplor';

@Component({
  selector: 'app-test-modal-vii',
  standalone: true,
  imports: [
    CommonModule,
    SplModalHeaderComponent,
    SplModalContentComponent,
    SplModalActionsComponent,
    SplModalActionDirective,
    SplStrokeButtonDirective,
  ],
  templateUrl: './test-modal-vii.component.html',
  styleUrls: ['./test-modal-vii.component.scss'],
})
export class TestModalViiComponent {
  constructor(@Inject(SplModalRef) private _modalRef: SplModalRef) {}

  close(): void {
    this._modalRef.close();
  }
}
