import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/models';
import { ServiceUsuarioService } from '../../services/service-usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  filtroBusqueda = '';
  usuarios: Usuarios = [];
  constructor( private serviceUsuarioService: ServiceUsuarioService ) { }

  ngOnInit(): void {
    this.obtenerUsuario();
  }

  // tslint:disable-next-line:typedef
  obtenerUsuario(){
    this.serviceUsuarioService.obtenerUsuarios().subscribe(
      (usuarios) => {
        this.usuarios = usuarios;
        console.log(usuarios);
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
