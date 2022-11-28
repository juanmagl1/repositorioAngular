import { Component } from '@angular/core';
import { PaisServicesService } from '../../../services/pais.services.service';
import { Paises } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent  {
cadena:string=""
  constructor(private listaPaises:PaisServicesService) { }
  get numeroPaises():Paises[]{
    return this.listaPaises.paises;
  }
  buscaPais(query:string){
    this.listaPaises.buscarPaises(query);
  }

}
