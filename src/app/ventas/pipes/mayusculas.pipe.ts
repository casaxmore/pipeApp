import { Pipe, PipeTransform } from "@angular/core";
import { Validators } from "@angular/forms";

@Pipe({
  name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform{

  transform(valor: string, enMayusculas?: Boolean): string {

   // 1.-
   /*  if ( enMayusculas === true){
      return valor.toUpperCase();
    } else {
      return valor.toLocaleLowerCase();
    } */

    // 2.-
    return ( enMayusculas )
           ? valor.toUpperCase()
           : valor.toLocaleLowerCase();
  }
}
