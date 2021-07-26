import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proveedor } from '../../models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceProveedorService } from '../../services/service-proveedor.service';

@Component({
  selector: 'app-proveedor-editar',
  templateUrl: './proveedor-editar.component.html',
  styleUrls: ['./proveedor-editar.component.css']
})
export class ProveedorEditarComponent implements OnInit {

  public formularioGrupo: FormGroup;
  proveedor: Proveedor;
  idProveedor: number;

  constructor(private rutaActiva: ActivatedRoute,
              private formBuilder: FormBuilder,
              private serviceProveedorService: ServiceProveedorService,
              private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') === null){
      this.router.navigateByUrl('/login');
    }
    this.idProveedor = this.rutaActiva.snapshot.params.idProveedor;
    this.obtenerProveedor();
    this.inicializarformulario();
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



  obtenerProveedor(){
    this.serviceProveedorService.obtenerProveedorPorId(this.idProveedor).subscribe(
      (proveedor) => {
        this.proveedor = proveedor[0];
        this.formularioGrupo.get('nombre').setValue(this.proveedor.nombre);
        this.formularioGrupo.get('direccion').setValue(this.proveedor.direccion);
        this.formularioGrupo.get('nit').setValue(this.proveedor.nit);
        this.formularioGrupo.get('telefono').setValue(this.proveedor.telefono);
      }
    );
  }


  inicializarformulario(){
    this.formularioGrupo = this.formBuilder.group({
      id: this.idProveedor,
      nombre: ['', Validators.required],
      nit: [null, Validators.required],
      direccion: ['', Validators.required],
      telefono: [null, Validators.required],
    });
  }


  actualizarProveedor(){
    this.serviceProveedorService.actualizarProveedor(this.idProveedor, this.formularioGrupo.value).subscribe(
      () => {
        alert('Se actualizó el proveedor correctamente');
        this.router.navigate(['/proveedor']);
      }
    );
  }

}
