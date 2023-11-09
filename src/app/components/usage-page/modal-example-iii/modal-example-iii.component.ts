import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplModalService, SplStrokeButtonDirective } from '@favian/simplor';
import { FormsModule } from '@angular/forms';
import { TestModalIiiComponent } from './test-modal-iii/test-modal-iii.component';

@Component({
  selector: 'app-modal-example-iii',
  standalone: true,
  imports: [CommonModule, FormsModule, SplStrokeButtonDirective],
  templateUrl: './modal-example-iii.component.html',
  styleUrls: ['./modal-example-iii.component.scss'],
})
export class ModalExampleIiiComponent {
  data = 'Hello World';

  constructor(private _modalService: SplModalService) {}

  openModal(): void {
    this._modalService.open(TestModalIiiComponent, {
      data: this.data,
    });
  }
}
