import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-modal-vi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-modal-vi.component.html',
  styleUrls: ['./test-modal-vi.component.scss'],
  host: {
    class: 'spl-p-24',
  },
})
export class TestModalViComponent {
  constructor(@Inject('PROVIDE_MODAL_DATA') public providedData: string) {}
}
