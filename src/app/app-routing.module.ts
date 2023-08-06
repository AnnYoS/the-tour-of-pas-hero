import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: 'heroes', loadChildren: () => import('./features/heroes/list-hero/list-hero.module').then(m => m.ListHeroModule) },
  { path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'detail/:id', loadChildren: () => import('./features/heroes/view-hero/view-hero.module').then(m => m.ViewHeroModule)},
  { path: 'newHero', loadChildren: () => import('./features/heroes/add-hero/add-hero.module').then(m => m.AddHeroModule) },
  { path: 'search', loadChildren: () => import('./features/heroes/search-hero/search-hero.module').then(m => m.SearchHeroModule) },
  { path: '', redirectTo: './dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
