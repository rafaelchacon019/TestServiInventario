import { Component, OnInit } from '@angular/core';
import { ServiceProveedorService } from '../../services/service-proveedor.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-proveedor-agregar',
  templateUrl: './proveedor-agregar.component.html',
  styleUrls: ['./proveedor-agregar.component.css']
})
export class ProveedorAgregarComponent implements OnInit {

  public formularioGrupo: FormGroup;

  constructor( private serviceProveedorService: ServiceProveedorService,
               private formBuilder: FormBuilder   ) { }

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  // tslint:disable-next-line:typedef
  inicializarFormulario(){
    this.formularioGrupo = this.formBuilder.group({
      id: 0,
      nombre: ['', Validators.required],
      nit: [null, Validators.required],
      direccion: ['', Validators.required],
      telefono: [null, Validators.required]
    });
  }

  // tslint:disable-next-line:typedef
  guardarProveedor( ){
    console.log(this.formularioGrupo);

    this.serviceProveedorService.agregarProveedor( this.formularioGrupo.value ).subscribe(
      () => {
        alert('Se agregó el proveedor correctamente');
        this.formularioGrupo.reset();
      }
    );
  }

}
