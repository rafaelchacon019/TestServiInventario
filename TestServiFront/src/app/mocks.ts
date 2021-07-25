import { Usuarios, Proveedores } from './models';

export const usuariosMock: Usuarios = [
     {
        id: 1,
        nombre: 'Rafael',
        apellido: 'Chacon',
        email: 'rafael@gmail.com',
    },
    {
        id: 2,
        nombre: 'Brandon',
        apellido: 'Amaya',
        email: 'Brandon@gmail.com',
    }
];

export const proveedoresMock: Proveedores = [
    {
        id: 1,
        nombre: 'postobon',
        nit: 123,
        direccion: 'crra a 3',
        telefono: 123456
    },
    {
        id: 2,
        nombre: 'bimbo',
        nit: 1234,
        direccion: 'crra a 3 - 25',
        telefono: 1234567
    }
];




