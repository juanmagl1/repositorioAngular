import { Component } from "@angular/core";


@Component({
    selector:'app-contador',
    templateUrl:'./contador.component.html'
})


export class ContadorComponent{
    title :string = 'Contador';
    contador:number=10;
    base:number=21;
  
  aggregate(value:number){
    //se le suma el valor que le hemos pasado por defecto
    this.contador+=value;
  }
}