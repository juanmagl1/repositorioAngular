import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/characters';
import { BsService } from '../services/brawl-stars.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent  {

  constructor(private bsService:BsService) {
    console.log('constructor');
   }
  @Input() nuevo:Character={name:'',healthy:0}

addCharacter(){
  this.bsService.addCharacter({...this.nuevo})
  this.nuevo.name='';
  this.nuevo.healthy=0;
 }
}
