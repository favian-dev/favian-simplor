import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplDrawerService, SplStrokeButtonDirective } from '@favian/simplor';
import { TestDrawerIiComponent } from './test-drawer-ii/test-drawer-ii.component';

@Component({
  selector: 'app-drawer-example-ii',
  standalone: true,
  imports: [CommonModule, SplStrokeButtonDirective],
  templateUrl: './drawer-example-ii.component.html',
  styleUrls: ['./drawer-example-ii.component.scss'],
})
export class DrawerExampleIiComponent {
  constructor(private _drawerService: SplDrawerService) {}

  openDrawer(): void {
    this._drawerService.open(TestDrawerIiComponent, {
      startingDirection: 'bottom',
    });
  }
}
