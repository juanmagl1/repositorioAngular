import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Paises } from '../../interfaces/paises.interface';
import { PaisServicesService } from '../../../services/pais.services.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit{
code:string="";
pais!:Paises;
  constructor(private paisServicio:PaisServicesService, private activeRoute:ActivatedRoute) {
   
   }
   ngOnInit(): void {
    //Aqui obtnemos el id desde los parametros
    this.code=this.activeRoute.snapshot.params['id'];
    this.paisServicio.search(this.code)
    .subscribe({
      next:(resp)=> {this.pais=resp[0]},
      error:(error) =>console.log(error)
    })
  }



}
