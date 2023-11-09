import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplDrawerService, SplStrokeButtonDirective } from '@favian/simplor';
import { TestDrawerVComponent } from './test-drawer-v/test-drawer-v.component';

@Component({
  selector: 'app-drawer-example-v',
  standalone: true,
  imports: [CommonModule, SplStrokeButtonDirective],
  templateUrl: './drawer-example-v.component.html',
  styleUrls: ['./drawer-example-v.component.scss'],
})
export class DrawerExampleVComponent {
  constructor(private _drawerService: SplDrawerService) {}

  openDrawer(): void {
    this._drawerService.open(TestDrawerVComponent, {
      startingDirection: 'bottom',
      classes: ['test-drawer'],
      styles: {
        display: 'block',
        height: '200px',
        width: '400px',
      },
    });
  }
}
