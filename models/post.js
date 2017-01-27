var mongoose = require("mongoose"); //ORM
var Schema = mongoose.Schema; //modulo esquema
//var Usuario = require("usuario.js").Usuario;
//mongoose.connect("mongodb://localhost/guia_estudiante_db"); //conexion con mongodb
var postJSON = {
    titulo: {type:String, required:"titulo obligatorio"},
    cuerpo: {type: String, required:"cuerpo obligatorio"},
    usuario: {type: Schema.ObjectId, ref:"Usuario"}
}; //estructura del esquema
var schema_post = Schema(postJSON); //esquema de estudiante
var Post = mongoose.model("Post", schema_post); //modelo Estudiante
module.exports.Post = Post; //export