import { ActivatedRoute } from '@angular/router';
import { Dispositivo } from '../model/Dispositivo';
import { ListadoService } from '../service/listado.service';

import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { MedicionService } from '../service/medicion.service';
import { LogsService } from '../service/logs.service';
import { logs } from '../model/logs';
import * as moment from 'moment';
import { Medicion } from'../model/medicion';

declare var require: any;
require('highcharts/highcharts-more')(Highcharts);
require('highcharts/modules/solid-gauge')(Highcharts);

@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.page.html',
  styleUrls: ['./dispositivo.page.scss'],
})
export class DispositivoPage implements OnInit {

  // Definicion de variables 
  private valorObtenido:number=0;
  public myChart;
  private chartOptions;
  private ID;
  private estadoLog:boolean;
  public dispositivo:Dispositivo;
  estadoValvula:boolean; // false=cerrada, true=abierta.
  colorToolbar:string; //Colores del toolbar

  constructor(private router:ActivatedRoute, private dServ:ListadoService, private med_id:MedicionService, private logs:LogsService)  { 
    
  }

  // Recuperamos el ID y solicitamos la ultima medicion del sensor para reflejarlo en el medidor
  ngOnInit() {
    this.ID=this.router.snapshot.paramMap.get('id');
  }


  // Por defecto, valvula cerrada.
  clickAbrirValvula(){
        this.estadoValvula=true; // se abre la valvula
        var newLog:logs = new logs(1,1,moment().format("YYYY-MM-DD HH:mm:ss"),this.ID); // (logid,apertura,fecha,electroVId)
        console.log (newLog)
        this.logs.postLogs(newLog); // Insertamos y registramos el nuevo estado de la valvula
  }
  // Click en cerrar valvula.
  clickCerrarValvula(){
        this.estadoValvula=false; // se cierra la valvula
        var randomValue = Math.floor(Math.random()*((this.valorObtenido)+1)); // Valor aleatorio entre el valor existente y 0.
        //var randomValue = Math.floor(Math.random() * (100 - 1)) + 1; // Valor aleatorio entre 1 y 100
        var newLog:logs = new logs(1,0,moment().format("YYYY-MM-DD HH:mm:ss"),this.ID); // (logid,apertura,fecha,electroVId)
        var randomMed:Medicion = new Medicion(1,moment().format("YYYY-MM-DD HH:mm:ss"),randomValue,this.ID); // (medicionId,fecha,valor,diposID)
        console.log (newLog);
        console.log (randomMed);
        this.logs.postLogs(newLog); // Insertamos y registramos el nuevo estado de la valvula.
        this.med_id.agregarMedicion(randomMed); // Insertamos el nuevo valor de medicion.
        // Actualizacion de la medida reflejada en el medidor despues del inster de nueva medicion. 
        this.myChart.update({series: [{
          name: 'kPA',
          data: [randomValue],
          tooltip: {
              valueSuffix: ' kPA'
          }
        }]});
  }


  // Miramos el estado de la valvula para reflejar la opcion correcta en el boton
   valvulaState(){
      this.logs.getUltimoLog(this.ID).then((newLog)=>{
          if(newLog[0]!=null){
              this.estadoValvula = Boolean(newLog[0].apertura); // toma el ultimo estado en el registro
              console.log(this.estadoValvula);
          }else {
            this.estadoValvula = false;
        }
          console.log(this.estadoValvula);
        });
  }

  // Se activa al ingresar a una página, después de que se convierte en la página activa. 
  ionViewDidEnter() {
    this.generarChart();
  }

  // Se dispara al ingresar a una página, antes de que se convierta en la activa.
  ionViewWillEnter(){
    this.valvulaState();

    this.med_id.getMedicionByIdDispositivo(this.ID).then(
      (ultima_med)=>{this.valorObtenido=Number(ultima_med.valor)}
    );

    setTimeout(()=>{
      console.log("Cambio el valor del sensor");
        //llamo al update del chart para refrescar y mostrar el nuevo valor
        this.myChart.update({series: [{
            name: 'kPA',
            data: [this.valorObtenido],
            tooltip: {
                valueSuffix: ' kPA'
            }
        }]});
      },500);

 // Cambio de color de los toolbar's segun la presion medida. (Necesaria una pequena espera)  
 setTimeout(()=>{
  if (this.valorObtenido <=10){
    this.colorToolbar="success";
    console.log(this.valorObtenido)
  } else if (this.valorObtenido >10 && this.valorObtenido <=30){
    this.colorToolbar="warning";
  } else {
    this.colorToolbar="danger";
  }},200);


  }


  // Grafico
  generarChart() {
    this.chartOptions={
      chart: {
          type: 'gauge',
          plotBackgroundColor: null,
          plotBackgroundImage: null,
          plotBorderWidth: 0,
          plotShadow: false
        }
        ,title: {
          text: 'Sensor N°' + this.ID
        }

        ,credits:{enabled:false}
        
           
        ,pane: {
            startAngle: -150,
            endAngle: 150
        } 
        // the value axis
      ,yAxis: {
        min: 0,
        max: 100,
  
        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',
  
        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'kPA'
        },
        plotBands: [{
            from: 0,
            to: 10,
            color: '#55BF3B' // green
        }, {
            from: 10,
            to: 30,
            color: '#DDDF0D' // yellow
        }, {
            from: 30,
            to: 100,
            color: '#DF5353' // red
        }]
    }
    ,
  
    series: [{
        name: 'kPA',
        data: [this.valorObtenido],
        tooltip: {
            valueSuffix: ' kPA'
        }
    }]

    };
    this.myChart = Highcharts.chart('highcharts', this.chartOptions );
  }

}