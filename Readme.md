# DAM PROYECT (Trabajo Final)

## Introducción

Este proyecto fue elaborado en carácter de presentación como trabajo final de la materia Desarrollo de aplicaciones multiplataforma (DAM) dictada en la especialización en Internet de las cosas de la UBA. El repositorio consiste en una aplicación cuyo frontend fue desarrollado en ionic 6.12.2 y un contenedor de docker con una base de datos MySQL que se consulta a través de una API en NodeJS v12.20.0 

Permite simular el control de apertura y cierre de un conjunto de electrovalvulas para facilitar el riego. Ofreciendo al usuario distintas instancias de visualización de los datos sobre el estado del suelo.

Dentro de la aplicación:

* se mostrara un listado de todos los dispositivos registrados en el sistema.
* se podrá visualizar la ultima medición de cada sensor en un medidor analógico de presión en [kPa].
* consultar todo el historial de medición de cada sensor.
* abrir o cerrar la electrovalvula para controlar el riego.
* consultar y armar un historial de riegos.

## Estructura 

Dentro del directorio ProyectoFinal tenemos:

* El archivo de docker-compose.yml que contiene los comandos necesarios para levantar parte de los servicios de la base de datos.
* /db como el directorio que contiene el archivo .sql para construir la estructura de tablas en la base de datos. 
* /TpFinal que aloja el proyecto de ionic
* /back que contiene la API de NodeJS

## Requisitos necesarios

Para poner en marcha este proyecto es necesaria la instalación de:

* Docker y Docker-compose
* Ionic
* NodeJS

Nota: Puede comprobar si tiene instalado los requisitos ejecutando en una ventana de comando:

* `docker -v`
* `docker-compose -v`
* `ionic -v`
* `node -v`

## Ejecución

Finalizadas las instalaciones:

1. Crearse una nueva carpeta y abrir un terminal en ella para clonarse este repositorio ejecutando el comando 

`git clone https://github.com/IngBotek/TpFinalDAM2020.git`

2. Habiendo clonado el repositorio crear allí mismo una nueva_carpeta, parase dentro de ella en un terminal y crear un proyecto en blanco de ionic ejecutando el comando:

`ionic start ionicProyect blank`

dentro de las opciones de creación elegir:
* freamework angular.
* no usar capacitor.

3. Finalizada la creación del proyecto en blanco copiar el contenido de la carpeta Tpfinal dentro de la carpeta ionicProyect. Una vez copiado abrir un terminal allí y ejecutar:

`npm i highcharts --save && npm i @swimlane/ngx-datatable --save && npm i moment --save`

4. Terminando todas las instalaciones:

* abriendo un terminal en /ProyectoFinal ejecutar el comando `docker-compose up` y esperar a que este termine de levantarse (Puede ocurrir que haya una falla al levantar MySQL, si esto pasa, interrumpir con CTRL + C , escribir `docker-compose down`, esperar a que termine la baja, y luego levantar nuevamente con `docker-compose up`).

* habiendo finalizado el levante de docker, abrir un terminal en /back del repositorio clonado y ejecutar `node index.js` . Si la API se levanta con éxito si aparece un aviso "API funcionando". En caso de que ocurra algún error, puede que sea necesario bajar y levantar nuevamente el contenedor de docker. 

* Finalmente en /ionicProyect abrir un terminal y ejecutar `ionic serve`.
