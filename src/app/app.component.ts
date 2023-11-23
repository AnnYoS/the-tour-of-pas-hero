import { Component } from '@angular/core';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { MessagesComponent } from './features/messages/messages.component';
import {RouterModule, RouterOutlet, Routes} from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';

const routes: Routes = [
  { path: 'heroes', loadComponent: () => import('./features/heroes/list-hero/list-hero.component').then(m => m.ListHeroComponent) },
  { path: 'dashboard', loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent) },
  { path: 'detail/:id', loadComponent: () => import('./features/heroes/view-hero/view-hero.component').then(m => m.ViewHeroComponent)},
  { path: 'newHero', loadComponent: () => import('./features/heroes/add-hero/add-hero.component').then(m => m.AddHeroComponent) },
  { path: 'search', loadComponent: () => import('./features/heroes/search-hero/search-hero.component').then(m => m.SearchHeroComponent) },
  { path: '', redirectTo: './dashboard', pathMatch: 'full' }
];

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
