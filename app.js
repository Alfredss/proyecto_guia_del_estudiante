//IMPORTACIONES
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var session = require("express-session");
var router_app = require("./routes_app");
var session_middleware = require("./middlewares/sessions")
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
app.use(session({
    secret: "123456789vfcgkjbjhbhj",
    resave: false,
    saveUninitialized: false
}));
//
//METODOS GET Y SET
app.get("/", function(req, res) {
    req.session.user_id = null;
    res.render("inicio");
}); //acceso a principal
/*
app.get("/index", function(req, res) {
    Curso.find({}, {
        sigla: 1,
        nombre: 1,
        estado: 1,
        requisito: 1
    }, function(err, data) {
        console.log(req.session.user_id);
        res.render("index", {
            curso: data
        });
    });
}); //acceso a cuenta principal*/
app.post("/login", function(req, res) {
    Usuario.find({
        "nombre_usuario": req.body.user,
        "password": req.body.password
    }, function(err, data) {
        if (data.length > 0) {
            req.session.user_id = data[0]._id;
            res.redirect("/app");
        } else {
            res.render("inicio");
        }
    });
}); //post login
/*
app.get("/estadisticas", function(req, res) {
    res.render("app/estadisticas");
}); //acceso a estadisticas
app.get("/blog", function(req, res) {
    res.render("app/blog_home");
}); //acceso a blog
app.get("/blog_post", function(req, res) {
    res.render("app/blog_post");
}); //acceso a blog
app.get("/informacion", function(req, res) {
    res.render("app/informacion");
}); //acceso a informacion
app.get("/configuracion", function(req, res) {
    res.render("app/configuracion");
}); //acceso a configuracion*/
app.use("/app", session_middleware);
app.use("/app", router_app);
app.listen(3305);
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