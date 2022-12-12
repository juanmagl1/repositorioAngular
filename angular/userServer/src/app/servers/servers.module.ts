import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponenteserversComponent } from './componenteservers/componenteservers.component';



@NgModule({
  declarations: [
    ComponenteserversComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ComponenteserversComponent
  ]
})
export class ServersModule { }
