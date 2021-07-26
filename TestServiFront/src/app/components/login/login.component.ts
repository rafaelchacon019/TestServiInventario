import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models';
import { ServiceUsuarioService } from '../../services/service-usuario.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  usuario: Usuario;
  public formularioGrupo: FormGroup;

  constructor( private serviceUsuarioService: ServiceUsuarioService,
               private formBuilder: FormBuilder,
               private router: Router ) { }

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  get emailNovalido(){
    return  this.formularioGrupo.get('email').invalid && this.formularioGrupo.get('email').touched;
  }

  get passwordNovalido(){
    return  this.formularioGrupo.get('password').invalid && this.formularioGrupo.get('password').touched;
  }


  inicializarFormulario(){
    this.formularioGrupo = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

  }

  ingresar(){
    this.serviceUsuarioService.serviceLogin(this.formularioGrupo.value).subscribe(
      (usuarios) => {
        if (usuarios.length > 0){
          alert('Se ingreso correctamente');
          localStorage.setItem('token', JSON.stringify(usuarios[0].id));
          this.router.navigate(['/home']);
        }else{
          alert('correo o contraseña incorrectos');
        }
      }
    );

  }

}
