import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplIconComponent } from '@favian/simplor';

@Component({
  selector: 'app-icon-example-i',
  standalone: true,
  imports: [CommonModule, SplIconComponent],
  templateUrl: './icon-example-i.component.html',
  styleUrls: ['./icon-example-i.component.scss'],
})
export class IconExampleIComponent {}
