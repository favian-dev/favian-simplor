import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplCheckboxComponent } from '@favian/simplor';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkbox-example-i',
  standalone: true,
  imports: [CommonModule, SplCheckboxComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './checkbox-example-i.component.html',
  styleUrls: ['./checkbox-example-i.component.scss'],
})
export class CheckboxExampleIComponent {
  value = false;

  formControl = new FormControl(false);
}
