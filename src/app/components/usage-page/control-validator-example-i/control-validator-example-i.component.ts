import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SplControlValidatorDirective } from '@favian/simplor';

@Component({
  selector: 'app-control-validator-example-i',
  standalone: true,
  imports: [CommonModule, FormsModule, SplControlValidatorDirective, ReactiveFormsModule],
  templateUrl: './control-validator-example-i.component.html',
  styleUrls: ['./control-validator-example-i.component.scss'],
})
export class ControlValidatorExampleIComponent {
  value = '';

  formControl = new FormControl('', [Validators.required, Validators.email]);
}
