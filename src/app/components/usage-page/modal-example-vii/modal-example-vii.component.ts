import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplModalService, SplStrokeButtonDirective } from '@favian/simplor';
import { TestModalViiComponent } from './test-modal-vii/test-modal-vii.component';

@Component({
  selector: 'app-modal-example-vii',
  standalone: true,
  imports: [CommonModule, SplStrokeButtonDirective],
  templateUrl: './modal-example-vii.component.html',
  styleUrls: ['./modal-example-vii.component.scss'],
})
export class ModalExampleViiComponent {
  constructor(private _modalService: SplModalService) {}

  openModal(): void {
    this._modalService.open(TestModalViiComponent);
  }
}
