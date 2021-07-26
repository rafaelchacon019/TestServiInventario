import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { RutasServicios } from './rutasServicios';
import { Productos, Producto } from '../models';


@Injectable()
export class ServiceProductoService {

  constructor(private http: HttpClient) { }

  obtenerProductos(): Observable<Productos> {
    const url = RutasServicios.urlProductos;
    return this.http.get<Productos>(url);
  }

  obtenerProductoPorId(idProducto: number): Observable<Producto>{
    const url = RutasServicios.urlProductos + 'filteridall/' + idProducto + '/';
    return this.http.get<Producto>(url);
  }

  agregarProducto(  producto: Producto): Observable<Productos> {
    const url = RutasServicios.urlProductos;
    return this.http.post<Productos>(url, producto);
  }

  actualizarProducto( idProducto: number, producto: Producto): Observable<Producto>{
    const url = RutasServicios.urlProductos + idProducto + '/';
    return this.http.put<Producto>(url, producto);
  }

  eliminarProducto(idProducto: number): Observable<Producto>{
    const url = RutasServicios.urlProductos + idProducto + '/';
    return this.http.delete<Producto>(url);
  }
}

