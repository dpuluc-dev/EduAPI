
/*
  
Instalamos los paquetes de 'node.js'

npm init
npm install express sequelize pg pg-hstore cors --save

*/

/* 'module.export' cree este paquete con estos parametros, 
para que cualquier modulo que lo necesite aqui esta! */

module.exports = {

    // parametros de la conexios a la base de datos
    HOST: "ep-rapid-tooth-bd6dhca9-pooler.c-8.us-east-2.aws.neon.tech",
    USER: "neondb_owner",
    DB: "neondb",
    PASSWORD: "npg_6zMrSC8ZkFeP",
    dialect: "postgres",
    // Optimizar el rendimiento de la conexion 
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }

}; 
