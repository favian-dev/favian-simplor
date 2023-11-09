import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplDrawerRef, SplStrokeButtonDirective } from '@favian/simplor';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-drawer-iv',
  standalone: true,
  imports: [CommonModule, FormsModule, SplStrokeButtonDirective],
  templateUrl: './test-drawer-iv.component.html',
  styleUrls: ['./test-drawer-iv.component.scss'],
  host: {
    class: 'spl-flex spl-column spl-items-stretch spl-p-24',
  },
})
export class TestDrawerIvComponent {
  result = '';

  constructor(@Inject(SplDrawerRef) private _drawerRef: SplDrawerRef) {}

  closeWithResult(): void {
    this._drawerRef.close(this.result);
  }
}
