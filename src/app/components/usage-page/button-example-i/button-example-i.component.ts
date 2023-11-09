import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplButtonDirective, SplFlatButtonDirective, SplStrokeButtonDirective, SplTheme } from '@favian/simplor';

@Component({
  selector: 'app-button-example-i',
  standalone: true,
  imports: [CommonModule, SplButtonDirective, SplFlatButtonDirective, SplStrokeButtonDirective],
  templateUrl: './button-example-i.component.html',
  styleUrls: ['./button-example-i.component.scss'],
  host: {
    class: 'spl-flex spl-column spl-items-start',
  },
})
export class ButtonExampleIComponent {
  themes: SplTheme[] = ['none', 'primary', 'secondary', 'tertiary', 'warn', 'error', 'success'];
}
