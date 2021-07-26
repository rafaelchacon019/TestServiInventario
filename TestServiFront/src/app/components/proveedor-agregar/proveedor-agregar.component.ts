import { Component, OnInit } from '@angular/core';
import { ServiceProveedorService } from '../../services/service-proveedor.service';
import { FormBuilder, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proveedor-agregar',
  templateUrl: './proveedor-agregar.component.html',
  styleUrls: ['./proveedor-agregar.component.css']
})
export class ProveedorAgregarComponent implements OnInit {

  public formularioGrupo: FormGroup;

  constructor( private serviceProveedorService: ServiceProveedorService,
               private formBuilder: FormBuilder,
               private router: Router ) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') === null){
      this.router.navigateByUrl('/login');
    }
    this.inicializarFormulario();
  }

  get nombreNovalido(){
    return  this.formularioGrupo.get('nombre').invalid && this.formularioGrupo.get('nombre').touched;
  }

  get direccionNovalido(){
    return  this.formularioGrupo.get('direccion').invalid && this.formularioGrupo.get('direccion').touched;
  }

  get nitNovalido(){
    return  this.formularioGrupo.get('nit').invalid && this.formularioGrupo.get('nit').touched;
  }

  get telefonoNovalido(){
    return  this.formularioGrupo.get('telefono').invalid && this.formularioGrupo.get('telefono').touched;
  }

  inicializarFormulario(){
    this.formularioGrupo = this.formBuilder.group({
      id: 0,
      nombre: ['', Validators.required],
      nit: [null, Validators.required],
      direccion: ['', Validators.required],
      telefono: [null, Validators.required]
    });
  }

  guardarProveedor( ){
    this.serviceProveedorService.agregarProveedor( this.formularioGrupo.value ).subscribe(
      () => {
        alert('Se agregó el proveedor correctamente');
        this.formularioGrupo.reset();
      }
    );
  }

}
