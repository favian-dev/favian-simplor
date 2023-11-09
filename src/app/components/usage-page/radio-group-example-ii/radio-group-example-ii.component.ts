import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplRadioButtonComponent, SplRadioGroupComponent } from '@favian/simplor';

@Component({
  selector: 'app-radio-group-example-ii',
  standalone: true,
  imports: [CommonModule, SplRadioButtonComponent, SplRadioGroupComponent],
  templateUrl: './radio-group-example-ii.component.html',
  styleUrls: ['./radio-group-example-ii.component.scss'],
  host: {
    class: 'spl-flex spl-column spl-items-start',
  },
})
export class RadioGroupExampleIiComponent {
  options = [1, 2, 3];
}
