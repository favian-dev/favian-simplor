import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplDrawerService, SplDrawerStartingDirection, SplStrokeButtonDirective } from '@favian/simplor';
import { TestDrawerIComponent } from './test-drawer-i/test-drawer-i.component';

@Component({
  selector: 'app-drawer-example-i',
  standalone: true,
  imports: [CommonModule, SplStrokeButtonDirective],
  templateUrl: './drawer-example-i.component.html',
  styleUrls: ['./drawer-example-i.component.scss'],
  host: {
    class: 'spl-flex spl-column spl-items-start',
  },
})
export class DrawerExampleIComponent {
  constructor(private _drawerService: SplDrawerService) {}

  openDrawer(direction: SplDrawerStartingDirection): void {
    this._drawerService.open(TestDrawerIComponent, {
      startingDirection: direction,
    });
  }
}
