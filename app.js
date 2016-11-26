//IMPORTACIONES
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
//IMPORTACIONES MODELOS
var Usuario = require("./models/usuario.js").Usuario;
//var Estudiante = require("./models/estudiante.js").Estudiante;
var Curso = require("./models/curso.js").Curso;
app.set("view engine", "jade"); //inicializamos el motor de vista
app.use(express.static("public")); //habilitamos la carpeta public para que almacene recursos
app.use(bodyParser.json()); //para peticiones con el formato application/json
app.use(bodyParser.urlencoded({
    extended: true
}));
//METODOS GET Y SET
app.get("/", function(req, res) {
        res.render("inicio");
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
        /*  
            Curso.find({},"sigla",function(err, data){
                state = data[1];
                //console.log(data);
                //console.log(state);
                //res.render("index", {hola:state});        
                //console.log(data);
                console.log(state);
                res.render("index");
            });
        */
    }) //acceso a principal
app.get("/index", function(req, res) {
        Curso.find({}, {
            sigla: 1,
            nombre: 1,
            estado: 1,
            requisito: 1
        }, function(err, data) {
            res.render("index", {
                curso: data
            });
        });
    }) //acceso a cuenta principal
app.post("/login", function(req, res) {
        Usuario.find({
            "nombre_usuario": req.body.user,
            "password": req.body.password
        }, function(err, data) {
            if (data.length > 0) {
                Curso.find({}, {
                    sigla: 1,
                    nombre: 1,
                    estado: 1,
                    requisito: 1
                }, function(err, data) {
                    res.render("index", {
                        curso: data
                    });
                });
            } else {
                res.render("inicio");
            }
        });
    }) //post login
app.get("/estadisticas", function(req, res) {
        res.render("estadisticas");
    }) //acceso a estadisticas
app.get("/blog", function(req, res) {
        res.render("blog_home");
    }) //acceso a blog
app.get("/blog_post", function(req, res) {
        res.render("blog_post");
    }) //acceso a blog
app.get("/informacion", function(req, res) {
        res.render("informacion");
    }) //acceso a informacion
app.get("/configuracion", function(req, res) {
        res.render("configuracion");
    }) //acceso a configuracion
app.listen(3305);