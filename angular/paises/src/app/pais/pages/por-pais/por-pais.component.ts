import { Component } from '@angular/core';
import { PaisServicesService } from '../../../services/pais.services.service';
import { Paises } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent  {
  countries:Paises[]=[];
error:boolean=false;
textError:string="";
  constructor(private listaPaises:PaisServicesService) { }
  get numeroPaises():Paises[]{
    return this.countries;
  }
  //Le ponemos un parametro al metodo y llamamos al servicio con la cadena del parametro
  buscaPais(cadena:string){
    this.listaPaises.buscarPaises(cadena)
    .subscribe({
      next:(resp)=>{
        this.countries=resp
        this.error=false
      },
      error:(error)=>{
        this.error=true
        this.textError=cadena
      }
    })
    
  }

}
