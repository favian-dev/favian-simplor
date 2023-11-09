import { Injectable } from '@angular/core';
import { SplOverlayRef, SplOverlayService } from './spl-overlay.service';
import { SplMessageComponent } from '../components/spl-message/spl-message.component';

/** Service to manage SplMessageComponent. */
@Injectable({
  providedIn: 'root',
})
export class SplMessageService {
  /** SplOverlayRef for opened message. */
  private _openedMessage?: SplOverlayRef<SplMessageComponent>;

  constructor(private _overlayService: SplOverlayService) {}

  /**
   * Open the message.
   * Only 1 message can be opened at a time, and when a new message is opened, the previous message is closed.
   * @param message - Message to display in SplMessageComponent.
   */
  open(message: string): void {
    this.close(); // Only single message can be displayable.

    this._openedMessage = this._overlayService.open(SplMessageComponent, {
      data: message,
    });
  }

  /** Closes messages that are already open. */
  close(): void {
    if (this._openedMessage) {
      this._overlayService.close(this._openedMessage);
      delete this._openedMessage;
    }
  }
}
