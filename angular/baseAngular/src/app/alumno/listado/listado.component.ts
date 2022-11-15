import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  constructor() {}
    students:string[]=['Sergio','Javier','Pilar','Cente']
    approved:string[]=[]
    ultimo:String="";
    cambiarLista():void{
      this.approved.push(this.students.pop()||'');
    }
  }


