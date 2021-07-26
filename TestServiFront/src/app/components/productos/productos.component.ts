import { Component, OnInit } from '@angular/core';
import { Productos, Categorias } from '../../models';
import { ServiceProductoService } from '../../services/service-productos.service';
import { ServiceCategoriasService } from '../../services/service-categorias.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  filtroBusqueda = '';
  categorias: Categorias = [];
  productos: Productos = [];
  constructor( private serviceProductoService: ServiceProductoService,
               private serviceCategoriasService: ServiceCategoriasService,
               private router: Router ) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') === null){
      this.router.navigateByUrl('/login');
    }
    this.obtenerProductos();
    this.obtenerCategorias();
  }



  obtenerProductos(){
    this.serviceProductoService.obtenerProductos().subscribe(
      (productos) => {
        this.productos = productos;
      }
    );
  }

  obtenerCategorias(){
    this.serviceCategoriasService.obtenerCategorias().subscribe(
      (categorias) => {
        this.categorias = categorias;
      }
    );
  }

  eliminarProducto(idProducto: number){
    this.serviceProductoService.eliminarProducto(idProducto).subscribe(
      () => {
        alert('Se elimino el producto correctamente');
        this.obtenerProductos();
      }
    );
  }

}
