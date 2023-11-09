import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplDrawerService, SplStrokeButtonDirective } from '@favian/simplor';
import { TestDrawerViComponent } from './test-drawer-vi/test-drawer-vi.component';

@Component({
  selector: 'app-drawer-example-vi',
  standalone: true,
  imports: [CommonModule, SplStrokeButtonDirective],
  templateUrl: './drawer-example-vi.component.html',
  styleUrls: ['./drawer-example-vi.component.scss'],
})
export class DrawerExampleViComponent {
  constructor(private _drawerService: SplDrawerService) {}

  openDrawer(): void {
    this._drawerService.open(TestDrawerViComponent, {
      startingDirection: 'bottom',
      providers: [
        {
          provide: 'PROVIDE_DRAWER_DATA', // Use any injection token.
          useValue: 'Provided data',
        },
      ],
    });
  }
}
