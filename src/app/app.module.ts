import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './core/service/in-memory-data.service';
import {NgHttpLoaderModule} from 'ng-http-loader';
import {MessagesComponent} from './features/messages/messages.component';
import {HeaderComponent} from './shared/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MessagesComponent,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
    NgHttpLoaderModule.forRoot(),
    HeaderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
