import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-modal-i',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-modal-i.component.html',
  styleUrls: ['./test-modal-i.component.scss'],
  host: {
    class: 'spl-p-24',
  },
})
export class TestModalIComponent {}
