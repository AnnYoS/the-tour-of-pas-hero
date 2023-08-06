import {NgModule} from '@angular/core';
import {ListHeroRoutingModule} from './list-hero-routing.module';
import {ListHeroComponent} from './list-hero.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    ListHeroRoutingModule,
    CommonModule,
  ],
  declarations: [
    ListHeroComponent
  ]
})
export class ListHeroModule {

}
