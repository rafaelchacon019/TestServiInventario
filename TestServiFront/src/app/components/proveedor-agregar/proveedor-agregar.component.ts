import { Component, OnInit } from '@angular/core';
import { ServiceProveedorService } from '../../services/service-proveedor.service';
import { Proveedores } from '../../models';

@Component({
  selector: 'app-proveedor-agregar',
  templateUrl: './proveedor-agregar.component.html',
  styleUrls: ['./proveedor-agregar.component.css']
})
export class ProveedorAgregarComponent implements OnInit {

  proveedores: Proveedores = [];
  constructor( private serviceProveedorService: ServiceProveedorService ) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  // guardarProveedor(){
  //   this.serviceProveedorService.obtenerProveedores( this.proveedores ).subscribe(
  //     (proveedores) => {
  //       console.log(proveedores);
  //     }
  //   );
  // }

}
