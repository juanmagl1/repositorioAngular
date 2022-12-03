import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Paises } from '../pais/interfaces/paises.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisServicesService {
url:string='https://restcountries.com/v3.1/'
  constructor(private http:HttpClient) { }

  buscarPaises(query:string):Observable<Paises[]>{
   return this.http.get<Paises[]>(`${this.url}name/${query}`)
  }

  search(code:string):Observable<Paises[]>{
    return this.http.get<Paises[]>(`${this.url}alpha/${code}`)
  }
  searchCapital(capital:string):Observable<Paises[]>{
    return this.http.get<Paises[]>(`${this.url}/capital/${capital}`)
  }
}
