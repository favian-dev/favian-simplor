import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/** It is a box container that can contain any content. */
@Component({
  selector: 'spl-box',
  templateUrl: './spl-box.component.html',
  host: {
    class: 'spl-box',
  },
  standalone: true,
  imports: [CommonModule],
})
export class SplBoxComponent {}
