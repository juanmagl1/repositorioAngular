import { Component, OnInit } from '@angular/core';
import { ServersServicesServiceJsService } from '../../services/servers.services.service';
import { Servers } from '../../interfaces/servers.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-componenteservers',
  templateUrl: './componenteservers.component.html'
})
export class ComponenteserversComponent implements OnInit {
  servers:Servers[]=[]
  constructor(private serverService:ServersServicesServiceJsService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
get Servers():Servers[]{
  return this.servers= this.serverService.servers
  
}
onReload(){
  //this.router.navigate(['servers'],{relativeTo:this.route})
}
}
