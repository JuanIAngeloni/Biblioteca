import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'antiguedad'
})

export class AntiguedadPorAntiguedadPipe implements PipeTransform {

  antiguedad: number;

  constructor() {
    this.antiguedad = new Date().getFullYear();
  }

  transform(value: number): string {

    this.antiguedad = this.antiguedad - value;
    return this.antiguedad + 'Antiguedad';

  }


}
