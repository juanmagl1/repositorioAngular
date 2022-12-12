import { Injectable } from '@angular/core';
import { Servers } from '../interfaces/servers.interface';

@Injectable({
  providedIn: 'root'
})
export class ServersServicesServiceJsService {
private server:Servers[]=[
  {
    id: 1,
    name: 'Productionserver',
    status: 'online'
    },
    {
    id: 2,
    name: 'Testserver',
    status: 'offline'
    },
    {
    id: 3,
    name: 'Devserver',
    status: 'offline'
    }
]
  constructor() { }

  get servers():Servers[]{
    return [...this.server]
  }
}
