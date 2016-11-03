//IMPORTACIONES
var express = require("express");
var app = express();

app.set("view engine", "jade");	//inicializamos el motor de vista
app.use(express.static("public"));	//habilitamos la carpeta public para que almacene recursos




//METODOS GET Y SET
app.get("/", function(req, res){
	res.render("index");
	var user = {
		nick: "alfredss",
		password: "123456"
	} 
	var user_m = User(user);
	user_m.save(function(err){
		res.send("guardamos datos");
	});

})//acceso a principal

app.get("/estadisticas", function(req, res){
	res.render("estadisticas");	
	User.find(function(err, data){
		console.log(data);

	});

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