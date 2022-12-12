import { Component, OnInit } from '@angular/core';
import { ServersServicesServiceJsService } from '../../services/servers.services.service';
import { Servers } from '../../interfaces/servers.interface';

@Component({
  selector: 'app-componenteservers',
  templateUrl: './componenteservers.component.html'
})
export class ComponenteserversComponent implements OnInit {
  servers:Servers[]=[]
  constructor(private serverService:ServersServicesServiceJsService) { }

  ngOnInit(): void {
  }
get Servers():Servers[]{
  return this.servers= this.serverService.servers
  
}
}
