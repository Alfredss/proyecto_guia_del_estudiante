var estado = "desaprobado"
var color_border;
var color_background;
if(estado == "aprobado"){
    color_background = '#81BEF7';
    color_border = '#FF8000';
}else{
    color_border = '#000000';
    color_background = '#A4A4A4';
}



var nodos = new vis.DataSet([
    //Curso Serie 100 Impar
   // {id:'a', label:'ass', level:0, hidden:true},

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
    
    {id:'ac121', label:'AC121', group:'100-par', level:2, title:'Folklore'},
    {id:'ma142', label:'MA142', group:'100-par', level:2, title:'Matemática Discreta'},
    {id:'ad142', label:'AD142', group:'100-par', level:2, title:'Administración General'},
    {id:'is142', label:'IS142', group:'100-par', level:2, title:'Programación Orientada a Objetos'},
    {color:{border:'#000000', background:'#A4A4A4'},id:'ec142', label:'EC142', group:'100-par', level:2, title:'Microeconomía'},
    {id:'ma144', label:'MA144', group:'100-par', level:2, title:'Cálculo II'},
    {id:'fs142', label:'FS142', group:'100-par', level:2, title:'Física I'},

    //Curso Serie 200 Impar
    {id:'ec241', label:'EC241', group:'200-impar', level:3, title:'Macroeconomía'},
    {id:'ec24', label:'EC2', level:3, title:'Macroeconomía', hidden:true},
    {id:'es241', label:'ES241', group:'200-impar', level:3, title:'Estadística I'},
    {id:'fs241', label:'FS241', group:'200-impar', level:3, title:'Física II'},
    {id:'ma243', label:'MA243', group:'200-impar', level:3, title:'Cálculo III'},
    {id:'ma241', label:'MA241', group:'200-impar', level:3, title:'Álgebra Lineal'},
    {id:'is241', label:'IS241', group:'200-impar', level:3, title:'Estructura de Datos'},
    
    
    //Curso Serie 200 Par
    {id:'es244', label:'ES244', group:'200-par', level:4, title:'Estadística II'},
    {id:'is242', label:'IS242', group:'200-par', level:4, title:'Métodos Numéricos'},
    {id:'is244', label:'IS244', group:'200-par', level:4, title:'Sistemas Eléctricos y Electrónicos'},
    {id:'is262', label:'IS262', group:'200-par', level:4, title:'Investigación de Operaciones'},
    {id:'is248', label:'IS248', group:'200-par', level:4, title:'Organización y Métodos'},       
    {id:'is246', label:'IS246', group:'200-par', level:4, title:'Teoría General de Sistemas'},
    {id:'ac222', label:'AC222', group:'200-par', level:4, title:'Arte Musical y Teatral'},
        
    //Curso Serie 300 Impar
    {id:'is34', label:'IS34', group:'300-impar', level:5, title:'Metodología de Sistemas Blandos'},
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
    {id:'in44', label:'IN44', group:'400-impar', level:7, title:'Inglés I'},
    {id:'in441', label:'IN441', group:'400-impar', level:7, title:'Inglés I'},
    {id:'ec441', label:'EC441', group:'400-impar', level:7, title:'Ingeniería Económica'},
    {id:'is441', label:'IS441', group:'400-impar', level:7, title:'Redes de Computadoras'},
    {id:'ad441', label:'AD441', group:'400-impar', level:7, title:'Logística'},
    {id:'is443', label:'IS443', group:'400-impar', level:7, title:'Adminictración de Base de Datos'},
    {id:'is445', label:'IS445', group:'400-impar', level:7, title:'Sistemas de Información II'},
    {id:'is451', label:'IS451', group:'400-impar', level:7, title:'Ingeniería de la Información'},
    {id:'ad451', label:'AD451', group:'400-impar', level:7, title:'Ingeniería de Software'},
    {id:'is453', label:'IS453', group:'400-impar', level:7, title:'Creatividad Empresarial'},
    
    //Curso Serie 400 Par
    {id:'in442', label:'IN442', group:'400-par', level:8, title:'Inglés II'},
    {id:'ad442', label:'AD442', group:'400-par', level:8, title:'Gestión Financiera'},
    {id:'is444', label:'IS444', group:'400-par', level:8, title:'Seguridad Informática'},    
    {id:'is454', label:'IS454', group:'400-par', level:8, title:'Desarrollo Web'},
    {id:'is442', label:'IS442', group:'400-par', level:8, title:'Sistemas Expertos'},
    {id:'ad444', label:'AD444', group:'400-par', level:8, title:'Gestión de Recursos Humanos'},
    {id:'is446', label:'IS446', group:'400-par', level:8, title:'Sistemas de Información Gerencial'},
    {id:'ad452', label:'AD452', group:'400-par', level:8, title:'Seminario de Empresas'},
    {id:'is452', label:'IS452', group:'400-par', level:8, title:'Calidad Total'},
        
    //Curso Serie 500 Impar
    {id:'in541', label:'IN541', group:'500-impar', level:9, title:'Inglés III'},
    {id:'ad541', label:'AD541', group:'500-impar', level:9, title:'Proyectos de Inversión'},
    {id:'is545', label:'IS545', group:'500-impar', level:9, title:'Comercio Electrónico'},
    {id:'is551', label:'IS551', group:'500-impar', level:9, title:'Reingeniería de Procesos'},
    {id:'is541', label:'IS541', group:'500-impar', level:9, title:'Control y Automatización de Procesos'},
    {id:'is543', label:'IS543', group:'500-impar', level:9, title:'Seminario de Tesis I'},
    {id:'is547', label:'IS547', group:'500-impar', level:9, title:'Auditoría de Sistemas'},
    {id:'is553', label:'IS553', group:'500-impar', level:9, title:'Sistemas Distribuidos'},
    {id:'ad551', label:'AD551', group:'500-impar', level:9, title:'Mercadotecnia'},

    //Curso Serie 500 Par
    {id:'in542', label:'IN542', group:'500-par', level:10, title:'Inglés IV'},
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
    height:'400px',
    width:'840px',
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
            size: 12        
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
        var btn = document.getElementById('btnMa143');
        btn.click();
    }

    if(valor == 'ma141'){
        var btn = document.getElementById('btnMa141');
        btn.click();
    }

    if(valor == 'le141'){
        var btn = document.getElementById('btnLe141');
        btn.click();
    }

    if(valor == 'is141'){
        var btn = document.getElementById('btnIs141');
        btn.click();
    }

    if(valor == 'ec141'){
        var btn = document.getElementById('btnEc141');
        btn.click();
    }

    if(valor == 'md141'){
        var btn = document.getElementById('btnMd141');
        btn.click();
    }

    if(valor == 'ef122'){
        var btn = document.getElementById('btnEf122');
        btn.click();
    }

    if(valor == 'cc121'){
        var btn = document.getElementById('btnCc121');
        btn.click();
    }

    if(valor == 'ac121'){
        var btn = document.getElementById('btnAc121');
        btn.click();
    }
    
    if(valor == 'ma142'){
        var btn = document.getElementById('btnMa142');
        btn.click();
    }
    
    if(valor == 'ad142'){
        var btn = document.getElementById('btnAd142');
        btn.click();
    }

    if(valor == 'is142'){
        var btn = document.getElementById('btnIs142');
        btn.click();
    }

    if(valor == 'ec142'){
        var btn = document.getElementById('btnEc142');
        btn.click();
    }

    if(valor == 'ma144'){
        var btn = document.getElementById('btnMa144');
        btn.click();
    }

    if(valor == 'fs142'){
        var btn = document.getElementById('btnFs142');
        btn.click();
    }

    if(valor == 'ec241'){
        var btn = document.getElementById('btnEc241');
        btn.click();
    }

    if(valor == 'es241'){
        var btn = document.getElementById('btnEs241');
        btn.click();
    }

    if(valor == 'fs241'){
        var btn = document.getElementById('btnFs241');
        btn.click();
    }

    if(valor == 'ma243'){
        var btn = document.getElementById('btnMa243');
        btn.click();
    }

    if(valor == 'ma241'){
        var btn = document.getElementById('btnMa241');
        btn.click();
    }

    if(valor == 'is241'){
        var btn = document.getElementById('btnIs241');
        btn.click();
    }    
    
    if(valor == 'es244'){
        var btn = document.getElementById('btnEs244');
        btn.click();
    }

    if(valor == 'is242'){
        var btn = document.getElementById('btnIs242');
        btn.click();
    } 

    if(valor == 'is244'){
        var btn = document.getElementById('btnIs244');
        btn.click();
    }

    if(valor == 'is262'){
        var btn = document.getElementById('btnIs262');
        btn.click();
    } 

    if(valor == 'is248'){
        var btn = document.getElementById('btnIs248');
        btn.click();
    }

    if(valor == 'is246'){
        var btn = document.getElementById('btnIs246');
        btn.click();
    }

    if(valor == 'ac222'){
        var btn = document.getElementById('btnAc222');
        btn.click();
    }
    
    if(valor == 'is343'){
        var btn = document.getElementById('btnIs343');
        btn.click();
    }

    if(valor == 'co341'){
        var btn = document.getElementById('btnCo341');
        btn.click();
    }

    if(valor == 'is341'){
        var btn = document.getElementById('btnIs341');
        btn.click();
    }

    if(valor == 'is347'){
        var btn = document.getElementById('btnIs347');
        btn.click();
    }

    if(valor == 'is345'){
        var btn = document.getElementById('btnIs345');
        btn.click();
    }

    if(valor == 'cs321'){
        var btn = document.getElementById('btnCs321');
        btn.click();
    }

    if(valor == 'cs341'){
        var btn = document.getElementById('btnCs341');
        btn.click();
    }

    if(valor == 'is346'){
        var btn = document.getElementById('btnIs346');
        btn.click();
    }

    if(valor == 'co342'){
        var btn = document.getElementById('btnCo342');
        btn.click();
    }

    if(valor == 'is344'){
        var btn = document.getElementById('btnIs344');
        btn.click();
    }

    if(valor == 'is342'){
        var btn = document.getElementById('btnIs342');
        btn.click();
    }

    if(valor == 'is348'){
        var btn = document.getElementById('btnIs348');
        btn.click();
    }

    if(valor == 'is362'){
        var btn = document.getElementById('btnIs362');
        btn.click();
    }

    if(valor == 'in441'){
        var btn = document.getElementById('btnIn441');
        btn.click();
    }

    if(valor == 'ec441'){
        var btn = document.getElementById('btnEc441');
        btn.click();
    }
    
    if(valor == 'is441'){
        var btn = document.getElementById('btnIs441');
        btn.click();
    }

    if(valor == 'ad441'){
        var btn = document.getElementById('btnAd441');
        btn.click();
    }
    //Curso Serie 400 Impar
    if(valor == 'is443'){
        var btn = document.getElementById('btnIs443');
        btn.click();
    }

    if(valor == 'is445'){
        var btn = document.getElementById('btnIs445');
        btn.click();
    }
    if(valor == 'is451'){
        var btn = document.getElementById('btnIs451');
        btn.click();
    }
    
    if(valor == 'ad451'){
        var btn = document.getElementById('btnAd451');
        btn.click();
    }

    if(valor == 'is453'){
        var btn = document.getElementById('btnIs453');
        btn.click();
    }

    if(valor == 'in442'){
        var btn = document.getElementById('btnIn442');
        btn.click();
    }

    if(valor == 'ad442'){
        var btn = document.getElementById('btnAd442');
        btn.click();
    }
    
    if(valor == 'is444'){
        var btn = document.getElementById('btnIs444');
        btn.click();
    }

    if(valor == 'is454'){
        var btn = document.getElementById('btnIs454');
        btn.click();
    }

    if(valor == 'is442'){
        var btn = document.getElementById('btnIs442');
        btn.click();
    }

    if(valor == 'ad444'){
        var btn = document.getElementById('btnAd444');
        btn.click();
    }

    if(valor == 'is446'){
        var btn = document.getElementById('btnIs446');
        btn.click();
    }

    if(valor == 'ad452'){
        var btn = document.getElementById('btnAd452');
        btn.click();
    }

    if(valor == 'is452'){
        var btn = document.getElementById('btnIs452');
        btn.click();
    }

    if(valor == 'in541'){
        var btn = document.getElementById('btnIn541');
        btn.click();
    }

    if(valor == 'ad541'){
        var btn = document.getElementById('btnAd541');
        btn.click();
    }
    
    if(valor == 'is545'){
        var btn = document.getElementById('btnIs545');
        btn.click();
    }

    if(valor == 'is551'){
        var btn = document.getElementById('btnIs551');
        btn.click();
    }

    if(valor == 'is541'){
        var btn = document.getElementById('btnIs541');
        btn.click();
    }

    if(valor == 'is543'){
        var btn = document.getElementById('btnIs543');
        btn.click();
    }

    if(valor == 'is547'){
        var btn = document.getElementById('btnIs547');
        btn.click();
    }

    if(valor == 'is553'){
        var btn = document.getElementById('btnIs553');
        btn.click();
    }

    if(valor == 'ad551'){
        var btn = document.getElementById('btnAd551');
        btn.click();
    }

    if(valor == 'in542'){
        var btn = document.getElementById('btnIn542');
        btn.click();
    }

    if(valor == 'is548'){
        var btn = document.getElementById('btnIs548');
        btn.click();
    }

    if(valor == 'is546'){
        var btn = document.getElementById('btnIs546');
        btn.click();
    }

    if(valor == 'de542'){
        var btn = document.getElementById('btnDe542');
        btn.click();
    }

    if(valor == 'ad552'){
        var btn = document.getElementById('btnAd552');
        btn.click();
    }

    if(valor == 'is542'){
        var btn = document.getElementById('btnIs542');
        btn.click();
    }

    if(valor == 'is544'){
        var btn = document.getElementById('btnIs544');
        btn.click();
    }

    if(valor == 'is554'){
        var btn = document.getElementById('btnIs554');
        btn.click();
    }

    if(valor == 'is552'){
        var btn = document.getElementById('btnIs552');
        btn.click();
    }

});
red.on("doubleClick", function (params) {
    params.event = "[original event]";
    //document.getElementById('eventSpan').innerHTML = '<h2>doubleClick event:</h2>' + JSON.stringify("hola", null, 4);;
});
