import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplHorizontalSliderComponent } from '@favian/simplor';

@Component({
  selector: 'app-horizontal-slider-example-ii',
  standalone: true,
  imports: [CommonModule, SplHorizontalSliderComponent],
  templateUrl: './horizontal-slider-example-ii.component.html',
  styleUrls: ['./horizontal-slider-example-ii.component.scss'],
})
export class HorizontalSliderExampleIiComponent {
  items = Array(100);

  scrollLeft = 0;
  scrolling = false;

  onScroll(event: Event): void {
    this.scrolling = true;
    this.scrollLeft = (event.target as HTMLElement).scrollLeft;
  }

  onScrollEnd(event: Event): void {
    this.scrolling = false;
    this.scrollLeft = (event.target as HTMLElement).scrollLeft;
  }
}
