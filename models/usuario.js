var mongoose = require('mongoose'); //ORM
var Schema = mongoose.Schema; //modulo esquema
mongoose.connect("mongodb://localhost/guia_estudiante_db"); //conexion con mongodb
var usuarioJSON = {
    codigo_estudiante: Number,
    nombre_usuario: String,//{type:String, required:"El nombre de usuario es requerido", maxlength:[30,"nombre de usaurio muy grande"]},
    password: String//{type:String, required:"El password es requerido", minlength:[6,"El password es muy corto"]}
}; //creamos la estructura del esquema
var schema_usuario = Schema(usuarioJSON); //creamos el esquema
var Usuario = mongoose.model("Usuario", schema_usuario); //creamos el modelo
module.exports.Usuario = Usuario; //exportamos
/*
	coleccion : tabla
	documentos : registros
*/