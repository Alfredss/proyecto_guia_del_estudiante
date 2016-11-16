/*
function state(){
    s = require("app.js").state;
    alert(s);
}*/

//state();


var estado = document.getElementById("estado").innerText;

if(estado == "aprobado"){
    color_background = '';
    color_border = '';
}else{
    color_border = '#000000';
    color_background = '#A4A4A4';
}


var nodos = new vis.DataSet([
    //Curso Serie 100 Impar

    {id:'cc121copia', label:'CC121', group:'100-impar', level:1, title:'aa'},
    {id:'cc121', label:'CC121', group:'100-impar', level:1, title:'Computación Básica'},
    {id:'ma143', label:'MA143', group:'100-impar', level:1, title:'Cálculo I'},
    {id:'le141', label:'LE141', group:'100-impar', level:1, title:'Comunicación Oral y Escrita'},
    {id:'ma141', label:'MA141', group:'100-impar', level:1, title:'Matemática Básica'},
    {id:'ef122', label:'EF122', group:'100-impar', level:1, title:'Deportes Menores'},
    {id:'is141', label:'IS141', group:'100-impar', level:1, title:'Algoritmos'},
    {id:'ec141', label:'EC141', group:'100-impar', level:1, title:'Economía'},
    {id:'md141', label:'MD141', group:'100-impar', level:1, title:'Método del Estudio Universitario'},

    //Curso Serie 100 Par
    {id:'ma144', label:'MA144', group:'100-par', level:2, title:'Cálculo II'},
    {id:'fs142', label:'FS142', group:'100-par', level:2, title:'Física I'},
    {id:'ac121', label:'AC121', group:'100-par', level:2, title:'Folklore'},
    {id:'ma142', label:'MA142', group:'100-par', level:2, title:'Matemática Discreta'},
    {id:'ad142', label:'AD142', group:'100-par', level:2, title:'Adminictración General'},
    {id:'is142', label:'IS142', group:'100-par', level:2, title:'Programación Orientada a Objetos'},
    {id:'ec142', label:'EC142', group:'100-par', level:2, title:'Microeconomía',color:{border:color_border, background:color_background}},

    //Curso Serie 200 Impar
    {id:'es241', label:'ES241', group:'200-impar', level:3, title:'Estadística I'},
    {id:'ma243', label:'MA243', group:'200-impar', level:3, title:'Cálculo III'},
    {id:'fs241', label:'FS241', group:'200-impar', level:3, title:'Física II'},
    {id:'ma241', label:'MA241', group:'200-impar', level:3, title:'Álgebra Lineal'},
    {id:'is241', label:'IS241', group:'200-impar', level:3, title:'Estructura de Datos'},
    {id:'ec241', label:'EC241', group:'200-impar', level:3, title:'Macroeconomía'},
    
    //Curso Serie 200 Par
    {id:'es244', label:'ES244', group:'200-par', level:4, title:'Estadística II'},
    {id:'is242', label:'IS242', group:'200-par', level:4, title:'Métodos Numéricos'},
    {id:'is244', label:'IS244', group:'200-par', level:4, title:'Sistemas Eléctricos y Electrónicos'},
    {id:'is262', label:'IS262', group:'200-par', level:4, title:'Investigación de Operaciones'},
    {id:'is248', label:'IS248', group:'200-par', level:4, title:'Organización y Métodos'},       
    {id:'is246', label:'IS246', group:'200-par', level:4, title:'Teoría General de Sistemas'},
    {id:'ac222', label:'AC222', group:'200-par', level:4, title:'Arte Musical y Teatral'},
        
    //Curso Serie 300 Impar
    {id:'is343', label:'IS343', group:'300-impar', level:5, title:'Metodología de Sistemas Blandos'},
    {id:'co341', label:'CO341', group:'300-impar', level:5, title:'Contabilidad General'},
    {id:'is341', label:'IS341', group:'300-impar', level:5, title:'Sistemas Digitales y Arquitectura de Computadoras'},
    {id:'is347', label:'IS347', group:'300-impar', level:5, title:'Investigación de Operaciones II'},
    {id:'is345', label:'IS345', group:'300-impar', level:5, title:'Planeamiento de Sistemas de Información'},
    {id:'cs321', label:'CS321', group:'300-impar', level:5, title:'Realidad Nacional'},
    {id:'cs341', label:'CS341', group:'300-impar', level:5, title:'Liderazgo'},

    //Curso Serie 300 Par
    {id:'is346', label:'IS346', group:'300-par', level:6, title:'Sistemas Dinámicos'},
    {id:'co342', label:'CO342', group:'300-par', level:6, title:'Sistema de Costos'},
    {id:'is344', label:'IS344', group:'300-par', level:6, title:'Sistemas Operativos'},
    {id:'is342', label:'IS342', group:'300-par', level:6, title:'Teoría de Decisiones'},
    {id:'is348', label:'IS348', group:'300-par', level:6, title:'Modelamiento de Datos'},
    {id:'is362', label:'IS362', group:'300-par', level:6, title:'Sistemas de Información I'},

    //Curso Serie 400 Impar
    {id:'in441', label:'IN441', group:'400-impar', level:7, title:''},
    {id:'ec441', label:'EC441', group:'400-impar', level:7, title:'Ingeniería Económica'},
    {id:'is441', label:'IS441', group:'400-impar', level:7, title:'Redes de Computadoras'},
    {id:'ad441', label:'AD441', group:'400-impar', level:7, title:'Logística'},
    {id:'is443', label:'IS443', group:'400-impar', level:7, title:'Adminictración de Base de Datos'},
    {id:'is445', label:'IS445', group:'400-impar', level:7, title:'Sistemas de Información II'},
    {id:'is451', label:'IS451', group:'400-impar', level:7, title:'Ingeniería de la Información'},
    {id:'ad451', label:'AD451', group:'400-impar', level:7, title:'Ingeniería de Software'},
    {id:'is453', label:'IS453', group:'400-impar', level:7, title:'Creatividad Empresarial'},
    
    //Curso Serie 400 Par
    {id:'in442', label:'IN442', group:'400-par', level:8, title:''},
    {id:'ad442', label:'AD442', group:'400-par', level:8, title:'Gestión Financiera'},
    {id:'is444', label:'IS444', group:'400-par', level:8, title:'Seguridad Informática'},    
    {id:'is454', label:'IS454', group:'400-par', level:8, title:'Desarrollo Web'},
    {id:'is442', label:'IS442', group:'400-par', level:8, title:'Sistemas Expertos'},
    {id:'ad444', label:'AD444', group:'400-par', level:8, title:'Gestión de Recursos Humanos'},
    {id:'is446', label:'IS446', group:'400-par', level:8, title:'Sistemas de Información Gerencial'},
    {id:'ad452', label:'AD452', group:'400-par', level:8, title:'Seminario de Empresas'},
    {id:'is452', label:'IS452', group:'400-par', level:8, title:'Calidad Total'},
        
    //Curso Serie 500 Impar
    {id:'in541', label:'IN541', group:'500-impar', level:9, title:''},
    {id:'ad541', label:'AD541', group:'500-impar', level:9, title:'Proyectos de Inversión'},
    {id:'is545', label:'IS545', group:'500-impar', level:9, title:'Comercio Electrónico'},
    {id:'is551', label:'IS551', group:'500-impar', level:9, title:'Reingeniería de Procesos'},
    {id:'is541', label:'IS541', group:'500-impar', level:9, title:'Control y Automatización de Procesos'},
    {id:'is543', label:'IS543', group:'500-impar', level:9, title:'Seminario de Tesis I'},
    {id:'is547', label:'IS547', group:'500-impar', level:9, title:'Auditoría de Sistemas'},
    {id:'is553', label:'IS553', group:'500-impar', level:9, title:'Sistemas Distribuidos'},
    {id:'ad551', label:'AD551', group:'500-impar', level:9, title:'Mercadotecnia'},

    //Curso Serie 500 Par
    {id:'in542', label:'IN542', group:'500-par', level:10, title:''},
    {id:'is548', label:'IS548', group:'500-par', level:10, title:'Planeamiento Estratégico de Negocios'},
    {id:'is546', label:'IS546', group:'500-par', level:10, title:'Prácticas Pre-Profesionales'},
    {id:'de542', label:'DE542', group:'500-par', level:10, title:'Legislación'},
    {id:'ad552', label:'AD552', group:'500-par', level:10, title:'Gestión de Empresas'},
    {id:'is542', label:'IS542', group:'500-par', level:10, title:'Seminario de Tesis II'},
    {id:'is544', label:'IS544', group:'500-par', level:10, title:'Taller de Ingeniería de Sistemas'},
    {id:'is554', label:'IS554', group:'500-par', level:10, title:'Gestión de Centros de Información'},
    {id:'is552', label:'IS552', group:'500-par', level:10, title:'Soporte para la Toma decisiones'}
      ]);
//creamos los arcos o aristas
var aristas = new vis.DataSet();
      
//crea la red
var contenedor = document.getElementById('myRed');

//agremamos los datos de nodos y aristas en una variable
var datos = {
nodes : nodos,
edges : aristas


};

//Configuracion de algunos valores
var opciones = {
    
    interaction:{
        hover:true,
    },
    layout: {
        hierarchical:{
            enabled:true,
            direction:'LR',
            levelSeparation:87,
            //blockShifting: true,
            nodeSpacing: 40,
            treeSpacing: 0,                
        }
    },
    nodes: {            
        fixed: {
            x: true,
            y: false,
        },
        font: {
            size: 10
        },
        shape: 'box',
        shapeProperties: {
            borderRadius: 12,
        },
        physics: false            
    },
    edges: {

    }
};

//inicializamos la red
var red = new vis.Network(contenedor, datos, opciones);
red.setOptions(opciones);

red.on("click", function (params) {
    params.event = "[original event]";
    valor = params.nodes[0];

    if(valor == 'ma143'){
        var btn = document.getElementById('btn');
        btn.click();
        
    }

    if(valor == 'ma141'){ 
        alert(s);
    }
             
});
red.on("doubleClick", function (params) {
    params.event = "[original event]";
    //document.getElementById('eventSpan').innerHTML = '<h2>doubleClick event:</h2>' + JSON.stringify("hola", null, 4);;
});

