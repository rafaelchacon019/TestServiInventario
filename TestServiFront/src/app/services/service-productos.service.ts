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

  agregarProducto(producto: Producto): Observable<Productos> {
    const url = RutasServicios.urlProductos;
    return this.http.post<Productos>(url, producto);
  }
}

