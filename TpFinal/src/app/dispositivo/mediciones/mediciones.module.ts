import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MedicionesPageRoutingModule } from './mediciones-routing.module';
import { MedicionesPage } from './mediciones.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AjustarFechaPipe } from 'src/app/pipe/ajustar-fecha.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicionesPageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [MedicionesPage, AjustarFechaPipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MedicionesPageModule {}
