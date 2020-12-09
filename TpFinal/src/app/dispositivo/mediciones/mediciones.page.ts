import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Medicion } from 'src/app/model/medicion';
import { MedicionService } from 'src/app/service/medicion.service';
import { ActivatedRoute } from '@angular/router';
import { SelectValueAccessor } from '@ionic/angular';


@Component({
  selector: 'app-mediciones',
  templateUrl: './mediciones.page.html',
  styleUrls: ['./mediciones.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MedicionesPage implements OnInit {

private ID;
listadoMedicion:Medicion[];
public columns: any;
public rows: any;
sensor:string;


  constructor(private router:ActivatedRoute, public medicionServ:MedicionService) {
   
    this.columns = [
      { name: 'Fecha' },
      { name: 'Valor' }
      //{ name: 'dispositivoId' }
    ];
  }
  
  // Recuperamos el ID y solicitamos todo el registro de mediciones del dispositivo. 
  ngOnInit() {
    this.ID=this.router.snapshot.paramMap.get('id');
    this.medicionServ.getMedicionesByIdDispositivo(this.ID).then(lst=>{
      this.listadoMedicion=lst;
      console.log(this.ID);
      console.log(this.listadoMedicion);
      this.rows = this.listadoMedicion;
      this.sensor='Sensor Nº' + this.ID;
  })
}

}
