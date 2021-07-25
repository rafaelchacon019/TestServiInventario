import { Component, OnInit } from '@angular/core';
import { ServiceCategoriasService } from '../../services/service-categorias.service';
import { Categorias } from '../../models';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  filtroBusqueda = '';
  categorias: Categorias = [];

  constructor(private serviceCategoriasService: ServiceCategoriasService) { }

  ngOnInit(): void {
    this.obtenerCategorias();
  }

  // tslint:disable-next-line:typedef
  obtenerCategorias(){
    this.serviceCategoriasService.obtenerCategorias().subscribe(
      (categorias => {
        this.categorias = categorias;
        console.log(categorias);
      })
    );
  }

  // tslint:disable-next-line:typedef
  eliminarCategoria(idCategoria: number){
    this.serviceCategoriasService.eliminarCategoria(idCategoria).subscribe(
      () => {
        alert('Se elimino el proveedor correctamente');
        this.obtenerCategorias();
      }
    );
  }

}
