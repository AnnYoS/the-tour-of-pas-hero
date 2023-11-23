import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { InMemoryDataService } from './app/core/service/in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormsModule } from '@angular/forms';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import {PreloadAllModules, provideRouter, RouterModule, Routes, withPreloading} from "@angular/router";

const routes: Routes = [
  { path: 'heroes', loadComponent: () => import('./app/features/heroes/list-hero/list-hero.component').then(m => m.ListHeroComponent) },
  { path: 'dashboard', loadComponent: () => import('./app/features/dashboard/dashboard.component').then(m => m.DashboardComponent) },
  { path: 'detail/:id', loadComponent: () => import('./app/features/heroes/view-hero/view-hero.component').then(m => m.ViewHeroComponent)},
  { path: 'newHero', loadComponent: () => import('./app/features/heroes/add-hero/add-hero.component').then(m => m.AddHeroComponent) },
  { path: 'search', loadComponent: () => import('./app/features/heroes/search-hero/search-hero.component').then(m => m.SearchHeroComponent) },
  { path: '', redirectTo: './dashboard', pathMatch: 'full' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(BrowserModule, FormsModule, HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService), NgHttpLoaderModule.forRoot()),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ]
}).catch(err => console.error(err));
