import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplDrawerRef, SplStrokeButtonDirective } from '@favian/simplor';

@Component({
  selector: 'app-test-drawer-ii',
  standalone: true,
  imports: [CommonModule, SplStrokeButtonDirective],
  templateUrl: './test-drawer-ii.component.html',
  styleUrls: ['./test-drawer-ii.component.scss'],
  host: {
    class: 'spl-p-24',
  },
})
export class TestDrawerIiComponent {
  constructor(@Inject(SplDrawerRef) private _drawerRef: SplDrawerRef) {}

  close(): void {
    this._drawerRef.close();
  }
}
