import { Component, EventEmitter, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'spl-radio-button',
  templateUrl: './spl-radio-button.component.html',
  host: {
    class: 'spl-radio-button',
  },
  standalone: true,
  imports: [CommonModule],
})
export class SplRadioButtonComponent {
  @Input({ required: true }) value: any;

  onClick = new EventEmitter<any>();

  active = false;

  @HostListener('click')
  onHostClick(): void {
    this.onClick.emit(this.value);
  }
}
