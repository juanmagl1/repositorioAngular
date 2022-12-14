import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponenteusersComponent } from './componenteusers/componenteusers.component';
import { UsersServicesServiceJsService } from '../services/users.services.service';
import { UserComponent } from './user/user.component';
import { RouterLinkActive, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ComponenteusersComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ComponenteusersComponent,
    UserComponent
  ],
  providers:[
    UsersServicesServiceJsService
  ]
})
export class UsersModule { }
