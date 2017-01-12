var mongoose = require("mongoose"); //ORM
var Schema = mongoose.Schema; //modulo esquema
//mongoose.connect("mongodb://localhost/guia_estudiante_db"); //conexion con mongobd
var estadoJSON = {
    idEstudiante: Number,
    idCurso: Number,
    estado: String
}; //estructura del esquema
var schema_estado = Schema(estadoJSON); //esquema de curso
var Estado = mongoose.model("Estado", schema_estado); //modelo de curso
module.exports.Estado = Estado;