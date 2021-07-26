import { Component, OnInit } from '@angular/core';
import { Producto, Proveedores, Categorias } from '../../models';
import { ServiceProductoService } from '../../services/service-productos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceCategoriasService } from '../../services/service-categorias.service';
import { ServiceProveedorService } from '../../services/service-proveedor.service';

@Component({
  selector: 'app-productos-editar',
  templateUrl: './productos-editar.component.html',
  styleUrls: ['./productos-editar.component.css']
})
export class ProductosEditarComponent implements OnInit {

  public formularioGrupo: FormGroup;
  producto: Producto;
  idProducto: number;
  proveedores: Proveedores = [];
  categorias: Categorias = [];



  constructor( private serviceProductoService: ServiceProductoService,
               private serviceCategoriasService: ServiceCategoriasService,
               private serviceProveedorService: ServiceProveedorService,
               private rutaActiva: ActivatedRoute,
               private formBuilder: FormBuilder,
               private router: Router ) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') === null){
      this.router.navigateByUrl('/login');
    }
    this.idProducto = this.rutaActiva.snapshot.params.idProducto;
    this.inicialiazarFormulario();
    this.obtenerProducto();
    this.obtenerCategorias();
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
  get categoriaNovalido(){
    return  this.formularioGrupo.get('categoria').invalid && this.formularioGrupo.get('categoria').touched;
  }
  get proveedorNovalido(){
    return  this.formularioGrupo.get('proveedor').invalid && this.formularioGrupo.get('proveedor').touched;
  }

  obtenerProducto(){
    this.serviceProductoService.obtenerProductoPorId(this.idProducto).subscribe(
      (producto) => {
        this.producto = producto[0];
        this.formularioGrupo.get('nombre').setValue(this.producto.nombre);
        this.formularioGrupo.get('detalle').setValue(this.producto.detalle);
        this.formularioGrupo.get('cantidad').setValue(this.producto.cantidad);
        this.formularioGrupo.get('precio').setValue(this.producto.precio);
        this.formularioGrupo.get('categoria').setValue(this.producto.categoria);
        this.formularioGrupo.get('proveedor').setValue(this.producto.proveedor[0].id);
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

  inicialiazarFormulario(){
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

  actualizarProducto(){
    const productoModificado: Producto = {
      id: this.formularioGrupo.get('id').value,
      nombre: this.formularioGrupo.get('nombre').value,
      detalle: this.formularioGrupo.get('detalle').value,
      cantidad: this.formularioGrupo.get('cantidad').value,
      precio: this.formularioGrupo.get('precio').value,
      categoria: this.formularioGrupo.get('categoria').value,
      usuarios: [this.formularioGrupo.get('usuarios').value],
      proveedor: [ this.formularioGrupo.get('proveedor').value],
    };
    this.serviceProductoService.actualizarProducto( this.idProducto, productoModificado ).subscribe(
      () => {
        alert('Se actualizó el producto correctamente');
        this.router.navigate(['/productos']);
      }
    );
  }

}
