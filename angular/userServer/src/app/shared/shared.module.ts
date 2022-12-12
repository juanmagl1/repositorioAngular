import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { ServersServicesServiceJsService } from '../services/servers.services.service';
import { UsersServicesServiceJsService } from '../services/users.services.service';



@NgModule({
  declarations: [
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterLinkActive,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    NotFoundComponent
  ],
  providers:[ServersServicesServiceJsService,
  UsersServicesServiceJsService]
})
export class SharedModule { }
