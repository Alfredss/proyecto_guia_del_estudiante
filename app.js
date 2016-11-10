//IMPORTACIONES
var express = require("express");
var app = express();

//IMPORTACIONES MODELOS

var Usuario = require("./models/usuario.js").Usuario;
//var Estudiante = require("./models/estudiante").Estudiante;
//var Curso = require("./models/curso").Curso;


app.set("view engine", "jade");	//inicializamos el motor de vista
app.use(express.static("public"));	//habilitamos la carpeta public para que almacene recursos





//METODOS GET Y SET
app.get("/", function(req, res){
	/*
	var user = new Usuario({
		codigo_estudiante: 12345678,
		nombre_usuario: "admin2",
		password : "1234567",
	});
	
	user.save(function(){
		console.log("datos guardados correctamente");
	});
	
	Usuario.find(function(err, data){
		console.log(data);
	});*/
	res.render("index");
})//acceso a principal


app.get("/estadisticas", function(req, res){
	res.render("estadisticas");	
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