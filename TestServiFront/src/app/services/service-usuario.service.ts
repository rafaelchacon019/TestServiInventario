import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios, Usuario } from '../models';

import { Observable } from 'rxjs';
import { RutasServicios } from './rutasServicios';


@Injectable()
export class ServiceUsuarioService {

  constructor(private http: HttpClient) { }

  obtenerUsuarios(): Observable<Usuarios> {
    const url = RutasServicios.urlUsuarios;
    return this.http.get<Usuarios>(url);
  }

  registrarUsuario(usuario: Usuario): Observable<Usuarios> {
    const url = RutasServicios.urlUsuarios;
    return this.http.post<Usuarios>(url, usuario);
  }

  actualizarUsuario(idUsuario: number, usuario: Usuario): Observable<Usuario> {
    const url = RutasServicios.urlUsuarios + idUsuario + '/';
    return this.http.put<Usuario>(url, usuario);
  }

  eliminarUsuario(idUsuario: number): Observable<Usuario> {
    const url = RutasServicios.urlUsuarios + idUsuario + '/';
    return this.http.delete<Usuario>(url);
  }

  obtenerUsuarioPorId(idUsuario: number): Observable<Usuario>{
    const url = RutasServicios.urlUsuarios + 'filterid/' + idUsuario + '/';
    return this.http.get<Usuario>(url);
  }


  serviceLogin(usuario: Usuario): Observable<Usuarios> {
    const url = RutasServicios.urlUsuarios + 'login/';
    return this.http.post<Usuarios>(url, usuario);
  }
}

