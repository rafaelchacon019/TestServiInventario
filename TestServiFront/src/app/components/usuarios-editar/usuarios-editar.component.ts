import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../models';
import { ServiceUsuarioService } from '../../services/service-usuario.service';

@Component({
  selector: 'app-usuarios-editar',
  templateUrl: './usuarios-editar.component.html',
  styleUrls: ['./usuarios-editar.component.css']
})
export class UsuariosEditarComponent implements OnInit {

  public formularioGrupo: FormGroup;
  usuario: Usuario;
  idUsuario: number;

  constructor( private rutaActiva: ActivatedRoute,
               private formBuilder: FormBuilder,
               private serviceUsuarioService: ServiceUsuarioService,
               private router: Router ) { }

  ngOnInit(): void {
    this.idUsuario = this.rutaActiva.snapshot.params.idUsuario;
    this.obtenerUsuario();
    this.inicializarformulario();
  }

  // tslint:disable-next-line:typedef
  obtenerUsuario(){
    this.serviceUsuarioService.obtenerUsuarioPorId(this.idUsuario).subscribe(
      (usuario) => {
        this.usuario = usuario[0];
        this.formularioGrupo.get('nombre').setValue(this.usuario.nombre);
        this.formularioGrupo.get('apellido').setValue(this.usuario.apellido);
        this.formularioGrupo.get('email').setValue(this.usuario.email);
      }
    );
  }

  // tslint:disable-next-line:typedef
  inicializarformulario(){
    this.formularioGrupo = this.formBuilder.group({
      id: this.idUsuario,
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  // tslint:disable-next-line:typedef
  // actualizarUsuario(){
  //   this.serviceUsuarioService.actualizarUsuario(this.idUsuario, this.formularioGrupo.value).subscribe(
  //     () => {
  //       alert('Se actualizó el usuario correctamente');
  //       this.router.navigate(['/usuario']);
  //     }
  //   );
  // }
}
