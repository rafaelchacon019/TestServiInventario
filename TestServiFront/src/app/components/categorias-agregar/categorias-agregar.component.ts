import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceCategoriasService } from '../../services/service-categorias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias-agregar',
  templateUrl: './categorias-agregar.component.html',
  styleUrls: ['./categorias-agregar.component.css']
})
export class CategoriasAgregarComponent implements OnInit {

  public formularioGrupo: FormGroup;

  constructor(private serviceCategoriasService: ServiceCategoriasService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') === null){
      this.router.navigateByUrl('/login');
    }
    this.inicializarFormulario();
  }


   get nombreNovalido(){
    return  this.formularioGrupo.get('nombre').invalid && this.formularioGrupo.get('nombre').touched;
  }



  inicializarFormulario(){
    this.formularioGrupo = this.formBuilder.group({
      id: 0,
      nombre: ['', Validators.required]
    });
  }


  agregarCategoria(){
    this.serviceCategoriasService.agregarCategoria(this.formularioGrupo.value).subscribe(
      () => {
        alert('Se agregó la categoria correctamente');
        this.formularioGrupo.reset();
      }
    );
  }


}
