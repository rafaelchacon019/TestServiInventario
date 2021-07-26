import { Pipe, PipeTransform } from '@angular/core';
import { of } from 'rxjs';
import { Categorias } from '../models';

@Pipe({
  name: 'obtenerNombreCategoriaId'
})
export class ObtenerNombreCategoriaIdPipe implements PipeTransform {

  transform(value: number, categorias: Categorias): string {

    let nombreCategoria = '';

    for ( const categoria of categorias ){
      if ( categoria.id === value ){
        nombreCategoria = categoria.nombre;
      }
    }
    return nombreCategoria;
  }

}
