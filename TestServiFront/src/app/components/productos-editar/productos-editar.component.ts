import { Component, OnInit } from '@angular/core';
import { Productos } from '../../models';
import { ServiceProductoService } from '../../services/service-productos.service';

@Component({
  selector: 'app-productos-editar',
  templateUrl: './productos-editar.component.html',
  styleUrls: ['./productos-editar.component.css']
})
export class ProductosEditarComponent implements OnInit {

  productos: Productos = [];
  constructor( private serviceProductoService: ServiceProductoService ) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  obtenerProductos(){
    this.serviceProductoService.obtenerProductos().subscribe(
      (productos) => {
        this.productos = productos;
        console.log(productos);
      }
    );
  }

}
