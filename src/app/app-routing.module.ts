import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: 'heroes', loadComponent: () => import('./features/heroes/list-hero/list-hero.component').then(m => m.ListHeroComponent) },
  { path: 'dashboard', loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent) },
  { path: 'detail/:id', loadComponent: () => import('./features/heroes/view-hero/view-hero.component').then(m => m.ViewHeroComponent)},
  { path: 'newHero', loadComponent: () => import('./features/heroes/add-hero/add-hero.component').then(m => m.AddHeroComponent) },
  { path: 'search', loadComponent: () => import('./features/heroes/search-hero/search-hero.component').then(m => m.SearchHeroComponent) },
  { path: '', redirectTo: './dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
