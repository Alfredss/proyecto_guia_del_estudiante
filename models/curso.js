var mongoose = require("mongoose");	//ORM

var Schema = mongoose.Schema; //modulo esquema

mongoose.connect("mongodb://localhost/guia_estudiante_db"); //conexion con mongobd

var cursoJSON = {
	sigla: String,
	nombre: String,
	credito: Number,
	horas_teoricas: Number,
	horas_practica: Number,
	horas_laboratorio: Number,
	requisito: String,
	departamento: String,
	estado: String, 	// aprobado / desaprobado
	tipo_curso: String  // curso llave
	serie: String

	descripcion: String,
	objetivos: String,
	contenido_curso: String,
	bibliografia: String, 
	dificultad: String,
	conocimientos_previos: String,
	proyectos: String,
	horas_dedicacion: String,
	otros: String

};//estructura del esquema

var schema_curso = Schema(cursoJSON); //esquema de curso

var Curso = mongoose.model("Curso", schema_curso); //modelo de curso

module.exports = Curso;



