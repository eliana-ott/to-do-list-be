# Historial de desarrollo

1. Se pasó la carpeta `service` del front y se creó este proyecto perteneciente al backend.
1. Se especificó la versión de **Node** utilizando `v18`.
1. Se creó archivo `.gitignore`. Se ignoró `node_modules/`.
1. Se removió paquete `fs`. Se aplicó el comando `npm uninstall fs` para que actualice `package-lock.json` y la carpeta `node_modules/`.
1. Se agregó `"type": "module"` a `package.json` para utilizar módulos **ES**.
1. Se cambió la estructura del enrutamiento a una estructura estática.
1. Se probaron las rutas. La ruta base de la **API** es `http://localhost:4000/api` y luego se concatena la ruta requerida.
1. Se removieron los paquetes de **Babel**.
1. Se instaló **ESLint** y se configuraron las reglas básicas para el proyecto.
1. Se corrigieron los archivos del proyecto en base a las reglas de **ESLint**.
1. Se cambió la conexión a la base de datos de manera sincrónica (**async/await**).
1. Se comentó el script para crear las categorias en la base de datos.
1. Se creó script de **npm** para revisar errores de **ESLint** (`npm run eslint`).
1. Se creó script de **npm** para arreglar errores de **ESLint** (`npm run eslint-fix`).
1. Se agregó `.env` al archivo `.gitignore`.
1. Se removió el script para crear las categorias en la base de datos.
1. Se exportaron a un archivo de constantes los valores de las categorias.
1. Se actualizaron los métodos del controlador `TaskController` para volverlos funcionales.
1. Se modificaron los modelos para que reflejen la misma estructura que en el *front-end*.
