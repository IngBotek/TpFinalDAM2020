import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dispositivo } from '../model/Dispositivo';

@Injectable({
  providedIn: 'root'
})
export class ListadoService {

  listado:Array<Dispositivo> = new Array<Dispositivo>();
  urlApi="http://localhost:3000";
  
    constructor(private _http: HttpClient) {
     }

     getListadoDispositivos():Promise<Dispositivo[]>{
      return this._http.get(this.urlApi+ "/api/dispositivo/").toPromise().then((listado:Dispositivo[])=>{
        return listado;
      });
    }

     //getDispositivo(id):Dispositivo{
     //   return this.listado.filter(dispositivo=> dispositivo.dispositivoId==id)[0];
     //}
}
  

  


