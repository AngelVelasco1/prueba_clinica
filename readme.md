# Consultorio clinica Exercise

Aspectos esenciales del proyexto.

## Requisitos previos

Asegúrate de tener instalado lo siguiente antes de iniciar el proyecto:

- Node.js: [instalar Node.js](https://nodejs.org)
- NPM

## Instalación

1. Clona este repositorio en tu máquina local:

   ```shell
   git clone https://github.com/tu-usuario/nombre-del-proyecto.git
   ```

2. Navega hasta el directorio del proyecto:

   ```shell
   cd nombre-del-proyecto
   ```

3. Instala las dependencias del proyecto:

   ```shell
   npm i
   ```
4. Inicia el servidor mediante el comando `npm run dev` y el transpilador mediante `npm run tsc`




## ENV
Antes de ejecutar la aplicación, asegúrate de crear y configurar el archivo de entorno (.env) con la siguiente estructura y reemplazar los valores por los adecuados:

```plaintext

# Configuración general
CONFIG={"hostname": "localhost", "port": 5050}

# Conexión a la base de datos
CONNECT={"host": "localhost", "user": "root", "database": "database", "password": ".....", "port": 3306}
```

## Dependencias

El proyecto utiliza las siguientes dependencias:

- dotenv - 16.3.1
- express - 4.18.2
- mysql2 - 3.5.0
- nodemon - 2.0.22
- class-transformer: 0.5.1
- class-validator
- typescript
- reflect-metadata


##  Uso de Thunder Client

Thunder client es la herramienta en la que se realizan las pruebas de conexion:

1. Elije el metodo apropiado para la consulta
- GET
- POST
- UPDATE
- DELETE

2. Agrega la URL correspondiente:
```
http://{hostname}:{port}/nombre_ruta_correspondiente
```

3. Asegurarse de tener un `content-type: application/json`

4. Si es un envio de datos (POST), agregar el body correspondiente a las columnas requeridas de la tabla

---

## Licencia

Este proyecto está bajo la Licencia ISC.


## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en ponerte en contacto conmigo a través de [email](angelgg2020@outlook.com) o [Linkeind](https://www.linkedin.com/in/angel-velascoo/).
