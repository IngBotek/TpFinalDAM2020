import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ajustarFecha'
})
export class AjustarFechaPipe implements PipeTransform {


  //Ajusta la forma en la que se presenta la fecha
  //string.split(separator, limit)
  transform(value: Date): String {
    var stringDate = value.toString(); //String
    var fullDate = stringDate.split('T'); //Is used to split a string into an array of substrings, and returns the new array.
    var hms = fullDate[1].split(':');
    hms[0] = String(Number(hms[0])-3);
    var s = hms[2].split('.');
    var formatedDate = fullDate[0] + ' ' + hms[0] + ':' + hms[1] + ':' + s[0];
    return formatedDate; //return formated date
  }

}
