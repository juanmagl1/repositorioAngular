import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif,GifsSearchResponse } from '../interfaces/searchResponse.interface';

@Injectable({
  providedIn: 'root'
})

export class GifsServiceService {
  private _historial:string[]=[]
  private api_key:string='PB382KlF8geQUCZeD4wiVJJGc61G2DjO'
  private url:string='https://api.giphy.com/v1/gifs/search'
  results: Gif[]=[]
  constructor(private http:HttpClient) {
    //Si usamos la admiracion nos hacemos nosotros cargo de que va a dar un valor
    // y si da nulo lo que le ponemos es el array vacio
    //Se pone en el constructor
    this._historial=JSON.parse(localStorage.getItem('historial')!) || []
   }

  get historial():string[]{

    return [...this._historial]
  }

  buscarGifs(query:string):void{
    if (query.trim()!=="" && !this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial=this.historial.splice(0,10);
      localStorage.setItem('historial',JSON.stringify(this._historial));
   
    }
    
     //Peticiones
    const params=new HttpParams()
    .set('api_key',this.api_key)
    .set('q',query)
    this.http.get<GifsSearchResponse>(this.url,{params})
  .subscribe((resp)=>this.results=resp.data
  )
  }

 
}
