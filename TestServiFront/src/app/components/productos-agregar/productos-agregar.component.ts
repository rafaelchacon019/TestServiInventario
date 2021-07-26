import { Component, OnInit } from '@angular/core';
import { ServiceProductoService } from '../../services/service-productos.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Productos, Categorias, Proveedores, Producto } from '../../models';
import { ServiceCategoriasService } from '../../services/service-categorias.service';
import { ServiceProveedorService } from '../../services/service-proveedor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos-agregar',
  templateUrl: './productos-agregar.component.html',
  styleUrls: ['./productos-agregar.component.css']
})
export class ProductosAgregarComponent implements OnInit {

  categorias: Categorias = [];
  productos: Productos = [];
  proveedores: Proveedores = [];

  public formularioGrupo: FormGroup;
  constructor(private serviceProductoService: ServiceProductoService,
              private serviceCategoriasService: ServiceCategoriasService,
              private serviceProveedorService: ServiceProveedorService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') === null){
      this.router.navigateByUrl('/login');
    }
    this.inicializarFormulario();
    this.obtenerCategorias();
    this.obtenerProductos();
    this.obtenerProveedor();
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
      usuarios: [localStorage.getItem('token'), Validators.required],
      proveedor: ['', Validators.required],
    });
  }

  guardarProducto(){
    const productoNuevo: Producto = {
      id: this.formularioGrupo.get('id').value,
      nombre: this.formularioGrupo.get('nombre').value,
      detalle: this.formularioGrupo.get('detalle').value,
      cantidad: this.formularioGrupo.get('cantidad').value,
      precio: this.formularioGrupo.get('precio').value,
      categoria: this.formularioGrupo.get('categoria').value,
      usuarios: [this.formularioGrupo.get('usuarios').value],
      proveedor: [ this.formularioGrupo.get('proveedor').value],
    };
    this.serviceProductoService.agregarProducto(productoNuevo).subscribe(
      () => {
        alert('Se agregó el producto correctamente');
        this.formularioGrupo.reset();
      }
    );
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

  obtenerProveedor(){
    this.serviceProveedorService.obtenerProveedor().subscribe(
      (proveedores) => {
        this.proveedores = proveedores;
      }
    );
  }

}
