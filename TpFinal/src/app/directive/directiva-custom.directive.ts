import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirectivaCustom]'
})
export class DirectivaCustomDirective {

  // Cambia a color negro el texto contenido de los botones
  // "VER TODAS LAS MEDICIONES"
  // "VER LOG'S DE RIEGO"
  constructor(private el:ElementRef) {
    el.nativeElement.style.color = 'black';
   }
}
