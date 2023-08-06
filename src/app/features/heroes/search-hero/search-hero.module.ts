import {NgModule} from '@angular/core';
import {SearchHeroRoutingModule} from './search-hero-routing.module';
import {SearchHeroComponent} from './search-hero.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    SearchHeroRoutingModule,
    CommonModule,
  ],
  declarations: [
    SearchHeroComponent
  ]
})
export class SearchHeroModule {

}
