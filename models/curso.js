var mongoose = require("mongoose"); //ORM
var Schema = mongoose.Schema; //modulo esquema
//mongoose.connect("mongodb://localhost/guia_estudiante_db"); //conexion con mongobd
var cursoJSON = {
    sigla: {type:String, required:"La sigla de curso es obligatoria"},
    nombre: {type:String, required:"La nombre de curso es obligatoria"},
    credito: Number,
    horas_teoricas: Number,
    horas_practica: Number,
    horas_laboratorio: Number,
    requisito: {type:String, required:"La requisito de curso es obligatoria"},
    departamento: {type:String, required:"La departamento de curso es obligatoria"},
    estado: String, // aprobado / desaprobado
    tipo_curso: {type:String, required:"El tipo de curso es obligatoria"}, // curso llave
    serie: String,
    siglo: Number,
    descripcion: String,
    objetivos: String,
    contenido_curso: String,
    bibliografia: String,
    dificultad: String,
    conocimientos_previos: String,
    proyectos: String,
    horas_dedicacion: String,
    otros: String
}; //estructura del esquema
var schema_curso = Schema(cursoJSON); //esquema de curso
var Curso = mongoose.model("Curso", schema_curso); //modelo de curso
module.exports.Curso = Curso;