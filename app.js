//IMPORTACIONES
var express = require("express");
var app = express();
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//CONEXION A MONGODB
mongoose.connect("mongodb://localhost/guia_estudiante_db");


app.set("view engine", "jade");
app.use(express.static("public"));

//CREAMOS EL JSON QUE SERVIRA COMO ESTRUCTURA DE UNA TABLA

//colecciones = tabla
//documentos = fila

var userSchemaJSON = {
	nick:String,
	password:String
};

var user_schema = new Schema(userSchemaJSON);//creamos el esquema de la tabla

var User = mongoose.model("User", user_schema);// modelo que establece la conexion con la base de datos 
//el modelo se llama "User"


//METODOS GET Y SET
app.get("/", function(req, res){
	res.render("index");
})//acceso a principal

app.get("/estadisticas", function(req, res){
	res.render("estadisticas")
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