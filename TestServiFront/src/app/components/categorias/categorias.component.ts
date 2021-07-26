import { Component, OnInit } from '@angular/core';
import { ServiceCategoriasService } from '../../services/service-categorias.service';
import { Categorias } from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  filtroBusqueda = '';
  categorias: Categorias = [];

  constructor(private serviceCategoriasService: ServiceCategoriasService,
              private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') === null){
      this.router.navigateByUrl('/login');
    }
    this.obtenerCategorias();
  }

  obtenerCategorias(){
    this.serviceCategoriasService.obtenerCategorias().subscribe(
      (categorias => {
        this.categorias = categorias;
      })
    );
  }

  eliminarCategoria(idCategoria: number){
    this.serviceCategoriasService.eliminarCategoria(idCategoria).subscribe(
      () => {
        alert('Se elimino la categoria correctamente');
        this.obtenerCategorias();
      }
    );
  }

}
