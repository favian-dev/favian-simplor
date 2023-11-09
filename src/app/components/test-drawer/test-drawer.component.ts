import { Component, Inject } from '@angular/core';
import {
  SplDrawerRef,
  SplMessageService,
  SplModalActionDirective,
  SplModalActionsComponent,
  SplModalContentComponent,
  SplModalHeaderComponent,
  SplModalService,
  SplOptionComponent,
  SplSelectComponent,
  SplStrokeButtonDirective,
} from '@favian/simplor';
import { TestModalComponent } from '../test-modal/test-modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-drawer',
  templateUrl: './test-drawer.component.html',
  styleUrls: ['./test-drawer.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    SplModalHeaderComponent,
    SplModalContentComponent,
    SplSelectComponent,
    SplOptionComponent,
    SplModalActionsComponent,
    SplStrokeButtonDirective,
    SplModalActionDirective,
  ],
})
export class TestDrawerComponent {
  options = ['Banana', 'Orange', 'Apple', 'Kiwi', 'Mango', 'Grape', 'Strawberry'];

  constructor(
    @Inject(SplDrawerRef) private _drawerRef: SplDrawerRef,
    private _messageService: SplMessageService,
    private _modalService: SplModalService,
  ) {}

  close(): void {
    this._drawerRef.close();
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
