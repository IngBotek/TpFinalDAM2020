import { Component } from '@angular/core';
import { Dispositivo } from '../model/Dispositivo';
import { ListadoService } from '../service/listado.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // Variable de tipo modelo Dispositivo definido en ../model/Dispositivo
  listadoDispositivo:Dispositivo[];
  
  // Solicitamos el listado de dispositivos registrados para mostrar. 
  constructor(public dispositivoServ:ListadoService) {
    dispositivoServ.getListadoDispositivos().then(lst=>{
      this.listadoDispositivo=lst;
      console.log(this.listadoDispositivo);
    })
  }
  
    ngOnInit(): void {
    }
    
  }
  
