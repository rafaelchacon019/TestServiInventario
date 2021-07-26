import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_ROUTING } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { CategoriasEditarComponent } from './components/categorias-editar/categorias-editar.component';
import { CategoriasAgregarComponent } from './components/categorias-agregar/categorias-agregar.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductosEditarComponent } from './components/productos-editar/productos-editar.component';
import { ProductosAgregarComponent } from './components/productos-agregar/productos-agregar.component';
import { HeaderComponent } from './components/header/header.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { ProveedorAgregarComponent } from './components/proveedor-agregar/proveedor-agregar.component';
import { ProveedorEditarComponent } from './components/proveedor-editar/proveedor-editar.component';


import { HttpClientModule } from '@angular/common/http';
import { ServiceUsuarioService } from './services/service-usuario.service';
import { ServiceProductoService } from './services/service-productos.service';
import { ServiceCategoriasService } from './services/service-categorias.service';
import { ServiceProveedorService } from './services/service-proveedor.service';
import { UsuariosEditarComponent } from './components/usuarios-editar/usuarios-editar.component';
import { FiltroPipe } from './pipes/filtro.pipe';
import { ObtenerNombreCategoriaIdPipe } from './pipes/obtener-nombre-categoria-id.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    CategoriasComponent,
    CategoriasEditarComponent,
    CategoriasAgregarComponent,
    ProductosComponent,
    ProductosEditarComponent,
    ProductosAgregarComponent,
    HeaderComponent,
    UsuariosComponent,
    ProveedoresComponent,
    ProveedorAgregarComponent,
    ProveedorEditarComponent,
    UsuariosEditarComponent,
    FiltroPipe,
    ObtenerNombreCategoriaIdPipe,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ServiceUsuarioService,
    ServiceProductoService,
    ServiceCategoriasService,
    ServiceProveedorService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
