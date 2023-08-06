import {NgModule} from '@angular/core';
import {ViewHeroRoutingModule} from './view-hero-routing.module';
import {CommonModule} from '@angular/common';
import {ViewHeroComponent} from './view-hero.component';
import {HeroCardComponent} from '../../../shared/components/hero-card/hero-card.component';

@NgModule({
  imports: [
    HeroCardComponent,
    ViewHeroRoutingModule,
    CommonModule,
  ],
  declarations: [
    ViewHeroComponent,
  ]
})
export class ViewHeroModule {

}
