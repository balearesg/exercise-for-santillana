# Configuración de DataModel (dialectOptions)

Este fragmento de código configura la biblioteca DataModel para trabajar con tu base de datos. DataModel es una
biblioteca que maneja y gestiona consultas en forma de objetos, proporcionando una interfaz sencilla para interactuar
con modelos basados en Sequelize.

## Variables de Entorno

Esta configuración utiliza variables de entorno definidas en un archivo `.env`. Se utilizan las siguientes variables de
entorno:

-   `DB_HOST`: Nombre de host de tu servidor de base de datos.
-   `DB_USER`: Nombre de usuario de la base de datos.
-   `DB_PASS`: Contraseña de la base de datos.
-   `DB_NAME`: Nombre de la base de datos.
-   `DB_TIMEZONE`: Zona horaria de la base de datos.
-   `DB_DIALECT`: Dialecto de la base de datos (por ejemplo, 'mysql', 'postgres', etc.).

## Objeto de Configuración

Se crea un objeto de configuración con las variables de entorno proporcionadas y otras configuraciones necesarias:

```javascript
const config = {
	name: DB_NAME,
	user: DB_USER,
	password: DB_PASS,
	host: DB_HOST,
	timeZone: DB_TIMEZONE,
	dialect: DB_DIALECT,
	dialectOptions: {
		options: {
			encrypt: false,
			trustServerCertificate: true,
		},
	},
	initModels,
};
```

-   `name`: Nombre de la base de datos.
-   `user`: Usuario de la base de datos.
-   `password`: Contraseña de la base de datos.
-   `host`: Nombre del host de la base de datos.
-   `timeZone`: Zona horaria de la base de datos.
-   `dialect`: Dialecto de la base de datos.
-   `dialectOptions`: Opciones adicionales del dialecto (si es necesario).

## Opciones del Dialecto

Dentro del objeto dialectOptions, se encuentran las siguientes configuraciones específicas del dialecto:

-   `encrypt`: Esta opción generalmente se usa con bases de datos Microsoft SQL Server. Cuando está configurada en
    false, indica que la conexión a la base de datos no debe utilizar cifrado.

-   `trustServerCertificate`: Esta opción también se usa con bases de datos Microsoft SQL Server. Cuando se establece en
    true, significa que la aplicación confía en el certificado del servidor de base de datos, lo que puede ser útil en
    entornos de desarrollo o pruebas.

### Nota Importante sobre **encrypt** 📌 :

El parámetro `encrypt` en las opciones del dialecto (`dialectOptions`) se utiliza para cifrar las solicitudes a la base
de datos. Es importante tener en cuenta que, en un entorno de desarrollo o pruebas, puede ser útil desactivar el cifrado
estableciendo `encrypt` en `false` para facilitar la depuración y las pruebas.

Sin embargo, en un entorno de producción, es crítico habilitar el cifrado estableciendo `encrypt` en `true`. Desactivar
el cifrado en producción podría generar vulnerabilidades de seguridad en tu aplicación. Asegúrate de configurar
adecuadamente esta opción según las mejores prácticas de seguridad de tu proyecto.

## Inicialización de DataModel

Finalmente, se inicializa la instancia de DataModel con la configuración proporcionada:

```javascript
export /*bundle*/ const DataModel = DM.get(config);
```

Esta instancia, llamada DataModel, es la que utilizarás para interactuar con los modelos basados en Sequelize. Puedes
realizar diversas operaciones, como crear, leer, actualizar y eliminar registros utilizando esta instancia.
