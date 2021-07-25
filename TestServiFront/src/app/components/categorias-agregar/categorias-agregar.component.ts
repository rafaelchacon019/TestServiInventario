import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceCategoriasService } from '../../services/service-categorias.service';

@Component({
  selector: 'app-categorias-agregar',
  templateUrl: './categorias-agregar.component.html',
  styleUrls: ['./categorias-agregar.component.css']
})
export class CategoriasAgregarComponent implements OnInit {

  public formularioGrupo: FormGroup;

  constructor(private serviceCategoriasService: ServiceCategoriasService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  // tslint:disable-next-line:typedef
  inicializarFormulario(){
    this.formularioGrupo = this.formBuilder.group({
      id: 0,
      nombre: ['', Validators.required]
    });
  }

  // tslint:disable-next-line:typedef
  agregarCategoria(){
    console.log(this.formularioGrupo);

    this.serviceCategoriasService.agregarCategoria(this.formularioGrupo.value).subscribe(
      () => {
        alert('Se agregó la categoria correctamente');
        this.formularioGrupo.reset();
      }
    );
  }


}
