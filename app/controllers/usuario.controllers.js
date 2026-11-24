// Importamos db de los modelos en este caso si tenemos uno o mas, se puede referenciar db. "nombreModelo"
const db = require("../models/");
// Es este caso nos iremos al modelo del usuario
const Usuario = db.usuarios;
// El Op es como un "catálogo" de operadores (comparación y lógicos) pero para usar dentro de las consultas a la base de datos.
const Op = db.Sequelize.Op;

// Crear y guardar un nuevo cliente
exports.create = (req, res) => {
    /*Validamos dentro del 'req'uest  que no venga vacio el nombre o el primer atributo del objeto.
    de lo contrario retornara error!*/ 
    if(!req.body.nombre_completo){
        res.status(400).send({
            message: "El contenido no puede estar vacio!"
        }); 
        return; 
    }
} 

// Aqui creamos un usuario, pero para eso, primero guardo los datos en una variable y 
// luego esa variabla la mando como parametro!
const usuario = {
    nombre_completo: req.body.nombre_completo,
    nombre_usuario: req.body.nombre_usuario, 
    password_hash: req.body.password_hash, 
    telefono: req.body.telefono, 
    direccion: req.body.direccion, 
    correo: req.body.correo, 
    fecha_ingreso: req.body.fecha_ingreso, 
    // Utilizando ? nos va ayudar a indicar que parametro puede ser opcional dado que si no viene
    // le podemos asignar un valor defaul
    status: req.body.status ? req.body.status : false
}; 

// Guardar un nuevo usuario en la base de datos
Usuario.create(usuario)
 .then(data => {
    res.send(data); 
 }) 
 .catch(err => {
    res.status(500).send({
    message: 
       err.message || "Se produjo un error al crear al usuario!"
    });
 });

// Recuperar todos los usuarios de la base de datos
exports.fillAll = (req, res) => {
const nombre_usuario = req.body.nombre_usuario; 
let condition = nombre_usuario ? { nombre_usuario: { [Op.iLike]: '%${nombre_usuario}' } } : null;
Usuario.finAll({where: condition})
.then(data =>{
res.send(data)
})
.catch(err => {
res.status(500).send({
  message: "Error al recuperar usuario con id = "+ id
        }); 
    });
}; 

// Actualizar un usuario mediante el id
exports.update = (req, res) =>{ 
    // Buscamos primero por su id
    const id = req.params.id;  
    Usuario.update(req.body, {
        where: {id: id}
    }) 
    .the(num =>{
       if(num == 1){
        res.send({message: "El Usurio se actualizo correctamente!"});
       }else{
        res.send({message: "Se produjo un error al actualizar el usuario!"});
       }
    }) 
    .catch(err => {
        res.status(500).send({message: "Error al actuazalizar usuario con id = " + id });
    }); 
}; 

