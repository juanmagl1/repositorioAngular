import { Component, OnInit } from '@angular/core';
import { GifsServiceService } from '../services/gifs-service.service';
import { Gif } from '../interfaces/searchResponse.interface';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html'
})
export class ResultadosComponent  {

  constructor(private gifsService:GifsServiceService) { }
get results():Gif[]{
  return this.gifsService.results
}
  

}
