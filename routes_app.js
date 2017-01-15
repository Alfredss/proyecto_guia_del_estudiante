var express = require("express");
var app = express();
var router = express.Router();
var Usuario = require("./models/usuario.js").Usuario;
var Curso = require("./models/curso.js").Curso;
var Estudiante = require("./models/estudiante.js").Estudiante;
var Estado = require("./models/estado.js").Estado;
//app.use(express.static("public")); //habilitamos la carpeta public para que almacene recursos
router.get("/", function(req, res) {
    Curso.find({}, {
        sigla: 1,
        nombre: 1,
        estado: 1,
        requisito: 1
    }, function(err, data) {
        console.log(req.session.user_id);
        Usuario.findById(req.session.user_id,
            function(err, dato) {
                Estado.find({idEstudiante:dato.codigo_estudiante},
                    {
                        _id:0,
                        estado:1
                    },
                    function(err, d) {
                        console.log(d);
                        res.render("app/home", {
                            curso: data,
                            d:d
                        });
                    });
            });
        });
});
router.get("/estadisticas", function(req, res) {
    Curso.find({
        "siglo": req.body.siglo
    },{
        nombre:1,
        credito:1
    }, function(err, data) {
        console.log(data);
        res.render("app/estadisticas",{
            data:data
        });
    });
});
router.get("/blog", function(req, res) {
    res.render("app/blog_home");
});
router.get("/blog_post", function(req, res) {
    res.render("app/blog_post");
});
router.get("/informacion", function(req, res) {
    res.render("app/informacion");
});
router.get("/configuracion", function(req, res) {
    var codigo;
    Usuario.findById(req.session.user_id, function(err, data) {
        codigo = data.codigo_estudiante;
        Estudiante.find({
            codigo_estudiante: codigo
        }, function(err, dato) {
            res.render("app/configuracion", {
                dato: dato,
                data: data
            });
        });
    });
});

function subjects(c){
    
}

module.exports = router;