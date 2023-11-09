import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplProgressBarComponent, SplTheme } from '@favian/simplor';

@Component({
  selector: 'app-progress-bar-example-i',
  standalone: true,
  imports: [CommonModule, SplProgressBarComponent],
  templateUrl: './progress-bar-example-i.component.html',
  styleUrls: ['./progress-bar-example-i.component.scss'],
})
export class ProgressBarExampleIComponent {
  themes: SplTheme[] = ['none', 'primary', 'secondary', 'tertiary', 'warn', 'error', 'success'];

  total = 10;
  value = 5;
}
