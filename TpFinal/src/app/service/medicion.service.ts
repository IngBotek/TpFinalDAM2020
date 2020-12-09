import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medicion } from '../model/medicion'

@Injectable({
  providedIn: 'root'
})
export class MedicionService {
  urlApi="http://localhost:3000";
  
  constructor(private _http: HttpClient ) {
   }

// Solicitud del ultimo valor de medida de un sensor
  getMedicionByIdDispositivo(id):Promise<Medicion>{     
    return this._http.get(this.urlApi+"/api/medicion/"+id).toPromise().then((med:Medicion)=>{
      return med;
    });
  };

// Solicitud de todas las medidas de un sensor
  getMedicionesByIdDispositivo(id):Promise<Medicion[]>{     
    return this._http.get(this.urlApi+"/api/medicion/"+id+"/all").toPromise().then((mediciones:Medicion[])=>{
      return mediciones;
    });
  };

// Envio en una medida , INSERT CUANDO SE CIERRA LA VALVULA
  agregarMedicion(medicion:Medicion){
    return this._http.post(this.urlApi+"/api/medicion/agregar",{fecha:medicion.fecha,valor:medicion.valor,dispositivoId:medicion.dispositivoId}).toPromise().then((result)=>{
      return result;
    });
  }
}