import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SPL_OVERLAY_DATA } from '@favian/simplor';

@Component({
  selector: 'app-test-overlay-iii',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-overlay-iii.component.html',
  styleUrls: ['./test-overlay-iii.component.scss'],
})
export class TestOverlayIiiComponent {
  constructor(@Inject(SPL_OVERLAY_DATA) public data: string) {}
}
