import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SPL_MODAL_DATA } from '@favian/simplor';

@Component({
  selector: 'app-test-modal-iii',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-modal-iii.component.html',
  styleUrls: ['./test-modal-iii.component.scss'],
  host: {
    class: 'spl-p-24',
  },
})
export class TestModalIiiComponent {
  constructor(@Inject(SPL_MODAL_DATA) public data: string) {}
}
