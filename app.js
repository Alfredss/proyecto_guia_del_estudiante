//IMPORTACIONES
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var session = require("express-session");
var router_app = require("./routes_app");
var session_middleware = require("./middlewares/sessions")
    //IMPORTACIONES MODELOS
var Usuario = require("./models/usuario.js").Usuario;
var Curso = require("./models/curso.js").Curso;
var Estudiante = require("./models/estudiante.js").Estudiante;
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
app.get("/registrarse", function(req, res) {
    res.render("registrarse");
});
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
});
app.post("/registrar", function(req, res) {
    var user = new Usuario({
        codigo_estudiante: req.body.codigo,
        nombre_usuario: req.body.usuario,
        password: req.body.password
    });
    var student = new Estudiante({
        codigo_estudiante: req.body.codigo,
        dni_estudiante: req.body.dni,
        apellidos_estudiante: req.body.apellidos,
        nombres_estudiante: req.body.nombre,
        facultad_estudiante: req.body.facultad,
        escuela_estudiante: req.body.escuela,
        serie_estudiante: req.body.serie
    });
    if (req.body.password == req.body.password_r) {
        user.save(function(err) {
            console.log("usuario guardado correctamente");
            console.log(String(err));
        });
        student.save(function() {
            console.log("estudiante guardado correctamente");
        });
        res.render("inicio");
    } else {
        res.render("registrarse");
    }
});
app.post("/edit", function(req, res) {
    Usuario.findById(req.session.user_id, function(err, data) {
        Estudiante.find({
            codigo_estudiante: data.codigo_estudiante
        }, function(err, dato) {
            Estudiante.findById(dato[0]._id, function(err, inf) {
                data.codigo_estudiante = req.body.codigo;
                data.nombre_usuario = req.body.usuario;
                data.password = req.body.password;
                inf.codigo_estudiante = req.body.codigo;
                inf.dni_estudiante = req.body.dni;
                inf.apellidos_estuiante = req.body.apellidos;
                inf.nombres_estudiante = req.body.nombre;
                inf.facultad_estudiante = req.body.facultad;
                inf.escuela_estudiante = req.body.escuela;
                inf.serie_estudiante = req.body.serie;
                data.save(function(err) {});
                inf.save(function(err) {});
                res.redirect("/app")
            });
        });
    });
});
//post login
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