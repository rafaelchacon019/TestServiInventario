import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../models';

import { Observable } from 'rxjs';
import { RutasServicios } from './rutasServicios';


@Injectable()
export class ServiceUsuarioService {

  constructor(private http: HttpClient) { }

  obtenerUsuarios(): Observable<Usuarios> {
    const url = RutasServicios.urlUsuarios;
    return this.http.get<Usuarios>(url);
  }

}

