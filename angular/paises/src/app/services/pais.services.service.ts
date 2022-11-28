import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Paises } from '../pais/interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisServicesService {
listaPaises:Paises[]=[]
url:string='https://restcountries.com/v3.1/'
  constructor(private http:HttpClient) { }

  get paises():Paises[]{
    return [...this.listaPaises]
  }
  buscarPaises(query:string):void{
    this.http.get<Paises[]>(`${this.url}/name/${query}`)
    .subscribe({
      next: (resp)=>{ this.listaPaises=resp
    },
    error:(err)=> {
      err=`No se encontró nada con el término ${query}`
    },
    }
    )
  }
}
