import { Component, Input, OnInit } from '@angular/core';
import { Paises } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html'
})
export class TablaComponent implements OnInit {
@Input() countries:Paises[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
