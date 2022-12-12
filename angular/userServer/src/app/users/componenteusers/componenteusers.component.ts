import { Component, OnInit } from '@angular/core';
import { UsersServicesServiceJsService } from '../../services/users.services.service';
import { Users } from '../../interfaces/users.interface';

@Component({
  selector: 'app-componenteusers',
  templateUrl: './componenteusers.component.html'
})
export class ComponenteusersComponent implements OnInit {
users:Users[]=[]
  constructor(private userServer:UsersServicesServiceJsService) { }
//Se escribe en el ng on init para cuando comience el componente se realice la petición a nuestro 
//json server
  ngOnInit(): void {
    this.userServer.users
 .subscribe({
  next:(resp)=> {this.users=resp},
  error:(error)=>{console.log(error)}
})
  }

}
