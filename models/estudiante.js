var mongoose = require("mongoose"); //ORM
var Schema = mongoose.Schema; //modulo esquema
//mongoose.connect("mongodb://localhost/guia_estudiante_db"); //conexion con mongodb
var estudianteJSON = {
    codigo_estudiante: Number,
    dni_estudiante: Number,
    apellidos_estudiante: String,//{type:String, required:"El apellido es Obligatorio"},
    nombres_estudiante: String,//{type:String, required:"El nombre es necesario"},
    facultad_estudiante: String,//{type:String, required:"La facultad es requerida"},
    escuela_estudiante: String,//{type:String, required:"la escuela es requerida"},
    serie_estudiante: String//{type:String, required:"la serrie es requerida"},
}; //estructura del esquema
var schema_estudiante = Schema(estudianteJSON); //esquema de estudiante
var Estudiante = mongoose.model("Estudiante", schema_estudiante); //modelo Estudiante
module.exports.Estudiante = Estudiante; //export