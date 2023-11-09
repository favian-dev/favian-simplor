import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplMessageService, SplStrokeButtonDirective } from '@favian/simplor';

@Component({
  selector: 'app-message-example-i',
  standalone: true,
  imports: [CommonModule, SplStrokeButtonDirective],
  templateUrl: './message-example-i.component.html',
  styleUrls: ['./message-example-i.component.scss'],
})
export class MessageExampleIComponent {
  constructor(private _messageService: SplMessageService) {}

  openMessage(): void {
    this._messageService.open('This is message');
  }

  closeMessage(): void {
    this._messageService.close();
  }
}
