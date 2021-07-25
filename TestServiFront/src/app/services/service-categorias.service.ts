import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria, Categorias } from '../models';
import { Observable } from 'rxjs';
import { RutasServicios } from './rutasServicios';

@Injectable()
export class ServiceCategoriasService {

  constructor(private http: HttpClient) { }

  obtenerCategorias(): Observable<Categorias> {
    const url = RutasServicios.urlCategorias;
    return this.http.get<Categorias>(url);
  }

  agregarCategoria(categoria: Categoria): Observable<Categorias>{
    const url = RutasServicios.urlCategorias;
    return this.http.post<Categorias>(url, categoria);
  }

  actualizarCategoria(idCategoria: number, categoria: Categoria): Observable<Categoria>{
    const url = RutasServicios.urlCategorias + idCategoria + '/';
    return this.http.put<Categoria>(url, categoria);
  }

  eliminarCategoria(idCategoria: number): Observable<Categoria>{
    const url = RutasServicios.urlCategorias + idCategoria + '/';
    return this.http.delete<Categoria>(url);
  }

  obtenerCategoriaPorId(idCategoria: number): Observable<Categoria>{
    const url = RutasServicios.urlCategorias + 'filterid/' + idCategoria + '/';
    return this.http.get<Categoria>(url);
  }


}
