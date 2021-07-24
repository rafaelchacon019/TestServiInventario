import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proveedores, Proveedor } from '../models';
import { RutasServicios } from './rutasServicios';

@Injectable()
export class ServiceProveedorService {

  constructor( private http: HttpClient) { }

  // tslint:disable-next-line:no-shadowed-variable
  obtenerProveedores(Proveedores: Proveedor): Observable<Proveedores> {
    const url = RutasServicios.urlProveedores;
    return this.http.post<Proveedores>(url, Proveedores);
  }
}
