import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplModalService, SplStrokeButtonDirective } from '@favian/simplor';
import { TestModalViComponent } from './test-modal-vi/test-modal-vi.component';

@Component({
  selector: 'app-modal-example-vi',
  standalone: true,
  imports: [CommonModule, SplStrokeButtonDirective],
  templateUrl: './modal-example-vi.component.html',
  styleUrls: ['./modal-example-vi.component.scss'],
})
export class ModalExampleViComponent {
  constructor(private _modalService: SplModalService) {}

  openModal(): void {
    this._modalService.open(TestModalViComponent, {
      providers: [
        {
          provide: 'PROVIDE_MODAL_DATA', // Use any injection token.
          useValue: 'Provided data',
        },
      ],
    });
  }
}
