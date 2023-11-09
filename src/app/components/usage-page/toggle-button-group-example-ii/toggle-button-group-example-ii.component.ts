import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplToggleButtonComponent, SplToggleButtonGroupComponent } from '@favian/simplor';

@Component({
  selector: 'app-toggle-button-group-example-ii',
  standalone: true,
  imports: [CommonModule, SplToggleButtonComponent, SplToggleButtonGroupComponent],
  templateUrl: './toggle-button-group-example-ii.component.html',
  styleUrls: ['./toggle-button-group-example-ii.component.scss'],
  host: {
    class: 'spl-flex spl-column spl-items-start',
  },
})
export class ToggleButtonGroupExampleIiComponent {
  options = [1, 2, 3];
}
