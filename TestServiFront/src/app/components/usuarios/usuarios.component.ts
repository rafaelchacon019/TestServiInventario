import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/models';
import { ServiceUsuarioService } from '../../services/service-usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  filtroBusqueda = '';
  usuarios: Usuarios = [];
  constructor( private serviceUsuarioService: ServiceUsuarioService,
               private router: Router ) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') === null){
      this.router.navigateByUrl('/login');
    }
    this.obtenerUsuario();
  }

  // tslint:disable-next-line:typedef
  obtenerUsuario(){
    this.serviceUsuarioService.obtenerUsuarios().subscribe(
      (usuarios) => {
        this.usuarios = usuarios;
      }
    );
  }

  // tslint:disable-next-line:typedef
  eliminarUsuario(idUsuario: number){
    this.serviceUsuarioService.eliminarUsuario(idUsuario).subscribe(
      () => {
        alert('Se elimino el usuario correctamente');
        this.obtenerUsuario();
      }
    );
  }

}
