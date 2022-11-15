import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/characters';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent  {

  constructor() { }
  @Input() nuevo:Character={name:'',healthy:0}
  @Input() personajes: Character[]=[]
addCharacter(){
  let add={name:this.nuevo.name,healthy:this.nuevo.healthy}
   this.personajes.push(add);
   this.nuevo.name='';
   this.nuevo.healthy=0;
 }
}
