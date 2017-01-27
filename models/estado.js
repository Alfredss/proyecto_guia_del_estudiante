var mongoose = require("mongoose"); //ORM
var Schema = mongoose.Schema; //modulo esquema
var Estudiante = mongoose.model('Estudiante');
var Curso = mongoose.model('Curso');

//mongoose.connect("mongodb://localhost/guia_estudiante_db"); //conexion con mongobd
var estadoJSON = {
    idEstudiante: Number,//{type: Schema.ObjectId, ref:"Estudiante"},
    idCurso: String,//{type: Schema.ObjectId, ref:"Curso"},
    nombreCurso: String,
    estado: String,
    nota:Number,
}; //estructura del esquema
var schema_estado = Schema(estadoJSON); //esquema de curso
var Estado = mongoose.model("Estado", schema_estado); //modelo de curso
module.exports.Estado = Estado;