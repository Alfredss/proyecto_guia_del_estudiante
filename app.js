//IMPORTACIONES
var express = require("express");
var app = express();

//IMPORTACIONES MODELOS

//var Usuario = require("./models/usuario.js").Usuario;
//var Estudiante = require("./models/estudiante.js").Estudiante;
var Curso = require("./models/curso.js").Curso;


app.set("view engine", "jade");	//inicializamos el motor de vista
app.use(express.static("public"));	//habilitamos la carpeta public para que almacene recursos




var state = '';
//METODOS GET Y SET
app.get("/", function(req, res){
	/*var curso = new Curso({
		sigla: "ec142",
		nombre: "Microeconomía",
		credito: 3,
		horas_teoricas: 2,
		horas_practica: 2,
		horas_laboratorio: 0,
		requisito: "ec141",
		departamento: "Ciencias Económicas y Administrativas",
		estado: "desaprobado", 	// aprobado / desaprobado
		tipo_curso: "bajo",  // curso llave
		serie: "100",
		siglo: 2
	});

	curso.save(function(){
		console.log("curso guardado");
	});*/
	/*
	var user = new Usuario({
		codigo_estudiante: 12345678,
		nombre_usuario: "admin2",
		password : "1234567",
	});
	
	user.save(function(){
		console.log("datos guardados correctamente");
	});
	*/
	
	Curso.findOne({sigla:'ec142'},"estado",function(err, data){
		state = data.estado;
		//console.log(data);
		//console.log(state);
		module.exports = state;
		res.render("index", {hola:state});
		//module.exports.state=state;
		
	});

	
	
})//acceso a principal


app.get("/estadisticas", function(req, res){
	res.render("estadisticas");	
	console.log(state);
})//acceso a estadisticas


app.get("/blog", function(req, res){
	res.render("blog");
})//acceso a blog


app.get("/informacion", function(req, res){
	res.render("informacion");
})//acceso a informacion


app.get("/configuracion", function(req, res){
	res.render("configuracion");
})//acceso a configuracion



app.listen(3305);
