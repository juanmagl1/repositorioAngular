import { Injectable } from "@angular/core";
import { filter } from "rxjs";
import { Character } from '../interfaces/characters';

@Injectable()
export class BsService{
    private _personajes=[
        {name:"Shelly",
        healthy:3600
      },
      {
        name:"Nita",
        healthy:2800,
      },
      {
        name:"Colt",
        healthy:800
      },
      {
        name:"Jessie",
        healthy:1800
      }
      ]
    constructor(){
        console.log('Servicio iniciado')
    }

    get personajes():Character[]{
        return[...this._personajes];
    }
    addCharacter(character:Character){
        this._personajes.push(character);
    }
    //En el servicio hacemos un filter de que el array de personajes sea igual a lo que le pasamos por el
    //filter y el filter lo que gace es pasarle un personaje por parametro y que el nombre del personaje sea
    //distinto al que le pasamos por parametro
    delCharacter(nombre:String){
      this._personajes=this._personajes.filter(personaje=>nombre!=personaje.name);
    }
}