export type Usuarios = Usuario[];
export type Productos = Producto[];
export type Proveedores = Proveedor[];

export interface Usuario{
    id: number;
    nombre: string;
    apellido: string;
    email: string;
}

export interface Producto{
    id: number;
    nombre: string;
    detalle: string;
    cantidad: string;
    precio: number;
    categoria: number;
}

export interface Proveedor{
    id: number;
    nombre: string;
    direccion: string;
    nit: number;
    telefono: number;
}
