import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServersServicesServiceJsService } from '../../services/servers.services.service';
import { Servers } from '../../interfaces/servers.interface';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit {
  serve!:Servers;
  constructor(private service:ServersServicesServiceJsService,
    private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe({
      next:(resp)=>{
        this.serve=this.service.servers[resp['id']];
      }
    })
  }

}
