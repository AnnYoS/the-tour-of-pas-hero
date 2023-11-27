import { Component } from '@angular/core';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { MessagesComponent } from './features/messages/messages.component';
import {RouterModule, RouterOutlet} from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, MessagesComponent, NgHttpLoaderModule],
  template:`
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-messages></app-messages>
    <ng-http-loader></ng-http-loader>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

}
