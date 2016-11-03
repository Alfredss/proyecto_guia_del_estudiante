var mongoose = require('mongoose'); //ORM
var Schema = mongoose.Schema;	
mongoose.connect("mongodb://localhost/guia_estudiante_bd");

//creamos la estructura del esquema
var usuarioJSON = {
	nombre_usuario: String,
	password : String
}

//creamos el esquema
var schema_usuario = Schema(usuarioJSON);

//creamos el modelo
var Usuario = mongoose.model("Usuario", "schema_usuario");

//exportamos
module.exports.Usuario = Usuario;


/*
	coleccion : tabla
	documentos : registros
*/

