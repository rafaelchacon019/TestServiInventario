import { Component, OnInit } from '@angular/core';
import { ServiceCategoriasService } from '../../services/service-categorias.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../../models';

@Component({
  selector: 'app-categorias-editar',
  templateUrl: './categorias-editar.component.html',
  styleUrls: ['./categorias-editar.component.css']
})
export class CategoriasEditarComponent implements OnInit {

  public formularioGrupo: FormGroup;
  categoria: Categoria;
  idCategoria: number;

  constructor(private serviceCategoriasService: ServiceCategoriasService,
              private formBuilder: FormBuilder,
              private rutaActiva: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.idCategoria = this.rutaActiva.snapshot.params.idCategoria;
    this.obtenerCategoria();
    this.inicializarFormulario();
  }

  // tslint:disable-next-line:typedef
  obtenerCategoria(){
    this.serviceCategoriasService.obtenerCategoriaPorId(this.idCategoria).subscribe(
      (categoria) => {
        this.categoria = categoria[0];
        this.formularioGrupo.get('nombre').setValue(this.categoria.nombre);
      }
    );
  }

  // tslint:disable-next-line:typedef
  inicializarFormulario(){
    this.formularioGrupo = this.formBuilder.group({
      id: this.idCategoria,
      nombre: ['', Validators.required]
    });
  }

  // tslint:disable-next-line:typedef
  actualizarCategoria(){
    this.serviceCategoriasService.actualizarCategoria(this.idCategoria, this.formularioGrupo.value).subscribe(
      () => {
        alert('Se actualizó la categoria correctamente');
        this.router.navigate(['/categorias']);
      }
    );
  }

}
