import { Validators } from "@angular/forms";
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vuela'
})
export class VuelaPipe implements PipeTransform {

  transform(vuela: boolean): string {
    return (vuela) ? 'vuela' : 'no vuela'
  }

}
