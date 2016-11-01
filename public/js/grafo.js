function genera_grafo(){
	var nodos = new vis.DataSet([
        //Cursos Serie 100 Impar
        {id:'is141', label:'IS141', group:'100-impar', x:'100', y:'100' },
        {id:'ma141', label:'MA141', group:'100-impar'},
        {id:'ma143', label:'MA143', group:'100-impar'},
        {id:'le141', label:'LE141', group:'100-impar'},
        {id:'ec141', label:'EC141', group:'100-impar'},
        {id:'md141', label:'MD141', group:'100-impar'},
        {id:'cc121', label:'CC121', group:'100-impar'},
        {id:'ef122', label:'EF122', group:'100-impar'},

        //Curso Serie 100 Par
        {id:'is142', label:'IS142', group:'100-par'},
        {id:'ma142', label:'MA142', group:'100-par'},
        {id:'ma144', label:'MA144', group:'100-par'},
        {id:'fs142', label:'FS142', group:'100-par'},
        {id:'ec142', label:'EC142', group:'100-par'},
        {id:'ad142', label:'AD142', group:'100-par'},
        {id:'ac121', label:'AC121', group:'100-par'},

        //Curso Serie 200 Impar
        {id:'is241', label:'IS241', group:'200-impar'},
        {id:'ma241', label:'MA241', group:'200-impar'},
        {id:'ma243', label:'MA243', group:'200-impar'},
        {id:'es241', label:'ES241', group:'200-impar'},
        {id:'fs241', label:'FS241', group:'200-impar'},
        {id:'ec241', label:'EC241', group:'200-impar'},
        
        //Curso Serie 200 Par
        {id:'is262', label:'IS262', group:'200-par'},
        {id:'is242', label:'IS242', group:'200-par'},
        {id:'es244', label:'ES244', group:'200-par'},
        {id:'is244', label:'IS244', group:'200-par'},
        {id:'is246', label:'IS246', group:'200-par'},
        {id:'is248', label:'IS248', group:'200-par'},
        {id:'ac222', label:'AC222', group:'200-par'},
        
        //Curso Serie 300 Impar
        {id:'co341', label:'CO341', group:'300-impar'},
        {id:'is347', label:'IS347', group:'300-impar'},
        {id:'cs341', label:'CS341', group:'300-impar'},
        {id:'is341', label:'IS341', group:'300-impar'},
        {id:'is343', label:'IS343', group:'300-impar'},
        {id:'is345', label:'IS345', group:'300-impar'},
        {id:'cs321', label:'CS321', group:'300-impar'},

        //Curso Serie 300 Par
        {id:'co342', label:'CO342', group:'300-par'},
        {id:'is342', label:'IS342', group:'300-par'},
        {id:'is344', label:'IS344', group:'300-par'},
        {id:'is346', label:'IS346', group:'300-par'},
        {id:'is348', label:'IS348', group:'300-par'},
        {id:'is362', label:'IS362', group:'300-par'},

        //Curso Serie 400 Impar
        {id:'ec441', label:'EC441', group:'400-impar'},
        {id:'ad441', label:'AD441', group:'400-impar'},
        {id:'is441', label:'IS441', group:'400-impar'},
        {id:'is443', label:'IS443', group:'400-impar'},
        {id:'is445', label:'IS445', group:'400-impar'},
        {id:'in441', label:'IN441', group:'400-impar'},
        {id:'is451', label:'IS451', group:'400-impar'},
        {id:'is453', label:'IS453', group:'400-impar'},
        {id:'ad451', label:'AD451', group:'400-impar'},

        //Curso Serie 400 Par
        {id:'is442', label:'IS442', group:'400-par'},
        {id:'ad442', label:'AD442', group:'400-par'},
        {id:'is444', label:'IS444', group:'400-par'},
        {id:'is446', label:'IS446', group:'400-par'},
        {id:'ad444', label:'AD444', group:'400-par'},
        {id:'in442', label:'IN442', group:'400-par'},
        {id:'is452', label:'IS452', group:'400-par'},
        {id:'is454', label:'IS454', group:'400-par'},
        {id:'ad452', label:'AD452', group:'400-par'},

        //Curso Serie 500 Impar
        {id:'is541', label:'IS541', group:'500-impar'},
        {id:'ad541', label:'AD541', group:'500-impar'},
        {id:'is543', label:'IS543', group:'500-impar'},
        {id:'is545', label:'IS545', group:'500-impar'},
        {id:'is547', label:'IS547', group:'500-impar'},
        {id:'in541', label:'IN541', group:'500-impar'},
        {id:'is551', label:'IS551', group:'500-impar'},
        {id:'is553', label:'IS553', group:'500-impar'},
        {id:'ad551', label:'AD551', group:'500-impar'},

        //Curso Serie 500 Par
        {id:'is548', label:'IS548', group:'500-par'},
        {id:'is542', label:'IS542', group:'500-par'},
        {id:'de542', label:'DE542', group:'500-par'},
        {id:'is544', label:'IS544', group:'500-par'},
        {id:'is546', label:'IS546', group:'500-par'},
        {id:'in542', label:'IN542', group:'500-par'},
        {id:'is552', label:'IS552', group:'500-par'},
        {id:'is554', label:'IS554', group:'500-par'},
        {id:'ad552', label:'AD552', group:'500-par'}
        ]);
      
      //creamos los arcos o aristas
      var aristas = new vis.DataSet([
        {from: 'is141', to: 'is142'} 
        ]);
      
      //crea la red
      var contenedor = document.getElementById('myRed');

      //agremamos los datos de nodos y aristas en una variable
      var datos = {
        nodes : nodos,
        edges : aristas
        
	   
      };

      //Configuracion de algunos valores
      var opciones = {
      	"nodes": {
		    "fixed": {
		      	"x": false,
		      	"y": false
		    },
		    "font": {
		      	"size": 20
		    },
		    "shape": "box",
		    "shapeProperties": {
		      	"borderRadius": 12
		    },
	    	"size": 15,
	    	"physics": false
	    	
	  	},




	  	"edges": {
	    	"smooth": {
	      		"forceDirection": "none"
	    	}
	  	}

	  	
	  	/*
	  	"interaction": {
	  		"zoomView": false
	  	}
	  	*/
      };

      //inicializamos la red
      var red = new vis.Network(contenedor, datos, opciones);
      red.setOptions(opciones);
}