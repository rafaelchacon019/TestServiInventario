import { Component, OnInit } from '@angular/core';
import { ServiceProductoService } from '../../services/service-productos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Productos, Categorias } from '../../models';
import { ServiceCategoriasService } from '../../services/service-categorias.service';

@Component({
  selector: 'app-productos-agregar',
  templateUrl: './productos-agregar.component.html',
  styleUrls: ['./productos-agregar.component.css']
})
export class ProductosAgregarComponent implements OnInit {

  categorias: Categorias = [];
  productos: Productos = [];

  public formularioGrupo: FormGroup;
  constructor(private serviceProductoService: ServiceProductoService,
              private serviceCategoriasService: ServiceCategoriasService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.inicializarFormulario();
  }

   get nombreNovalido(){
    return  this.formularioGrupo.get('nombre').invalid && this.formularioGrupo.get('nombre').touched;
  }

   get detalleNovalido(){
    return  this.formularioGrupo.get('detalle').invalid && this.formularioGrupo.get('detalle').touched;
  }

   get precioNovalido(){
    return  this.formularioGrupo.get('precio').invalid && this.formularioGrupo.get('precio').touched;
  }

   get cantidadNovalido(){
    return  this.formularioGrupo.get('cantidad').invalid && this.formularioGrupo.get('cantidad').touched;
  }

   get usuarioNovalido(){
    return  this.formularioGrupo.get('usuarios').invalid && this.formularioGrupo.get('usuarios').touched;
  }

  inicializarFormulario(){
    this.formularioGrupo = this.formBuilder.group({
      id: 0,
      nombre: ['', Validators.required],
      detalle: ['', Validators.required],
      cantidad: [null, Validators.required],
      precio: [null, Validators.required],
      categoria: ['', Validators.required],
      usuarios: ['', Validators.required],
      proveedor: ['', Validators.required],
    });
  }

  guardarProducto(){
    this.serviceProductoService.agregarProducto(this.formularioGrupo.value).subscribe(
      () => {
        alert('Se agregó el usuario correctamente');
        this.formularioGrupo.reset();
      }
    );
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
