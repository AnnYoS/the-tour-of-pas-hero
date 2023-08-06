import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ViewHeroComponent} from './view-hero.component';

const routes: Routes =  [
  { path: '', component: ViewHeroComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewHeroRoutingModule {

}
