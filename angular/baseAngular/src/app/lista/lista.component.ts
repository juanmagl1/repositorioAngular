import { Component } from "@angular/core";

@Component({
  selector:'app-lista',
  templateUrl:'./lista.component.html',
  styleUrls:['./lista.component.css']
})
export class ListaComponent{
    compra=[
        {element:'Cerveza',quantity:100},
        {element:'Huevo',quantity:24},
        {element:'Batido de chocolate',quantity:1},
        {element:'Salmón',quantity:2}
    ]
}