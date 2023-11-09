import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplModalService, SplStrokeButtonDirective } from '@favian/simplor';
import { TestModalIiComponent } from './test-modal-ii/test-modal-ii.component';

@Component({
  selector: 'app-modal-example-ii',
  standalone: true,
  imports: [CommonModule, SplStrokeButtonDirective],
  templateUrl: './modal-example-ii.component.html',
  styleUrls: ['./modal-example-ii.component.scss'],
})
export class ModalExampleIiComponent {
  constructor(private _modalService: SplModalService) {}

  openModal(): void {
    this._modalService.open(TestModalIiComponent);
  }
}
