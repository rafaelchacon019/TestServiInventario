import { Component, OnInit } from '@angular/core';
import { Proveedores } from '../../models';
import { ServiceProveedorService } from '../../services/service-proveedor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  filtroBusqueda = '';
  proveedores: Proveedores = [];

  constructor( private serviceProveedorService: ServiceProveedorService,
               private router: Router ) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') === null){
      this.router.navigateByUrl('/login');
    }
    this.obtenerProveedores();
  }

  obtenerProveedores(){
    this.serviceProveedorService.obtenerProveedor().subscribe(
      (proveedores) => {
        this.proveedores = proveedores;
      }
    );
  }

  eliminarProveedor(idProveedor: number){
    this.serviceProveedorService.eliminarProveedor(idProveedor).subscribe(
      () => {
          alert('Se elimino el proveedor correctamente');
          this.obtenerProveedores();
      }
    );
  }

}
