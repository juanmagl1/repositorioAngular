import { Component, Input } from '@angular/core';
import { GifsServiceService } from '../services/gifs-service.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent  {
  cadena:string="";
  constructor(private buscaHistorial:GifsServiceService) {}
  addHistorial(query:string){
    this.buscaHistorial.buscarGifs(query);
    this.cadena="";
    
  }

}
