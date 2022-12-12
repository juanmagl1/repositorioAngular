import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app.routing';
import { CommonModule } from '@angular/common';
import { ServersModule } from './servers/servers.module';
import {HttpClientModule} from '@angular/common/http'
import { UsersModule } from './users/users.module';
import { UsersServicesServiceJsService } from './services/users.services.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CommonModule,
    ServersModule,
    HttpClientModule,
    UsersModule
   
  ],
  providers: [UsersServicesServiceJsService],
  bootstrap: [AppComponent],
  exports: [
    HomeComponent
  ]
})
export class AppModule { }
