import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SPL_DRAWER_DATA } from '@favian/simplor';

@Component({
  selector: 'app-test-drawer-iii',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-drawer-iii.component.html',
  styleUrls: ['./test-drawer-iii.component.scss'],
  host: {
    class: 'spl-p-24',
  },
})
export class TestDrawerIiiComponent {
  constructor(@Inject(SPL_DRAWER_DATA) public data: string) {}
}
