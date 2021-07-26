import { Component, OnInit } from '@angular/core';
import { ServiceUsuarioService } from '../../services/service-usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public formularioGrupo: FormGroup;

  constructor( private serviceUsuarioService: ServiceUsuarioService,
               private formBuilder: FormBuilder,
               private router: Router) { }

  ngOnInit(): void {
    this.inicializarFormulario();
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
  get passwordNovalido(){
    return  this.formularioGrupo.get('password').invalid && this.formularioGrupo.get('password').touched;
  }

  inicializarFormulario(){
    this.formularioGrupo = this.formBuilder.group({
      id: 0,
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  registrarUsuario(){
    this.serviceUsuarioService.registrarUsuario( this.formularioGrupo.value ).subscribe(
      () => {
        alert('Se registro usuario correctamente');
        this.router.navigate(['/login']);
      }
    );
  }

}
