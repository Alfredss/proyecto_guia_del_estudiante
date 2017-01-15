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
var Estado = require("./models/estado.js").Estado;
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

app.post("/reg", function(req, res) {
    Curso.find({
        "siglo": req.body.siglo
    },{
        _id:0,
        nombre:1,
        credito:1
    }, function(err, data) {
        console.log(data);
        res.render("app/estadisticas",{
            data:data
        });
        

        //app/estadisticas
        // if (data.length > 0) {
        //     req.session.user_id = data[0]._id;
        //     res.redirect("/app");
        // } else {
        //     res.render("inicio");
        // }
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
    c = [{
            //curso 01
            idEstudiante: req.body.codigo,
            idCurso: "ec141",
            nombreCurso : "Economía",
            estado:"noaprobado",
            nota:null
        },{
            //curso 02
            idEstudiante: req.body.codigo,
            idCurso: "ec142",
            nombreCurso : "Microeconomía",
            estado:"noaprobado",
            nota:null
        },{
            //curso 03
            idEstudiante: req.body.codigo,
            idCurso: "is141",
            nombreCurso : "Algoritmos",
            estado:"noaprobado",
            nota:null
        },{
            //curso 04
            idEstudiante: req.body.codigo,
            idCurso: "md141",
            nombreCurso : "Método del Estudio Universitario",
            estado:"noaprobado",
            nota:null
        },{
            //curso 05
            idEstudiante: req.body.codigo,
            idCurso: "ma143",
            nombreCurso : "Cálculo I",
            estado:"noaprobado",
            nota:null
        },{
            //curso 06
            idEstudiante: req.body.codigo,
            idCurso: "le141",
            nombreCurso : "Comunicación Oral y Escrita",
            estado:"noaprobado",
            nota:null
        },{
            //curso 07
            idEstudiante: req.body.codigo,
            idCurso: "ma141",
            nombreCurso : "Matemática Básica",
            estado:"noaprobado",
            nota:null
        },{
            //curso 08
            idEstudiante: req.body.codigo,
            idCurso: "cc121",
            nombreCurso : "Computación Básica",
            estado:"noaprobado",
            nota:null
        },{
            //curso 09
            idEstudiante: req.body.codigo,
            idCurso: "ef122",
            nombreCurso : "Deportes Menores",
            estado:"noaprobado",
            nota:null
        },{
            //curso 10
            idEstudiante: req.body.codigo,
            idCurso: "is142",
            nombreCurso : "Programación Orientada a Objetos",
            estado:"noaprobado",
            nota:null
        },{
            //curso 11
            idEstudiante: req.body.codigo,
            idCurso: "ma142",
            nombreCurso : "Matmática Discreta",
            estado:"noaprobado",
            nota:null
        },{
            //curso 12
            idEstudiante: req.body.codigo,
            idCurso: "ma144",
            nombreCurso : "Cálculo II",
            estado:"noaprobado",
            nota:null
        },{
            //curso 13
            idEstudiante: req.body.codigo,
            idCurso: "fs142",
            nombreCurso : "Física I",
            estado:"noaprobado",
            nota:null
        },{
            //curso 14
            idEstudiante: req.body.codigo,
            idCurso: "ad142",
            nombreCurso : "Administración General",
            estado:"noaprobado",
            nota:null
        },{
            //curso 15
            idEstudiante: req.body.codigo,
            idCurso: "ac121",
            nombreCurso : "Folklore",
            estado:"noaprobado",
            nota:null
        },{
            //curso 16
            idEstudiante: req.body.codigo,
            idCurso: "is241",
            nombreCurso : "Estructura de Datos",
            estado:"noaprobado",
            nota:null
        },{
            //curso 17
            idEstudiante: req.body.codigo,
            idCurso: "ma241",
            nombreCurso : "Álgebra Lineal",
            estado:"noaprobado",
            nota:null
        },{
            //curso 18
            idEstudiante: req.body.codigo,
            idCurso: "ma243",
            nombreCurso : "Cálculo III",
            estado:"noaprobado",
            nota:null
        },{
            //curso 19
            idEstudiante: req.body.codigo,
            idCurso: "es241",
            nombreCurso : "Estadística I",
            estado:"noaprobado",
            nota:null
        },{
            //curso 20
            idEstudiante: req.body.codigo,
            idCurso: "fs241",
            nombreCurso : "Física II",
            estado:"noaprobado",
            nota:null
        },{
            //curso 21
            idEstudiante: req.body.codigo,
            idCurso: "ec241",
            nombreCurso : "Macroconomía",
            estado:"noaprobado",
            nota:null
        },{
            //curso 22
            idEstudiante: req.body.codigo,
            idCurso: "is262",
            nombreCurso : "Investigación de Operaciones I",
            estado:"noaprobado",
            nota:null
        },{
            //curso 23
            idEstudiante: req.body.codigo,
            idCurso: "is242",
            nombreCurso : "Métodos Numéricos",
            estado:"noaprobado",
            nota:null
        },{
            //curso 24
            idEstudiante: req.body.codigo,
            idCurso: "es244",
            nombreCurso : "Estadística II",
            estado:"noaprobado",
            nota:null
        },{
            //curso 25
            idEstudiante: req.body.codigo,
            idCurso: "is244",
            nombreCurso : "Sistemas Eléctricos y Electrónicos",
            estado:"noaprobado",
            nota:null
        },{
            //curso 26
            idEstudiante: req.body.codigo,
            idCurso: "is246",
            nombreCurso : "Teoría General de Sistemas",
            estado:"noaprobado",
            nota:null
        },{
            //curso 27
            idEstudiante: req.body.codigo,
            idCurso: "is248",
            nombreCurso : "Organización y Métodos",
            estado:"noaprobado",
            nota:null
        },{
            //curso 28
            idEstudiante: req.body.codigo,
            idCurso: "ac222",
            nombreCurso : "Arte Musical y Teatral",
            estado:"noaprobado",
            nota:null
        },{
            //curso 29
            idEstudiante: req.body.codigo,
            idCurso: "co341",
            nombreCurso : "Contabilidad General",
            estado:"noaprobado",
            nota:null
        },{
            //curso 30
            idEstudiante: req.body.codigo,
            idCurso: "cs341",
            nombreCurso : "Liderazgo",
            estado:"noaprobado",
            nota:null
        },{
            //curso 31
            idEstudiante: req.body.codigo,
            idCurso: "is347",
            nombreCurso : "Investigación de Operaciones II",
            estado:"noaprobado",
            nota:null
        },{
            //curso 32
            idEstudiante: req.body.codigo,
            idCurso: "is341",
            nombreCurso : "Sistemas Digitales y Arquitectura de Computadoras",
            estado:"noaprobado",
            nota:null
        },{
            //curso 33
            idEstudiante: req.body.codigo,
            idCurso: "is343",
            nombreCurso : "Metodología de Sistemas Blandos",
            estado:"noaprobado",
            nota:null
        },{
            //curso 34
            idEstudiante: req.body.codigo,
            idCurso: "is345",
            nombreCurso : "Planeamiento de Sistemas de Información",
            estado:"noaprobado",
            nota:null
        },{
            //curso 35
            idEstudiante: req.body.codigo,
            idCurso: "cs321",
            nombreCurso : "Realidad Nacional",
            estado:"noaprobado",
            nota:null
        },{
            //curso 36
            idEstudiante: req.body.codigo,
            idCurso: "is342",
            nombreCurso : "Teoría de Decisiones",
            estado:"noaprobado",
            nota:null
        },{
            //curso 37
            idEstudiante: req.body.codigo,
            idCurso: "co342",
            nombreCurso : "Sistema de Costos",
            estado:"noaprobado",
            nota:null
        },{
            //curso 38
            idEstudiante: req.body.codigo,
            idCurso: "is344",
            nombreCurso : "Sistemas Operativos",
            estado:"noaprobado",
            nota:null
        },{
            //curso 39
            idEstudiante: req.body.codigo,
            idCurso: "is346",
            nombreCurso : "Sistemas Dinámicos",
            estado:"noaprobado",
            nota:null
        },{
            //curso 40
            idEstudiante: req.body.codigo,
            idCurso: "is348",
            nombreCurso : "Modelamiento de Datos",
            estado:"noaprobado",
            nota:null
        },{
            //curso 41
            idEstudiante: req.body.codigo,
            idCurso: "is362",
            nombreCurso : "Sistemas de Información I",
            estado:"noaprobado",
            nota:null
        },{
            //curso 42
            idEstudiante: req.body.codigo,
            idCurso: "ec441",
            nombreCurso : "Ingeniería Económica",
            estado:"noaprobado",
            nota:null
        },{
            //curso 43
            idEstudiante: req.body.codigo,
            idCurso: "ad441",
            nombreCurso : "Logística",
            estado:"noaprobado",
            nota:null
        },{
            //curso 44
            idEstudiante: req.body.codigo,
            idCurso: "is441",
            nombreCurso : "Redes de Computadoras",
            estado:"noaprobado",
            nota:null
        },{
            //curso 45
            idEstudiante: req.body.codigo,
            idCurso: "is443",
            nombreCurso : "Administración de Base de Datos",
            estado:"noaprobado",
            nota:null
        },{
            //curso 46
            idEstudiante: req.body.codigo,
            idCurso: "is445",
            nombreCurso : "Sistemas de Información II",
            estado:"noaprobado",
            nota:null
        },{
            //curso 47
            idEstudiante: req.body.codigo,
            idCurso: "is451",
            nombreCurso : "Ingeniería de la Información",
            estado:"noaprobado",
            nota:null
        },{
            //curso 48
            idEstudiante: req.body.codigo,
            idCurso: "is453",
            nombreCurso : "Ingeniería de Software",
            estado:"noaprobado",
            nota:null
        },{
            //curso 49
            idEstudiante: req.body.codigo,
            idCurso: "ad451",
            nombreCurso : "Creatividad Empresarial",
            estado:"noaprobado",
            nota:null
        },{
            //curso 50
            idEstudiante: req.body.codigo,
            idCurso: "is442",
            nombreCurso : "Sistemas Expertos",
            estado:"noaprobado",
            nota:null
        },{
            //curso 51
            idEstudiante: req.body.codigo,
            idCurso: "ad442",
            nombreCurso : "Gestión Financiera",
            estado:"noaprobado",
            nota:null
        },{
            //curso 52
            idEstudiante: req.body.codigo,
            idCurso: "is444",
            nombreCurso : "Seguridad Informática",
            estado:"noaprobado",
            nota:null
        },{
            //curso 53
            idEstudiante: req.body.codigo,
            idCurso: "is446",
            nombreCurso : "Sistemas de Información Gerencial",
            estado:"noaprobado",
            nota:null
        },{
            //curso 54
            idEstudiante: req.body.codigo,
            idCurso: "ad444",
            nombreCurso : "Gestión de Recursos Humanos",
            estado:"noaprobado",
            nota:null
        },{
            //curso 55
            idEstudiante: req.body.codigo,
            idCurso: "is452",
            nombreCurso : "Calidad Total",
            estado:"noaprobado",
            nota:null
        },{
            //curso 56
            idEstudiante: req.body.codigo,
            idCurso: "is454",
            nombreCurso : "Desarrollo Web",
            estado:"noaprobado",
            nota:null
        },{
            //curso 57
            idEstudiante: req.body.codigo,
            idCurso: "ad452",
            nombreCurso : "Seminario de Empresas",
            estado:"noaprobado",
            nota:null
        },{
            //curso 58
            idEstudiante: req.body.codigo,
            idCurso: "is541",
            nombreCurso : "Control y Automatización de Procesos",
            estado:"noaprobado",
            nota:null
        },{
            //curso 59
            idEstudiante: req.body.codigo,
            idCurso: "ad551",
            nombreCurso : "Mercadotecnia",
            estado:"noaprobado",
            nota:null
        },{
            //curso 60
            idEstudiante: req.body.codigo,
            idCurso: "ad541",
            nombreCurso : "Proyectos de Inversión",
            estado:"noaprobado",
            nota:null
        },{
            //curso 61
            idEstudiante: req.body.codigo,
            idCurso: "is543",
            nombreCurso : "Seminario de Tesis I",
            estado:"noaprobado",
            nota:null
        },{
            //curso 62
            idEstudiante: req.body.codigo,
            idCurso: "is545",
            nombreCurso : "Comercio Electrónico",
            estado:"noaprobado",
            nota:null
        },{
            //curso 63
            idEstudiante: req.body.codigo,
            idCurso: "is547",
            nombreCurso : "Auditoría de Sistemas",
            estado:"noaprobado",
            nota:null
        },{
            //curso 64
            idEstudiante: req.body.codigo,
            idCurso: "is551",
            nombreCurso : "Reingeniería de Procesos",
            estado:"noaprobado",
            nota:null
        },{
            //curso 65
            idEstudiante: req.body.codigo,
            idCurso: "is553",
            nombreCurso : "Sistemas Distribuidos",
            estado:"noaprobado",
            nota:null
        },{
            //curso 66
            idEstudiante: req.body.codigo,
            idCurso: "is548",
            nombreCurso : "Planeamiento Estratégico de Negocios",
            estado:"noaprobado",
            nota:null
        },{
            //curso 67
            idEstudiante: req.body.codigo,
            idCurso: "is542",
            nombreCurso : "Seminario de Tesis II",
            estado:"noaprobado",
            nota:null
        },{
            //curso 68
            idEstudiante: req.body.codigo,
            idCurso: "de542",
            nombreCurso : "Legislación",
            estado:"noaprobado",
            nota:null
        },{
            //curso 69
            idEstudiante: req.body.codigo,
            idCurso: "is544",
            nombreCurso : "Taller de Ingeniería de Sistemas",
            estado:"noaprobado",
            nota:null
        },{
            //curso 70
            idEstudiante: req.body.codigo,
            idCurso: "is546",
            nombreCurso : "Prácticas Pre-Profesionales",
            estado:"noaprobado",
            nota:null
        },{
            //curso 71
            idEstudiante: req.body.codigo,
            idCurso: "is552",
            nombreCurso : "Soporte para la Toma de Decisiones",
            estado:"noaprobado",
            nota:null
        },{
            //curso 72
            idEstudiante: req.body.codigo,
            idCurso: "is544",
            nombreCurso : "Gestión de Centros de Información",
            estado:"noaprobado",
            nota:null
        },{
            //curso 73
            idEstudiante: 88888888,
            idCurso: "ad552",
            nombreCurso : "Gestión de Empresas",
            estado:"noaprobado",
            nota:null
        }
        ];
        for(var i=0; i<c.length;i++){
            var estado = new Estado(c[i]);
            estado.save(function(){
                console.log("datos guardados correctamente" + i);
            });
        }
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