import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../interfaces/users.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersServicesServiceJsService {
private url:string="http://localhost:3000/users"
  constructor(private http:HttpClient) { }

  get users():Observable<Users[]>{
    return this.http.get<Users[]>(this.url)
  }


}
