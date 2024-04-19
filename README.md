# PRUEBA TECNICA en CodeIgniter4

## What is?

Este código pertenece a una prueba técnica realizada con el framework CodeIgniter en lenguaje PHP.
Más información la puedes encontrar en: [official site](https://codeigniter.com).

El código fué realizado en la versión 8.

## Instalación Manual

Primero realizaremos la instalación desde este repositorio, ya sea descargando el código directamente
en formato ZIP ó por medio de GIT con el siguiente comando:
`git clone git@github.com:UriIntelldev/pruebatecnica.git`

Posteriormente procedemos a crear la base de datos llamada: `pruebatenica` en MySQL o MariaDB,
según sea el caso.

Postiormente procedemos a importar el archivo `pruebatenica.sql` que viene en el sistema de
directorios raíz en nuestra base de datos con phpmyadmin.

Cuando hayamos importado el archivo, podemos revisar las afectaciones a la base de datos de nuestra
`app`. 

Configuramos nuestras conexiones a la base de datos en el archivo `.env` de nuestro folder principal de la aplicación.

Finalizamos configurando un VHOST ya sea en nuestros archivos locales o en nuestro WAMP Server o XAMP Server,
ó algun servidor que pueda leer nuestro framework para acceder a nuestro blog.

**Por favor** Verifique que la conexión a la base de datos local está bien establecida !

## Instalación Automatica con Composer

Primero realizaremos la instalación desde este repositorio, ya sea descargando el código directamente
en formato ZIP ó por medio de GIT con el siguiente comando:
`git clone git@github.com:UriIntelldev/pruebatecnica.git`

Configuramos nuestras conexiones a la base de datos en el archivo `.env` de nuestro folder principal de la aplicación. 

Verificamos que exista una base de datos llamada `pruebatecnica`.

Posterior ejecutamos la migración con CI: `php spark migrate`.

Después ejecutamos la inserción del registro Administrador con CI: `php spark db:seed UserSeeder`.

Finalizamos inicializando el CI para levantar el servidor local integrado con el framework: `php spark serve`. Esto
levantará nuestro servidor en la url: `http://localhost:8080`.

**Por favor** Verifique que la conexión a la base de datos local está bien establecida !

## Accesos

Usted puede acceder al panel de control desde: `http://localhost:8080/admin`, que es donde se encontrará su
servidor levantado.

El usuario es: `admin` y la contraseña es: `admin`.

## Requirementos del Servidor

Esta App se creo en la version 8.3.0 PHP version 7.1 o superior es requerido.