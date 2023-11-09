import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplInputDirective } from '@favian/simplor';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-example-i',
  standalone: true,
  imports: [CommonModule, SplInputDirective, FormsModule, ReactiveFormsModule],
  templateUrl: './input-example-i.component.html',
  styleUrls: ['./input-example-i.component.scss'],
})
export class InputExampleIComponent {
  value = 'Value1';
  formControl = new FormControl('Value2');
}
