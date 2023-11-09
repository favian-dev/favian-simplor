import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-overlay-vi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-overlay-vi.component.html',
  styleUrls: ['./test-overlay-vi.component.scss'],
})
export class TestOverlayViComponent {
  constructor(@Inject('PROVIDE_OVERLAY_DATA') public providedData: string) {}
}
