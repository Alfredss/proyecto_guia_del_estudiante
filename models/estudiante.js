var mongoose = require("mongoose"); //ORM
var Schema = mongoose.Schema; //modulo esquema
//mongoose.connect("mongodb://localhost/guia_estudiante_db"); //conexion con mongodb
var estudianteJSON = {
    codigo_estudiante: Number,
    dni_estudiante: Number,
    apellidos_estudiante: String,
    nombres_estudiante: String,
    facultad_estudiante: String,
    escuela_estudiante: String,
    serie_estudiante: String,
}; //estructura del esquema
var schema_estudiante = Schema(estudianteJSON); //esquema de estudiante
var Estudiante = mongoose.model("Estudiante", schema_estudiante); //modelo Estudiante
module.exports.Estudiante = Estudiante; //export