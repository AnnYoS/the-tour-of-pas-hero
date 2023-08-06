import {NgModule} from '@angular/core';
import {AddHeroRoutingModule} from './add-hero-routing.module';
import {AddHeroComponent} from './add-hero.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    AddHeroRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AddHeroComponent,
  ]
})
export class AddHeroModule {

}
