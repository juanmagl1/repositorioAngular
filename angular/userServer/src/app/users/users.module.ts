import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponenteusersComponent } from './componenteusers/componenteusers.component';
import { UsersServicesServiceJsService } from '../services/users.services.service';



@NgModule({
  declarations: [
    ComponenteusersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ComponenteusersComponent
  ],
  providers:[
    UsersServicesServiceJsService
  ]
})
export class UsersModule { }
