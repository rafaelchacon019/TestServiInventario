import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proveedores, Proveedor } from '../models';
import { RutasServicios } from './rutasServicios';

@Injectable()
export class ServiceProveedorService {

  constructor( private http: HttpClient) { }

  obtenerProveedor(): Observable<Proveedores> {
    const url = RutasServicios.urlProveedores;
    return this.http.get<Proveedores>(url);
  }

  agregarProveedor(proveedor: Proveedor): Observable<Proveedores> {
    const url = RutasServicios.urlProveedores;
    return this.http.post<Proveedores>(url, proveedor);
  }

  actualizarProveedor(idProveedor: number, proveedor: Proveedor): Observable<Proveedor> {
    const url = RutasServicios.urlProveedores + idProveedor + '/';
    return this.http.put<Proveedor>(url, proveedor);
  }

  obtenerProveedorPorId(idProveedor: number): Observable<Proveedor>{
    const url = RutasServicios.urlProveedores + 'filterid/' + idProveedor + '/';
    return this.http.get<Proveedor>(url);
  }

  eliminarProveedor(idProveedor: number): Observable<Proveedor>{
    const url = RutasServicios.urlProveedores + idProveedor + '/';
    return this.http.delete<Proveedor>(url);
  }
}
