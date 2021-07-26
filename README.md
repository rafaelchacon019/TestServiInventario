## TestServiInventario

Sistema para el control de inventarios.

## Requisitos
* [Python 3 .7.x](python.org/downloads/)
* [Django 3.2.5](https://www.djangoproject.com/download/)
* [MySQL](https://www.mysql.com/downloads/)
* [Angular CLI: 11.2.14](https://angular.io/cli)
* [Node 14.17.0](https://nodejs.org/es/)
* [TypeScript: 4.1.2](https://www.typescriptlang.org)

## Instalación del repositorio

Clonar este repositorio y ubicarlo en una carpeta adecuada.

    git clone https://github.com/rafaelchacon019/TestServiInventario.git

## Creación de base de datos
-  Credenciales y activación de entorno de MySQL: 

    mysql -u root -p password

- Creación de base de datos:

     create database inventario

 
## Instalación de dependencias

    pip install -r ubicacionDelArchivo\equirements.txt

## Iniciando la Aplicación
En los siguientes puntos se describe el proceso para arrancar el programa.

### Proceso back-end:
Corra una terminal en la siguiente ubicación:

***\TestServiInventario\testServiBack***

#### 1. Correr migraciones y servidor.
Posterior a la instalación de dependencias y de haber creado la base de datos, se ejecuta los siguientes comandos.

    python manage.py makemigrations
    python manage.py migrate
    python manage.py runserver

### Proceso front-end

Corra una terminal en la siguiente ubicación:

***\TestServiInventario\TestServiFront***

#### 1. Correr servidor.

    ng serve


> **Nota:** Tanto como el **back-end** y el **front-end** deben estar ejecutados, es decir, al mismo tiempo.
