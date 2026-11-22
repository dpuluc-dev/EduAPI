// Cargamos el archivo de configuracion que contiene los datos de conexion a la base datos
const dbConfig = require("../config/db.config.js");
//Importamos Sequelize, el 'ORM' que nos permite trabajar con postgreSQL como objetos JS
const Sequelize = require("sequelize");
// Creamos una instancia de o para Sequelize con los parametros de conexion, incluyendo SSL para Neon
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST, // Direccion del servidor (host) de la base de datos
    dialect: dbConfig.dialect, // el tipo de base de datos en este caso Postgres
    //Configuracion de 'pool'  para optimizar el rendimiento
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});
// Creamos un objeto 'db' que exportamos para acceder a Sequelize y los modelos desde otras partes del proyecto
const db = {};
// Asignamos la clase Sequelize al objetos 'db' util si se requiere usar metodos ORM manualmente
db.Sequelize = Sequelize;
// Asignamos la instancia de conexion Sequelize con los parametros defenidos
db.sequelize = sequelize;
// Importamos el modelo del usuario desde la carpeta 'models' y lo registramos en el objeto 'db'
// Le pasamos la instancia de conexion 'sequelize' como argumentos
db.usuarios = require("./usuario.models.js")(Sequelize, sequelize);
// Exportamos el objeto 'db' para que cualquier modulos lo pueda utilizar
module.exports = db; 
