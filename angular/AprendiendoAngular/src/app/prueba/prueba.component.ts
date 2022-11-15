import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent  {

  constructor() { }
  title :string = 'Contador';
  contador:number=10;
  base:number=21;

aggregate(value:number){
  //se le suma el valor que le hemos pasado por defecto
  this.contador+=value;
}

}
