import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/characters';
import { BsService } from '../services/brawl-stars.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent  {

  //characters:Character[] = []
  constructor(private bsService:BsService) {
    // this.characters=bsService.personajes;
  }
  
get characters():Character[]{
  return this.bsService.personajes;
}
//llamamos al metodo que hemos creado en el servicio
delCharacter(nombre:String):void{
  this.bsService.delCharacter(nombre);
}
}
