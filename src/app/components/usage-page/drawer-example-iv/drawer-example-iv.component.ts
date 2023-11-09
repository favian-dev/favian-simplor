import { Component, DestroyRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplDrawerRef, SplDrawerService, SplStrokeButtonDirective } from '@favian/simplor';
import { TestDrawerIvComponent } from './test-drawer-iv/test-drawer-iv.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-drawer-example-iv',
  standalone: true,
  imports: [CommonModule, SplStrokeButtonDirective],
  templateUrl: './drawer-example-iv.component.html',
  styleUrls: ['./drawer-example-iv.component.scss'],
})
export class DrawerExampleIvComponent {
  result?: string;

  private _drawerRef?: SplDrawerRef;

  constructor(
    private _drawerService: SplDrawerService,
    private _destroyRef: DestroyRef,
  ) {}

  openDrawer(): void {
    this._drawerRef = this._drawerService.open(TestDrawerIvComponent, {
      startingDirection: 'bottom',
    });

    this._drawerRef.onClose.pipe(takeUntilDestroyed(this._destroyRef)).subscribe((result) => {
      this.result = result;

      delete this._drawerRef;
    });
  }
}
