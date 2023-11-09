import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplRadioButtonComponent, SplRadioGroupComponent } from '@favian/simplor';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-radio-group-example-i',
  standalone: true,
  imports: [CommonModule, SplRadioGroupComponent, SplRadioButtonComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './radio-group-example-i.component.html',
  styleUrls: ['./radio-group-example-i.component.scss'],
  host: {
    class: 'spl-flex spl-column spl-items-start',
  },
})
export class RadioGroupExampleIComponent {
  options = [1, 2, 3];

  value = 1;

  formControl = new FormControl(1);
}
