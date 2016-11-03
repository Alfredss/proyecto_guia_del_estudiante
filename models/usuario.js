var mongoose = require('mongoose'); //ORM

var Schema = mongoose.Schema;	//modulo esquema

mongoose.connect("mongodb://localhost/guia_estudiante_db"); //conexion con mongodb


var usuarioJSON = {
	codigo_estudiante: Number,
	nombre_usuario: String,
	password : String
};//creamos la estructura del esquema

var schema_usuario = Schema(usuarioJSON);//creamos el esquema


var Usuario = mongoose.model("Usuario", schema_usuario);//creamos el modelo


module.exports.Usuario = Usuario;//exportamos


/*
	coleccion : tabla
	documentos : registros
*/

