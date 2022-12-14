import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponenteserversComponent } from './componenteservers/componenteservers.component';
import { EditServerComponent } from './edit-server/edit-server.component';
import { RouterModule } from '@angular/router';
import { ServerComponent } from './server/server.component';



@NgModule({
  declarations: [
    ComponenteserversComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ComponenteserversComponent,
    EditServerComponent,
    ServerComponent
  ]
})
export class ServersModule { }
