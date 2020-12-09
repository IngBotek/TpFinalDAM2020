import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ajustarApertura'
})
export class AjustarAperturaPipe implements PipeTransform {

    // Ajustamos la vista al usuario para mostrar la apertura del dispositivos como
    // Abierto si esta en 1
    // Cerrado si esta en 0  
    transform(value: number): string {
      if(value == 0){
        return "Cerrado";
      }
      else{
        return "Abierto";
      }
    }

  }


