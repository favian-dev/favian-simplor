import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplEffectDirective, SplTheme } from '@favian/simplor';

@Component({
  selector: 'app-effect-example-i',
  standalone: true,
  imports: [CommonModule, SplEffectDirective],
  templateUrl: './effect-example-i.component.html',
  styleUrls: ['./effect-example-i.component.scss'],
})
export class EffectExampleIComponent {
  themes: SplTheme[] = ['none', 'primary', 'secondary', 'tertiary', 'warn', 'error', 'success'];
}
