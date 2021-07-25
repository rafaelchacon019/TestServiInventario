import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) { return value; }
    const resultadoBusqueda = [];

    for (const busque of value ){
      if (busque.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultadoBusqueda.push(busque);
      }
    }
    return resultadoBusqueda;
  }

}
