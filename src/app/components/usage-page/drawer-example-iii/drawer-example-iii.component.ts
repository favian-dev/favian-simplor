import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplDrawerService, SplStrokeButtonDirective } from '@favian/simplor';
import { TestDrawerIiiComponent } from './test-drawer-iii/test-drawer-iii.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-drawer-example-iii',
  standalone: true,
  imports: [CommonModule, SplStrokeButtonDirective, FormsModule],
  templateUrl: './drawer-example-iii.component.html',
  styleUrls: ['./drawer-example-iii.component.scss'],
})
export class DrawerExampleIiiComponent {
  data = 'Hello World';

  constructor(private _drawerService: SplDrawerService) {}

  openDrawer(): void {
    this._drawerService.open(TestDrawerIiiComponent, {
      startingDirection: 'bottom',
      data: this.data,
    });
  }
}
