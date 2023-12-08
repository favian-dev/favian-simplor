import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createSplIconProvider, SplIconComponent } from '@favian/simplor';

@Component({
  selector: 'app-icon-example-iii',
  standalone: true,
  imports: [CommonModule, SplIconComponent],
  templateUrl: './icon-example-iii.component.html',
  styleUrl: './icon-example-iii.component.scss',
  providers: [
    createSplIconProvider({
      weight: '100',
      fill: false,
    }),
  ],
})
export class IconExampleIiiComponent {}
