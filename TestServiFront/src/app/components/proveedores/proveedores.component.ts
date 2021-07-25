import { Component, OnInit } from '@angular/core';
import { Proveedores } from '../../models';
import { ServiceProveedorService } from '../../services/service-proveedor.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  filtroBusqueda = '';
  proveedores: Proveedores = [];

  constructor( private serviceProveedorService: ServiceProveedorService ) { }

  ngOnInit(): void {
    this.obtenerProveedores();
  }

  // tslint:disable-next-line:typedef
  obtenerProveedores(){
    this.serviceProveedorService.obtenerProveedor().subscribe(
      (proveedores) => {
        this.proveedores = proveedores;
        console.log(proveedores);
      }
    );
  }

  // tslint:disable-next-line:typedef
  eliminarProveedor(idProveedor: number){
    this.serviceProveedorService.eliminarProveedor(idProveedor).subscribe(
      () => {
          alert('Se elimino el proveedor correctamente');
          this.obtenerProveedores();
      }
    );
  }

}
