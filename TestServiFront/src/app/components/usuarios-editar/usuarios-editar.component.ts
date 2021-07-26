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
    if (localStorage.getItem('token') === null){
      this.router.navigateByUrl('/login');
    }
    this.idUsuario = this.rutaActiva.snapshot.params.idUsuario;
    this.obtenerUsuario();
    this.inicializarformulario();
  }

  get nombreNovalido(){
    return  this.formularioGrupo.get('nombre').invalid && this.formularioGrupo.get('nombre').touched;
  }
  get apellidoNovalido(){
    return  this.formularioGrupo.get('apellido').invalid && this.formularioGrupo.get('apellido').touched;
  }
  get emailNovalido(){
    return  this.formularioGrupo.get('email').invalid && this.formularioGrupo.get('email').touched;
  }

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

  inicializarformulario(){
    this.formularioGrupo = this.formBuilder.group({
      id: this.idUsuario,
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', Validators.required],
      password: [''],
    });
  }

  actualizarUsuario(){
    this.serviceUsuarioService.actualizarUsuario(this.idUsuario, this.formularioGrupo.value).subscribe(
      () => {
        alert('Se actualizó el usuario correctamente');
        this.router.navigate(['/usuarios']);
      }
    );
  }
}
