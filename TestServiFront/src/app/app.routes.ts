import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from 'src/app/components/home/home.component';
import { UsuariosComponent } from 'src/app/components/usuarios/usuarios.component';
import { ProductosComponent } from 'src/app/components/productos/productos.component';
import { ProductosAgregarComponent } from 'src/app/components/productos-agregar/productos-agregar.component';
import { ProductosEditarComponent } from 'src/app/components/productos-editar/productos-editar.component';
import { CategoriasComponent } from 'src/app/components/categorias/categorias.component';
import { CategoriasAgregarComponent } from 'src/app/components/categorias-agregar/categorias-agregar.component';
import { CategoriasEditarComponent } from 'src/app/components/categorias-editar/categorias-editar.component';
import { LoginComponent } from 'src/app/components/login/login.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'agregarProducto', component: ProductosAgregarComponent },
    { path: 'editarProducto', component: ProductosEditarComponent },
    { path: 'categorias', component: CategoriasComponent },
    { path: 'agregarCategoria', component: CategoriasAgregarComponent },
    { path: 'editarCategoria', component: CategoriasEditarComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

