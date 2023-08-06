import {Component} from '@angular/core';
import {MessageService} from '../../core/service/message.service';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-messages',
  standalone: true,
  template: `
    <h2>Messages</h2>
    <div *ngIf="messageService.messages.length">
      <div *ngFor='let message of messageService.messages'> {{message}} </div>
    </div>
    <button type="button" class="clear" (click)="messageService.clear()">Clear messages</button>
  `,
  imports: [
    CommonModule
  ],
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {

  constructor(public messageService: MessageService) { }
}
