import {NgModule} from '@angular/core';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    DashboardRoutingModule,
    CommonModule,
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule {

}
