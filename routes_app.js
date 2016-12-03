var express = require("express");
var app = express();
var router = express.Router();
var Usuario = require("./models/usuario.js").Usuario;
var Curso = require("./models/curso.js").Curso;
//app.use(express.static("public")); //habilitamos la carpeta public para que almacene recursos
router.get("/", function(req, res) {
    Curso.find({}, {
        sigla: 1,
        nombre: 1,
        estado: 1,
        requisito: 1
    }, function(err, data) {
        console.log(req.session.user_id);
        res.render("app/home", {
            curso: data
        });
    });
});
router.get("/estadisticas", function(req, res) {
    res.render("app/estadisticas");
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
    res.render("app/configuracion");
});
module.exports = router;