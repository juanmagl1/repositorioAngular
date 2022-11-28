import { Component } from '@angular/core';
import { Character } from '../interfaces/characters';
import { BsService } from '../services/brawl-stars.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {
    constructor(){
   
  }
nuevo={
  name:'Mamon',
  healthy:10000
}


// addCharacter(character:Character){
//   this.personajes.push({...character});
// }




}
