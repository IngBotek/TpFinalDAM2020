import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LogsriegosPageRoutingModule } from './logsriegos-routing.module';
import { LogsriegosPage } from './logsriegos.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AjustarAperturaPipe } from 'src/app/pipe/ajustar-apertura.pipe';
import { AjustarFechaPipe } from 'src/app/pipe/ajustar-fecha.pipe';

// Declarado pipe de ajuste de variable "apertura"
// Declarado pipe de ajuste de variable "fecha"
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogsriegosPageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [LogsriegosPage,AjustarAperturaPipe, AjustarFechaPipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LogsriegosPageModule {}
