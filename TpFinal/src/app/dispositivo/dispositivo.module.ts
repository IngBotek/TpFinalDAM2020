import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DispositivoPageRoutingModule } from './dispositivo-routing.module';
import { DispositivoPage } from './dispositivo.page';
import { AjustarAperturaPipe } from '../pipe/ajustar-apertura.pipe';
import { DirectivaCustomDirective } from '../directive/directiva-custom.directive';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DispositivoPageRoutingModule
  ],
  declarations: [DispositivoPage, AjustarAperturaPipe,DirectivaCustomDirective]
})
export class DispositivoPageModule {}
