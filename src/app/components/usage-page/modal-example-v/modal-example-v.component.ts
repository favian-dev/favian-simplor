import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplModalService, SplStrokeButtonDirective } from '@favian/simplor';
import { TestModalVComponent } from './test-modal-v/test-modal-v.component';

@Component({
  selector: 'app-modal-example-v',
  standalone: true,
  imports: [CommonModule, SplStrokeButtonDirective],
  templateUrl: './modal-example-v.component.html',
  styleUrls: ['./modal-example-v.component.scss'],
})
export class ModalExampleVComponent {
  constructor(private _modalService: SplModalService) {}

  openModal(): void {
    this._modalService.open(TestModalVComponent, {
      classes: ['test-modal'],
      styles: {
        display: 'block',
        height: '200px',
        width: '400px',
      },
    });
  }
}
