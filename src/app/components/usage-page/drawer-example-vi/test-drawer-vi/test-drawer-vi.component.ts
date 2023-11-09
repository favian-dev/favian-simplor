import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-drawer-vi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-drawer-vi.component.html',
  styleUrls: ['./test-drawer-vi.component.scss'],
})
export class TestDrawerViComponent {
  constructor(@Inject('PROVIDE_DRAWER_DATA') public providedData: string) {}
}
