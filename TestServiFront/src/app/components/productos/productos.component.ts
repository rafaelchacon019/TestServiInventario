import { Component, OnInit } from '@angular/core';
import { Productos, Categorias } from '../../models';
import { ServiceProductoService } from '../../services/service-productos.service';
import { ServiceCategoriasService } from '../../services/service-categorias.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  categorias: Categorias = [];
  productos: Productos = [];
  constructor( private serviceProductoService: ServiceProductoService,
               private serviceCategoriasService: ServiceCategoriasService ) { }

  ngOnInit(): void {
    this.obtenerProductos();
    this.obtenerCategorias();
  }



  obtenerProductos(){
    this.serviceProductoService.obtenerProductos().subscribe(
      (productos) => {
        this.productos = productos;
        console.log(productos);
      }
    );
  }

  obtenerCategorias(){
    this.serviceCategoriasService.obtenerCategorias().subscribe(
      (categorias) => {
        this.categorias = categorias;
        console.log(categorias);
      }
    );
  }

}
