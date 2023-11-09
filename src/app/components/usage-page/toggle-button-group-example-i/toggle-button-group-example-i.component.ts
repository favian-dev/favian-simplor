import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplToggleButtonComponent, SplToggleButtonGroupComponent } from '@favian/simplor';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-toggle-button-group-example-i',
  standalone: true,
  imports: [CommonModule, SplToggleButtonGroupComponent, SplToggleButtonComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './toggle-button-group-example-i.component.html',
  styleUrls: ['./toggle-button-group-example-i.component.scss'],
  host: {
    class: 'spl-flex spl-column spl-items-start',
  },
})
export class ToggleButtonGroupExampleIComponent {
  options = [1, 2, 3];

  value = 2;

  formControl = new FormControl(3);
}
