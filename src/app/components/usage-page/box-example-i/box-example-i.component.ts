import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplBoxComponent } from '@favian/simplor';

@Component({
  selector: 'app-box-example-i',
  standalone: true,
  imports: [CommonModule, SplBoxComponent],
  templateUrl: './box-example-i.component.html',
  styleUrls: ['./box-example-i.component.scss'],
})
export class BoxExampleIComponent {}
