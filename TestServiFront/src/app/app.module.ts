import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_ROUTING } from './app.routes';


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
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
