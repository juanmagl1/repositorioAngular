import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { ListaComponent } from './lista/lista.component';
import { AlumnoModule } from './alumno/alumno.module';
import { MainPageComponent } from './brawl-stars/main-page/main-page.component';
import { BrawlStarsModule } from './brawl-stars/brawl-stars.module';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ListaComponent,

  ],
  imports: [
    BrowserModule,
    AlumnoModule,
    BrawlStarsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
