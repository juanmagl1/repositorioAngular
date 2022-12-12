import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {
//Salida de informacion hacia el hijo da igual donde se tipe pero tienes que tiparlo
@Output() paisEvento:EventEmitter<string>=new EventEmitter();
//Hce falta una cadena para el evento que vamos a emitir
pais:string=""

  constructor() { }

  ngOnInit(): void {
  }

  //Llamamos al output y le decimos que emita el evento con la cadena que hemos creado arriba
  //Esta información ira hacia el padre ques es ver-pais
buscaPais(){
  this.paisEvento.emit(this.pais);
  this.pais="";
}
}
