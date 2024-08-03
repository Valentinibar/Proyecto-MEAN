import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sitio } from '../models/sitio';

@Injectable({
  providedIn: 'root'
})
export class SitioService {
  url = "http://localhost:4000/api/sitios/";

  constructor(private http: HttpClient) { }


  //traes los sitios de la DB local
  getSitios (): Observable <any> {
    return this.http.get(this.url);
  }

  //eliminas sitio de DB local
  eliminarSitio(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  //guarda sitio en DB
  guardarSitio(sitio: Sitio): Observable<any> {
    return this.http.post(this.url, sitio);
  }

  //Obtener sitio por id  
  obtenerSitio(id: string): Observable<any>{
    return this.http.
    get(this.url + id);
  }

  editarSitio(id:string, sitio: Sitio):Observable<any>{
    return this.http.put(this.url + id, sitio);
  }

}

