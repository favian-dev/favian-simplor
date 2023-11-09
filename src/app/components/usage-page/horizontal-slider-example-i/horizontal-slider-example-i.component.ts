import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplHorizontalSliderComponent } from '@favian/simplor';

@Component({
  selector: 'app-horizontal-slider-example-i',
  standalone: true,
  imports: [CommonModule, SplHorizontalSliderComponent],
  templateUrl: './horizontal-slider-example-i.component.html',
  styleUrls: ['./horizontal-slider-example-i.component.scss'],
})
export class HorizontalSliderExampleIComponent {
  items = Array(100);
}
