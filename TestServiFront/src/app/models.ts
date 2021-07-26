export type Usuarios = Usuario[];
export type Productos = Producto[];
export type Proveedores = Proveedor[];
export type Categorias = Categoria[];

export interface Usuario{
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    password: string;
}

export interface Producto{
    id: number;
    nombre: string;
    detalle: string;
    cantidad: string;
    precio: number;
    categoria: number;
    usuario: Usuarios;
    proveedor: Proveedores;
}

export interface Proveedor{
    id: number;
    nombre: string;
    direccion: string;
    nit: number;
    telefono: number;
}

export interface Categoria{
    id: number;
    nombre: string;
}
