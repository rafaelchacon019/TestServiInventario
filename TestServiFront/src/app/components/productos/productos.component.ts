import { Component, OnInit } from '@angular/core';
import { Productos } from '../../models';
import { ServiceProductoService } from '../../services/service-productos.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Productos = [];
  constructor( private serviceProductoService: ServiceProductoService ) { }

  ngOnInit(): void {
    this.obtenerProductos();
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
