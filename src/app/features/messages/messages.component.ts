import {Component, inject} from '@angular/core';
import {MessageService} from '../../core/service/message.service';
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <h2>Messages</h2>
    @if (messageService.messages.length) {
      @for (message of messageService.messages; track message) {
        <div>{{message}}</div>
      }
    }
    <button type="button" class="clear" (click)="messageService.clear()">Clear messages</button>
  `,
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {
  messageService: MessageService = inject(MessageService)
}
