import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplModalService, SplStrokeButtonDirective } from '@favian/simplor';
import { TestModalIComponent } from './test-modal-i/test-modal-i.component';

@Component({
  selector: 'app-modal-example-i',
  standalone: true,
  imports: [CommonModule, SplStrokeButtonDirective],
  templateUrl: './modal-example-i.component.html',
  styleUrls: ['./modal-example-i.component.scss'],
})
export class ModalExampleIComponent {
  constructor(private _modalService: SplModalService) {}

  openModal(): void {
    this._modalService.open(TestModalIComponent);
  }
}
