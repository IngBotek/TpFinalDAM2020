import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { logs } from '../model/logs';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  logs:Array<logs> = new Array<logs>();
  urlApi="http://localhost:3000";
  
  constructor(private _http: HttpClient) {}

  // Solicita el ultimo registro de una valvula
  getUltimoLog(id:number):Promise<logs>{
    return this._http.get(this.urlApi + "/api/logs/"+id).toPromise().then(
      (log:logs) => {return log}
    );}


  // Solicita el registro completo de logs de una valvula
  getListadologs(id):Promise<logs[]>{
      return this._http.get(this.urlApi+ "/api/logs/"+id+"/all").toPromise().then((logs:logs[])=>{
      return logs;
      });
  }

  // Inserta registro nuevo de log cuando se abrio o cerro la valvula.
  postLogs(registro:logs){
    return this._http.post(this.urlApi + "/api/logs",{apertura:registro.apertura,fecha:registro.fecha,electrovalvulaId:registro.electrovalvulaId} ).toPromise().then(
      (result) => {console.log(result);}
    );
  }


}
