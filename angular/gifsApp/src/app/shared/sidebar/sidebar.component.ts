import { Component } from '@angular/core';
import { GifsServiceService } from '../../gifs/services/gifs-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent  {

  constructor(private historial:GifsServiceService) { }

  get historialCompleto():string[]{
    return this.historial.historial;
   }
//Esta funcion llama a la funcion de buscar que la ponemos mediante el evento
   pulsaBoton(cuestion:string){
    this.historial.buscarGifs(cuestion)
   }

}
