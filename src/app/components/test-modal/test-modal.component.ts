import { Component, Inject } from '@angular/core';
import {
  SplMessageService,
  SplModalActionDirective,
  SplModalActionsComponent,
  SplModalContentComponent,
  SplModalHeaderComponent,
  SplModalRef,
  SplModalService,
  SplOptionComponent,
  SplSelectComponent,
  SplStrokeButtonDirective,
} from '@favian/simplor';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-modal',
  templateUrl: './test-modal.component.html',
  styleUrls: ['./test-modal.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    SplModalContentComponent,
    SplModalHeaderComponent,
    SplSelectComponent,
    SplOptionComponent,
    SplModalActionsComponent,
    SplStrokeButtonDirective,
    SplModalActionDirective,
  ],
})
export class TestModalComponent {
  options = ['Banana', 'Orange', 'Apple', 'Kiwi', 'Mango', 'Grape', 'Strawberry'];

  constructor(
    @Inject(SplModalRef) private _modalRef: SplModalRef,
    private _messageService: SplMessageService,
    private _modalService: SplModalService,
  ) {}

  close(): void {
    this._modalRef.close();
  }

  openTestModal(): void {
    this._modalService.open(TestModalComponent, {
      multi: true,
    });
  }

  openMessage(): void {
    this._messageService.open('It is a message');
  }
}
