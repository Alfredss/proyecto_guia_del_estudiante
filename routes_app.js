var express = require("express");
var app = express();
var router = express.Router();
var Usuario = require("./models/usuario.js").Usuario;
var Curso = require("./models/curso.js").Curso;
var Estudiante = require("./models/estudiante.js").Estudiante;
var Estado = require("./models/estado.js").Estado;
var Post = require("./models/post.js").Post;
var Comentario = require("./models/comentario.js").Comentario;
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
                console.log(dato.nombre_usuario);
                ;
                Estado.find({idEstudiante:dato.codigo_estudiante},
                    {
                        _id:0,
                        estado:1
                    },
                    function(err, d) {
                        console.log(d.length);
                        console.log(data.length);
                        res.render("app/home", {
                            curso: data,
                            d:d,
                            nombre:dato.nombre_usuario
                        });
                    });
            });
        });
});
router.get("/estadisticas", function(req, res) {
    Curso.find({

    },{
        _id:0,
        serie:1
    }, function(err, data) {
        Estado.find({

            },{
                _id:0,
                nota:1,
            }, function(err, dato) {
                console.log(data);
                console.log(dato);
                res.render("app/estadisticas",{
                    data:data,
                    dato:dato,
                    serie:data,
                    curso:dato
                });
            });
        
    });
    
});
router.get("/blog", function(req, res) {
    Post.find({}, function(err,data) {
        console.log(data);
        console.log(String(err));
        res.render("app/blog_home",{
            data:data
        });
    });

});
router.get("/blog_post", function(req, res) {
    res.render("app/blog_post");
});
router.get("/blog_new", function(req, res) {
    res.render("app/blog_new");
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

    // var post = new Post({
    //     titulo: "Garantizar los cursos vacacionales",
    //     cuerpo: "El Rector Homero Ango, se comprometio a traves de un documento realizar los cursos vacionales",
    //     usuario : "5872cdda0da7611fb43afa81"
    // });
    
    // post.save(function(err){
    //     console.log("datos guardados correctamente");
    // });

    // var comentario = new Comentario({
    //     cuerpo: "Se deberia respetar el acuerdo tomado anteriormente con el rector, alli se estipula que los cursos vacacionales se garantizan",
    //     usuario: "5872cdda0da7611fb43afa81",
    //     post : "5882e85cfbb4131e440db8da"
    // });
    
    // comentario.save(function(err){
    //     console.log("datos guardados correctamente");
    // });