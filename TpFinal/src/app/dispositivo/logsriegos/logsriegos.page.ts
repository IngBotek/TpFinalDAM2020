import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { logs } from 'src/app/model/logs';
import { LogsService } from 'src/app/service/logs.service';

@Component({
  selector: 'app-logsriegos',
  templateUrl: './logsriegos.page.html',
  styleUrls: ['./logsriegos.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LogsriegosPage implements OnInit {

  private ID;
  listadoLogs:logs[];
  public columns: any;
  public rows: any;
  electro:string

  constructor(private router:ActivatedRoute, public logServ:LogsService) {
    this.columns = [
      { name: 'Apertura' },
      { name: 'Fecha' },
      //{ name: 'electrovalvulaId' },
    ];
   }

  // Recuperamos el ID y solicitamos todo el registro de logs de la valvula asociada.
  ngOnInit() {
    this.ID=this.router.snapshot.paramMap.get('id');
    this.logServ.getListadologs(this.ID).then(lst=>{
      this.listadoLogs=lst;
      console.log(this.ID);
      console.log(this.listadoLogs);
      this.rows = this.listadoLogs;
      this.electro='Electrovalvula Nº' + this.ID;
  })

  }

}
