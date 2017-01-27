var mongoose = require("mongoose"); //ORM
var Schema = mongoose.Schema; //modulo esquema
//mongoose.connect("mongodb://localhost/guia_estudiante_db"); //conexion con mongodb
var comentarioJSON = {
	cuerpo: {type:String, required:"Cuerpo del comentario obligatorio"},
	usuario: {type: Schema.ObjectId, ref:"Usuario"},
	post: {type: Schema.ObjectId, ref:"Post"}
}; //estructura del esquema
var schema_comentario = Schema(comentarioJSON); //esquema de estudiante
var Comentario = mongoose.model("Comentario", schema_comentario); //modelo Estudiante
module.exports.Comentario = Comentario; //export