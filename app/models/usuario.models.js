// Utilizamos 'module.exports' para exportar objetos para que puedar ser utilizados en otras clases
module.exports = (sequelize, Sequelize) => {
    // Usamos sequelize.define para 'definir' el nombre de la en entidad en la BD, en este caso 'usuario'
    // Usamos type: Sequelize para definir el tipo de datos de cada atributo de la entidad
    const Usuario = sequelize.define("usuario", {

        nombre_completo: {
            type: Sequelize.STRING
        },
        nombre_usuario: {
            type: Sequelize.STRING
        },
        password_hash: {
            type: Sequelize.STRING
        },
        telefono: {
            type: Sequelize.STRING
        },
        direccion: {
            type: Sequelize.STRING
        },
        correo: {
            type: Sequelize.STRING
        },
        fecha_ingreso: {
            type: Sequelize.DATEONLY
        },
        status: {
            type: Sequelize.BOOLEAN
        }

    });
    return Usuario;
}