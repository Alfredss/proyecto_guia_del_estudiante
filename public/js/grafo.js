var bcc121='';
var bgcc121='';
var bma143='';
var bgma143='';
var ble141='';
var bgle141='';
var bma141='';
var bgma141='';
var bef122='';
var bgef122='';
var bis141='';
var bgis141='';
var bec141='';
var bgec141='';
var bmd141='';
var bgmd141='';
var bac121='';
var bgac121='';
var bma142='';
var bgma142='';
var bad142='';
var bgd142='';
var bis142='';
var bgis142='';
var bec142='';
var bgec142='';
var bma144='';
var bgma144='';
var bfs142='';
var bgfs142='';
var bec241='';
var bgec241='';
var bes241='';
var bges241='';
var bfs241='';
var bgfs241='';
var bma243='';
var bgma243='';
var bma241='';
var bgma241='';
var bis241='';
var bgis241='';
var bes244='';
var bges244='';
var bis242='';
var bgis242='';
var bis244='';
var bgis244='';
var bis262='';
var bgis262='';
var bis248='';
var bgis248='';
var bis246='';
var bgis246='';
var bac222='';
var bgac222='';
var bis343='';
var bgis343='';
var bco341='';
var bgco341='';
var bis341='';
var bgis341='';
var bis347='';
var bgis347='';
var bis345='';
var bgis345='';
var bcs321='';
var bgcs321='';
var bcs341='';
var bgcs341='';
var bis346='';
var bgis346='';
var bco342='';
var bgco342='';
var bis344='';
var bgis344='';
var bis342='';
var bgis342='';
var bis348='';
var bgis348='';
var bis362='';
var bgis362='';
var bec441='';
var bgec441='';
var bis441='';
var bgis441='';
var bad441='';
var bgad441='';
var bis443='';
var bgis443='';
var bis445='';
var bgis445='';
var bis451='';
var bgis451='';
var bad451='';
var bgad451='';
var bis453='';
var bgis453='';
var bad442='';
var bgad442='';
var bis444='';
var bgis444='';
var bis454='';
var bgis454='';
var bis442='';
var bgis442='';
var bad444='';
var bgad444='';
var bis446='';
var bgis446='';
var bad452='';
var bgad452='';
var bis452='';
var bgis452=''; 
var bad541='';
var bgad541='';
var bis545='';
var bgis545='';
var bis551='';
var bgis551='';
var bis541='';
var bgis541='';
var bis543='';
var bgis543='';
var bis547='';
var bgis547='';
var bis553='';
var bgis553='';
var bad551='';
var bgad551='';
var bis548='';
var bgis548='';
var bis546='';
var bgis546='';
var bde542='';
var bgde542='';
var bad552='';
var bgad552='';
var bis542='';
var bgis542='';
var bis544='';
var bgis544='';
var bis554='';
var bgis554='';
var bis552='';
var bgis552='';

var bin441 = '';
var bgin441 = '#D7DF01';
var bin442 = '';
var bgin442 = '#D7DF01';
var bin541 = '';
var bgin541 = '#D7DF01';
var bin542 = '';
var bgin542 = '#D7DF01';

var aprobado = " \'aprobado\' ";
var ninguno = " \'ninguno\'";
var noaprobado = " \'noaprobado\' ";

var regNotas = [];
regNotas = document.getElementById("ds").innerHTML;
regNotas = regNotas.substring(1,regNotas.length-1);
var arrayAprobados = regNotas.split("},{");
alert(regNotas);
for (var i = 0; i < arrayAprobados.length; i++) {
    arrayAprobados[i] = arrayAprobados[i].substring(8,arrayAprobados[i].length);
}

var c = [];
c = document.getElementById("cursos").innerHTML;

var arreglo = c.split("},{");
arreglo[0] = arreglo[0].substring(1);
arreglo[72] = arreglo[72].substring(0, arreglo[72].length-2);
for (var i = 0; i < arreglo.length; i++) {
    arreglo[i] = arreglo[i].split(',');
    for (var j = 0; j < arreglo[i].length; j++) {
         arreglo[i][j] = arreglo[i][j].split(':');
     } 
}

for (var i = 0; i < arreglo.length; i++) {
    for (var j = 0; j < arreglo[i].length; j++) {
        if((i==0)&&(j==4)){
            if (arrayAprobados[0]==aprobado) {
                bec141 = '';
                bgec141 = '';
                break;
            }else if((arrayAprobados[0]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bec141 = '#000000';
                bgec141 = '#FFFFFF';
                break;
            }else{
                bec141 = '#000000';
                bgec141 = '#A4A4A4';
                break;
            }
        }

        if((i==1)&&(j==4)){
            if (arrayAprobados[1]==aprobado) {
                bec142 = '';
                bgec142 = '';
                break;
            }else if((arrayAprobados[1]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bec142 = '#000000';
                bgec142 = '#FFFFFF';
                break;
            }else{
                bec142 = '#000000';
                bgec142 = '#A4A4A4';
                break;
            }
        }

        if((i==2)&&(j==4)){
            if (arrayAprobados[2]==aprobado) {
                bis141 = '';
                bgis141 = '';
                break;
            }else if((arrayAprobados[2]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bis141 = '#000000';
                bgis141 = '#FFFFFF';
                break;
            }else{
                bis141 = '#000000';
                bgis141 = '#A4A4A4';
                break;
            }
        }

        if((i==3)&&(j==4)){
            if (arrayAprobados[3]==aprobado) {
                bmd141 = '';
                bgmd141 = '';
                break;
            }else if((arrayAprobados[3]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bmd141 = '#000000';
                bgmd141 = '#FFFFFF';
                break;
            }else{
                bmd141 = '#000000';
                bgmd141 = '#A4A4A4';
                break;
            }
        }

        if((i==4)&&(j==4)){
            if (arrayAprobados[4]==aprobado) {
                bma143 = '';
                bgma143 = '';
                break;
            }else if((arrayAprobados[4]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bma143 = '#000000';
                bgma143 = '#FFFFFF';
                break;
            }else{
                bma143 = '#000000';
                bgma143 = '#A4A4A4';
                break;
            }
        }

        if((i==5)&&(j==4)){
            if (arrayAprobados[5]==aprobado) {
                ble141 = '';
                bgle141 = '';
                break;
            }else if((arrayAprobados[5]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                ble141 = '#000000';
                bgle141 = '#FFFFFF';
                break;
            }else{
                ble141 = '#000000';
                bgle141 = '#A4A4A4';
                break;
            }
        }

        if((i==6)&&(j==4)){
            if (arrayAprobados[6]==aprobado) {
                bma141 = '';
                bgma141 = '';
                break;
            }else if((arrayAprobados[6]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bma141 = '#000000';
                bgma141 = '#FFFFFF';
                break;
            }else{
                bma141 = '#000000';
                bgma141 = '#A4A4A4';
                break;
            }
        }

        if((i==7)&&(j==4)){
            if (arrayAprobados[7]==aprobado) {
                bcc121 = '';
                bgcc121 = '';
                break;
            }else if((arrayAprobados[7]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bcc121 = '#000000';
                bgcc121 = '#FFFFFF';
                break;
            }else{
                bcc121 = '#000000';
                bgcc121 = '#A4A4A4';
                break;
            }
        }

        if((i==8)&&(j==4)){
            if (arrayAprobados[8]==aprobado) {
                bef122 = '';
                bgef122 = '';
                break;
            }else if((arrayAprobados[8]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bef122 = '#000000';
                bgef122 = '#FFFFFF';
                break;
            }else{
                bef122 = '#000000';
                bgef122 = '#A4A4A4';
                break;
            }
        }

        if((i==9)&&(j==4)){
            if (arrayAprobados[9]==aprobado) {
                bis142 = '';
                bgis142 = '';
                break;
            }else if((arrayAprobados[9]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bis142 = '#000000';
                bgis142 = '#FFFFFF';
                break;
            }else{
                bis142 = '#000000';
                bgis142 = '#A4A4A4';
                break;
            }
        }

        if((i==10)&&(j==4)){
            if (arrayAprobados[10]==aprobado) {
                bma142 = '';
                bgma142 = '';
                break;
            }else if((arrayAprobados[10]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bma142 = '#000000';
                bgma142 = '#FFFFFF';
                break;
            }else{
                bma142 = '#000000';
                bgma142 = '#A4A4A4';
                break;
            }
        }

        if((i==11)&&(j==4)){
            if (arrayAprobados[11]==aprobado) {
                bma144 = '';
                bgma144 = '';
                break;
            }else if((arrayAprobados[11]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bma144 = '#000000';
                bgma144 = '#FFFFFF';
                break;
            }else{
                bma144 = '#000000';
                bgma144 = '#A4A4A4';
                break;
            }
        }

        if((i==12)&&(j==4)){
            if (arrayAprobados[12]==aprobado) {
                bfs142 = '';
                bgfs142 = '';
                break;
            }else if((arrayAprobados[12]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bfs142 = '#000000';
                bgfs142 = '#FFFFFF';
                break;
            }else{
                bfs142 = '#000000';
                bgfs142 = '#A4A4A4';
                break;
            }
        }

        if((i==13)&&(j==4)){
            if (arrayAprobados[13]==aprobado) {
                bad142 = '';
                bgad142 = '';
                break;
            }else if((arrayAprobados[13]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bad142 = '#000000';
                bgad142 = '#FFFFFF';
                break;
            }else{
                bad142 = '#000000';
                bgad142 = '#A4A4A4';
                break;
            }
        }

        if((i==14)&&(j==4)){
            if (arrayAprobados[14]==aprobado) {
                bac121 = '';
                bgac121 = '';
                break;
            }else if((arrayAprobados[14]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bac121 = '#000000';
                bgac121 = '#FFFFFF';
                break;
            }else{
                bac121 = '#000000';
                bgac121 = '#A4A4A4';
                break;
            }
        }

        if((i==15)&&(j==4)){
            if (arrayAprobados[15]==aprobado) {
                bis241 = '';
                bgis241 = '';
                break;
            }else if((arrayAprobados[15]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bis241 = '#000000';
                bgis241 = '#FFFFFF';
                break;
            }else{
                bis241 = '#000000';
                bgis241 = '#A4A4A4';
                break;
            }
        }

        if((i==16)&&(j==4)){
            if (arrayAprobados[16]==aprobado) {
                bma241 = '';
                bgma241 = '';
                break;
            }else if((arrayAprobados[16]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bma241 = '#000000';
                bgma241 = '#FFFFFF';
                break;
            }else{
                bma241 = '#000000';
                bgma241 = '#A4A4A4';
                break;
            }
        }

        if((i==17)&&(j==4)){
            if (arrayAprobados[17]==aprobado) {
                bma243 = '';
                bgma243 = '';
                break;
            }else if((arrayAprobados[17]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bma243 = '#000000';
                bgma243 = '#FFFFFF';
                break;
            }else{
                bma243 = '#000000';
                bgma243 = '#A4A4A4';
                break;
            }
        }

        if((i==18)&&(j==4)){
            if (arrayAprobados[18]==aprobado) {
                bes241 = '';
                bges241 = '';
                break;
            }else if((arrayAprobados[18]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bes241 = '#000000';
                bges241 = '#FFFFFF';
                break;
            }else{
                bes241 = '#000000';
                bges241 = '#A4A4A4';
                break;
            }
        }

        if((i==19)&&(j==4)){
            if (arrayAprobados[19]==aprobado) {
                bfs241 = '';
                bgfs241 = '';
                break;
            }else if((arrayAprobados[19]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bfs241 = '#000000';
                bgfs241 = '#FFFFFF';
                break;
            }else{
                bfs241 = '#000000';
                bgfs241 = '#A4A4A4';
                break;
            }
        }

        if((i==20)&&(j==4)){
            if (arrayAprobados[20]==aprobado) {
                bec241 = '';
                bgec241 = '';
                break;
            }else if((arrayAprobados[20]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bec241 = '#000000';
                bgec241 = '#FFFFFF';
                break;
            }else{
                bec241 = '#000000';
                bgec241 = '#A4A4A4';
                break;
            }
        }

        if((i==21)&&(j==4)){
            if (arrayAprobados[21]==aprobado) {
                bis262 = '';
                bgis262 = '';
                break;
            }else if((arrayAprobados[21]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bis262 = '#000000';
                bgis262 = '#FFFFFF';
                break;
            }else{
                bis262 = '#000000';
                bgis262 = '#A4A4A4';
                break;
            }
        }

        if((i==22)&&(j==4)){
            if (arrayAprobados[22]==aprobado) {
                bis242 = '';
                bgis242 = '';
                break;
            }else if((arrayAprobados[22]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bis242 = '#000000';
                bgis242 = '#FFFFFF';
                break;
            }else{
                bis242 = '#000000';
                bgis242 = '#A4A4A4';
                break;
            }
        }

        if((i==23)&&(j==4)){
            if (arrayAprobados[23]==aprobado) {
                bes244 = '';
                bges244 = '';
                break;
            }else if((arrayAprobados[23]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bes244 = '#000000';
                bges244 = '#FFFFFF';
                break;
            }else{
                bes244 = '#000000';
                bges244 = '#A4A4A4';
                break;
            }
        }

        if((i==24)&&(j==4)){
            if (arrayAprobados[24]==aprobado) {
                bis244 = '';
                bgis244 = '';
                break;
            }else if((arrayAprobados[24]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bis244 = '#000000';
                bgis244 = '#FFFFFF';
                break;
            }else{
                bis244 = '#000000';
                bgis244 = '#A4A4A4';
                break;
            }
        }

        if((i==25)&&(j==4)){
            if (arrayAprobados[25]==aprobado) {
                bis246 = '';
                bgis246 = '';
                break;
            }else if((arrayAprobados[25]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bis246 = '#000000';
                bgis246 = '#FFFFFF';
                break;
            }else{
                bis246 = '#000000';
                bgis246 = '#A4A4A4';
                break;
            }
        }

        if((i==26)&&(j==4)){
            if (arrayAprobados[26]==aprobado) {
                bis248 = '';
                bgis248 = '';
                break;
            }else if((arrayAprobados[26]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bis248 = '#000000';
                bgis248 = '#FFFFFF';
                break;
            }else{
                bis248 = '#000000';
                bgis248 = '#A4A4A4';
                break;
            }
        }

        if((i==27)&&(j==4)){
            if (arrayAprobados[27]==aprobado) {
                bac222 = '';
                bgac222 = '';
                break;
            }else if((arrayAprobados[27]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bac222 = '#000000';
                bgac222 = '#FFFFFF';
                break;
            }else{
                bac222 = '#000000';
                bgac222 = '#A4A4A4';
                break;
            }
        }

        if((i==28)&&(j==4)){
            if (arrayAprobados[28]==aprobado) {
                bco341 = '';
                bgco341 = '';
                break;
            }else if((arrayAprobados[28]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bco341 = '#000000';
                bgco341 = '#FFFFFF';
                break;
            }else{
                bco341 = '#000000';
                bgco341 = '#A4A4A4';
                break;
            }
        }

        if((i==29)&&(j==4)){
            if (arrayAprobados[29]==aprobado) {
                bcs341 = '';
                bgcs341 = '';
                break;
            }else if((arrayAprobados[29]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bcs341 = '#000000';
                bgcs341 = '#FFFFFF';
                break;
            }else{
                bcs341 = '#000000';
                bgcs341 = '#A4A4A4';
                break;
            }
        }

        if((i==30)&&(j==4)){
            if (arrayAprobados[30]==aprobado) {
                bis347 = '';
                bgis347 = '';
                break;
            }else if((arrayAprobados[30]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bis347 = '#000000';
                bgis347 = '#FFFFFF';
                break;
            }else{
                bis347 = '#000000';
                bgis347 = '#A4A4A4';
                break;
            }
        }

        if((i==31)&&(j==4)){
            if (arrayAprobados[31]==aprobado) {
                bis341 = '';
                bgis341 = '';
                break;
            }else if((arrayAprobados[31]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bis341 = '#000000';
                bgis341 = '#FFFFFF';
                break;
            }else{
                bis341 = '#000000';
                bgis341 = '#A4A4A4';
                break;
            }
        }

        if((i==32)&&(j==4)){
            if (arrayAprobados[32]==aprobado) {
                bis343 = '';
                bgis343 = '';
                break;
            }else if((arrayAprobados[32]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bis343 = '#000000';
                bgis343 = '#FFFFFF';
                break;
            }else{
                bis343 = '#000000';
                bgis343 = '#A4A4A4';
                break;
            }
        }

        if((i==33)&&(j==4)){
            if (arrayAprobados[33]==aprobado) {
                bis345 = '';
                bgis345 = '';
                break;
            }else if((arrayAprobados[33]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bis345 = '#000000';
                bgis345 = '#FFFFFF';
                break;
            }else{
                bis345 = '#000000';
                bgis345 = '#A4A4A4';
                break;
            }
        }

        if((i==34)&&(j==4)){
            if (arrayAprobados[34]==aprobado) {
                bcs321 = '';
                bgcs321 = '';
                break;
            }else if((arrayAprobados[34]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bcs321 = '#000000';
                bgcs321 = '#FFFFFF';
                break;
            }else{
                bcs321 = '#000000';
                bgcs321 = '#A4A4A4';
                break;
            }
        }

        if((i==35)&&(j==4)){
            if (arrayAprobados[35]==aprobado) {
                bis342 = '';
                bgis342 = '';
                break;
            }else if((arrayAprobados[35]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bis342 = '#000000';
                bgis342 = '#FFFFFF';
                break;
            }else{
                bis342 = '#000000';
                bgis342 = '#A4A4A4';
                break;
            }
        }

        if((i==36)&&(j==4)){
            if (arrayAprobados[36]==aprobado) {
                bco342 = '';
                bgco342 = '';
                break;
            }else if((arrayAprobados[36]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bco342 = '#000000';
                bgco342 = '#FFFFFF';
                break;
            }else{
                bco342 = '#000000';
                bgco342 = '#A4A4A4';
                break;
            }
        }

        if((i==37)&&(j==4)){
            if (arrayAprobados[37]==aprobado) {
                bis344 = '';
                bgis344 = '';
                break;
            }else if((arrayAprobados[37]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bis344 = '#000000';
                bgis344 = '#FFFFFF';
                break;
            }else{
                bis344 = '#000000';
                bgis344 = '#A4A4A4';
                break;
            }
        }

        if((i==38)&&(j==4)){
            if (arrayAprobados[38]==aprobado) {
                bis346 = '';
                bgis346 = '';
                break;
            }else if((arrayAprobados[38]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bis346 = '#000000';
                bgis346 = '#FFFFFF';
                break;
            }else{
                bis346 = '#000000';
                bgis346 = '#A4A4A4';
                break;
            }
        }

        if((i==39)&&(j==4)){
            if (arrayAprobados[39]==aprobado) {
                bis348 = '';
                bgis348 = '';
                break;
            }else if((arrayAprobados[39]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bis348 = '#000000';
                bgis348 = '#FFFFFF';
                break;
            }else{
                bis348 = '#000000';
                bgis348 = '#A4A4A4';
                break;
            }
        }

        if((i==40)&&(j==4)){
            if (arrayAprobados[40]==aprobado) {
                bis362 = '';
                bgis362 = '';
                break;
            }else if((arrayAprobados[40]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bis362 = '#000000';
                bgis362 = '#FFFFFF';
                break;
            }else{
                bis362 = '#000000';
                bgis362 = '#A4A4A4';
                break;
            }
        }

        if((i==41)&&(j==4)){
            if (arrayAprobados[41]==aprobado) {
                bec441 = '';
                bgec441 = '';
                break;
            }else if((arrayAprobados[41]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bec441 = '#000000';
                bgec441 = '#FFFFFF';
                break;
            }else{
                bec441 = '#000000';
                bgec441 = '#A4A4A4';
                break;
            }
        }

        if((i==42)&&(j==4)){
            if (arrayAprobados[42]==aprobado) {
                bad441 = '';
                bgad441 = '';
                break;
            }else if((arrayAprobados[42]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bad441 = '#000000';
                bgad441 = '#FFFFFF';
                break;
            }else{
                bad441 = '#000000';
                bgad441 = '#A4A4A4';
                break;
            }
        }

        if((i==43)&&(j==4)){
            if (arrayAprobados[43]==aprobado) {
                bis441 = '';
                bgis441 = '';
                break;
            }else if((arrayAprobados[43]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bis441 = '#000000';
                bgis441 = '#FFFFFF';
                break;
            }else{
                bis441 = '#000000';
                bgis441 = '#A4A4A4';
                break;
            }
        }

        if((i==44)&&(j==4)){
            if (arrayAprobados[44]==aprobado) {
                bis443 = '';
                bgis443 = '';
                break;
            }else if((arrayAprobados[44]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bis443 = '#000000';
                bgis443 = '#FFFFFF';
                break;
            }else{
                bis443 = '#000000';
                bgis443 = '#A4A4A4';
                break;
            }
        }

        if((i==45)&&(j==4)){
            if (arrayAprobados[45]==aprobado) {
                bis445 = '';
                bgis445 = '';
                break;
            }else if((arrayAprobados[45]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bis445 = '#000000';
                bgis445 = '#FFFFFF';
                break;
            }else{
                bis445 = '#000000';
                bgis445 = '#A4A4A4';
                break;
            }
        }

        if((i==46)&&(j==4)){
            if (arrayAprobados[46]==aprobado) {
                bis451 = '';
                bgis451 = '';
                break;
            }else if((arrayAprobados[46]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bis451 = '#000000';
                bgis451 = '#FFFFFF';
                break;
            }else{
                bis451 = '#000000';
                bgis451 = '#A4A4A4';
                break;
            }
        }

        if((i==47)&&(j==4)){
            if (arrayAprobados[47]==aprobado) {
                bis453 = '';
                bgis453 = '';
                break;
            }else if((arrayAprobados[47]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bis453 = '#000000';
                bgis453 = '#FFFFFF';
                break;
            }else{
                bis453 = '#000000';
                bgis453 = '#A4A4A4';
                break;
            }
        }

        if((i==48)&&(j==4)){
            if (arrayAprobados[48]==aprobado) {
                bad451 = '';
                bgad451 = '';
                break;
            }else if((arrayAprobados[48]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bad451 = '#000000';
                bgad451 = '#FFFFFF';
                break;
            }else{
                bad451 = '#000000';
                bgad451 = '#A4A4A4';
                break;
            }
        }

        if((i==49)&&(j==4)){
            if (arrayAprobados[49]==aprobado) {
                bis442 = '';
                bgis442 = '';
                break;
            }else if((arrayAprobados[49]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bis442 = '#000000';
                bgis442 = '#FFFFFF';
                break;
            }else{
                bis442 = '#000000';
                bgis442 = '#A4A4A4';
                break;
            }
        }

        if((i==50)&&(j==4)){
            if (arrayAprobados[50]==aprobado) {
                bad442 = '';
                bgad442 = '';
                break;
            }else if((arrayAprobados[50]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bad442 = '#000000';
                bgad442 = '#FFFFFF';
                break;
            }else{
                bad442 = '#000000';
                bgad442 = '#A4A4A4';
                break;
            }
        }

        if((i==51)&&(j==4)){
            if (arrayAprobados[51]==aprobado) {
                bis444 = '';
                bgis444 = '';
                break;
            }else if((arrayAprobados[51]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bis444 = '#000000';
                bgis444 = '#FFFFFF';
                break;
            }else{
                bis444 = '#000000';
                bgis444 = '#A4A4A4';
                break;
            }
        }

        if((i==52)&&(j==4)){
            if (arrayAprobados[52]==aprobado) {
                bis446 = '';
                bgis446 = '';
                break;
            }else if((arrayAprobados[52]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bis446 = '#000000';
                bgis446 = '#FFFFFF';
                break;
            }else{
                bis446 = '#000000';
                bgis446 = '#A4A4A4';
                break;
            }
        }

        if((i==53)&&(j==4)){
            if (arrayAprobados[53]==aprobado) {
                bad444 = '';
                bgad444 = '';
                break;
            }else if((arrayAprobados[53]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bad444 = '#000000';
                bgad444 = '#FFFFFF';
                break;
            }else{
                bad444 = '#000000';
                bgad444 = '#A4A4A4';
                break;
            }
        }

        if((i==54)&&(j==4)){
            if (arrayAprobados[54]==aprobado) {
                bis452 = '';
                bgis452 = '';
                break;
            }else if((arrayAprobados[54]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bis452 = '#000000';
                bgis452 = '#FFFFFF';
                break;
            }else{
                bis452 = '#000000';
                bgis452 = '#A4A4A4';
                break;
            }
        }

        if((i==55)&&(j==4)){
            if (arrayAprobados[55]==aprobado) {
                bis454 = '';
                bgis454 = '';
                break;
            }else if((arrayAprobados[55]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bis454 = '#000000';
                bgis454 = '#FFFFFF';
                break;
            }else{
                bis454 = '#000000';
                bgis454 = '#A4A4A4';
                break;
            }
        }

        if((i==56)&&(j==4)){
            if (arrayAprobados[56]==aprobado) {
                bad452 = '';
                bgad452 = '';
                break;
            }else if((arrayAprobados[56]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bad452 = '#000000';
                bgad452 = '#FFFFFF';
                break;
            }else{
                bad452 = '#000000';
                bgad452 = '#A4A4A4';
                break;
            }
        }

        if((i==57)&&(j==4)){
            if (arrayAprobados[57]==aprobado) {
                bis541 = '';
                bgis541 = '';
                break;
            }else if((arrayAprobados[57]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bis541 = '#000000';
                bgis541 = '#FFFFFF';
                break;
            }else{
                bis541 = '#000000';
                bgis541 = '#A4A4A4';
                break;
            }
        }

        if((i==58)&&(j==4)){
            if (arrayAprobados[58]==aprobado) {
                bad551 = '';
                bgad551 = '';
                break;
            }else if((arrayAprobados[58]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bad551 = '#000000';
                bgad551 = '#FFFFFF';
                break;
            }else{
                bad551 = '#000000';
                bgad551 = '#A4A4A4';
                break;
            }
        }

        if((i==59)&&(j==4)){
            if (arrayAprobados[59]==aprobado) {
                bad541 = '';
                bgad541 = '';
                break;
            }else if((arrayAprobados[59]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bad541 = '#000000';
                bgad541 = '#FFFFFF';
                break;
            }else{
                bad541 = '#000000';
                bgad541 = '#A4A4A4';
                break;
            }
        }

        if((i==60)&&(j==4)){
            if (arrayAprobados[60]==aprobado) {
                bis543 = '';
                bgis543 = '';
                break;
            }else if((arrayAprobados[60]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bis543 = '#000000';
                bgis543 = '#FFFFFF';
                break;
            }else{
                bis543 = '#000000';
                bgis543 = '#A4A4A4';
                break;
            }
        }

        if((i==61)&&(j==4)){
            if (arrayAprobados[61]==aprobado) {
                bis545 = '';
                bgis545 = '';
                break;
            }else if((arrayAprobados[61]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bis545 = '#000000';
                bgis545 = '#FFFFFF';
                break;
            }else{
                bis545 = '#000000';
                bgis545 = '#A4A4A4';
                break;
            }
        }

        if((i==62)&&(j==4)){
            if (arrayAprobados[62]==aprobado) {
                bis547 = '';
                bgis547 = '';
                break;
            }else if((arrayAprobados[62]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bis547 = '#000000';
                bgis547 = '#FFFFFF';
                break;
            }else{
                bis547 = '#000000';
                bgis547 = '#A4A4A4';
                break;
            }
        }

        if((i==63)&&(j==4)){
            if (arrayAprobados[63]==aprobado) {
                bis551 = '';
                bgis551 = '';
                break;
            }else if((arrayAprobados[63]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bis551 = '#000000';
                bgis551 = '#FFFFFF';
                break;
            }else{
                bis551 = '#000000';
                bgis551 = '#A4A4A4';
                break;
            }
        }

        if((i==64)&&(j==4)){
            if (arrayAprobados[64]==aprobado) {
                bis553 = '';
                bgis553 = '';
                break;
            }else if((arrayAprobados[64]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bis553 = '#000000';
                bgis553 = '#FFFFFF';
                break;
            }else{
                bis553 = '#000000';
                bgis553 = '#A4A4A4';
                break;
            }
        }

        if((i==65)&&(j==4)){
            if (arrayAprobados[65]==aprobado) {
                bis548 = '';
                bgis548 = '';
                break;
            }else if((arrayAprobados[65]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bis548 = '#000000';
                bgis548 = '#FFFFFF';
                break;
            }else{
                bis548 = '#000000';
                bgis548 = '#A4A4A4';
                break;
            }
        }

        if((i==66)&&(j==4)){
            if (arrayAprobados[66]==aprobado) {
                bis542 = '';
                bgis542 = '';
                break;
            }else if((arrayAprobados[66]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bis542 = '#000000';
                bgis542 = '#FFFFFF';
                break;
            }else{
                bis542 = '#000000';
                bgis542 = '#A4A4A4';
                break;
            }
        }

        if((i==67)&&(j==4)){
            if (arrayAprobados[67]==aprobado) {
                bde542 = '';
                bgde542 = '';
                break;
            }else if((arrayAprobados[67]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bde542 = '#000000';
                bgde542 = '#FFFFFF';
                break;
            }else{
                bde542 = '#000000';
                bgde542 = '#A4A4A4';
                break;
            }
        }

        if((i==68)&&(j==4)){
            if (arrayAprobados[68]==aprobado) {
                bis544 = '';
                bgis544 = '';
                break;
            }else if((arrayAprobados[68]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bis544 = '#000000';
                bgis544 = '#FFFFFF';
                break;
            }else{
                bis544 = '#000000';
                bgis544 = '#A4A4A4';
                break;
            }
        }
        if((i==69)&&(j==4)){
            if (arrayAprobados[69]==aprobado) {
                bis546 = '';
                bgis546 = '';
                break;
            }else if((arrayAprobados[69]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bis546 = '#000000';
                bgis546 = '#FFFFFF';
                break;
            }else{
                bis546 = '#000000';
                bgis546 = '#A4A4A4';
                break;
            }
        }
        if((i==70)&&(j==4)){
            if (arrayAprobados[70]==aprobado) {
                bis552 = '';
                bgis552 = '';
                break;
            }else if((arrayAprobados[70]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bis552 = '#000000';
                bgis552 = '#FFFFFF';
                break;
            }else{
                bis552 = '#000000';
                bgis552 = '#A4A4A4';
                break;
            }
        }

        if((i==71)&&(j==4)){
            if (arrayAprobados[71]==aprobado) {
                bis554 = '';
                bgis554 = '';
                break;
            }else if((arrayAprobados[71]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bis554 = '#000000';
                bgis554 = '#FFFFFF';
                break;
            }else{
                bis554 = '#000000';
                bgis554 = '#A4A4A4';
                break;
            }
        }

        if((i==72)&&(j==4)){
            if (arrayAprobados[72]==aprobado) {
                bad552 = '';
                bgad552 = '';
                break;
            }else if((arrayAprobados[72]==noaprobado)&&(arreglo[i][3][1]==ninguno)){
                bad552 = '#000000';
                bgad552 = '#FFFFFF';
                break;
            }else{
                bad552 = '#000000';
                bgad552 = '#A4A4A4';
                break;
            }
        }
    }
}

//var cu = c[0];
//var curso = cu.nombre;
/*
var estado = "desaprobado";
var color_border;
var color_background;
if(estado == "aprobado"){
    color_background = '#81BEF7';
    color_border = '#FF8000';
}else if(esstado="noaprobado"){
    color_border = '#000000';
    color_background = '#A4A4A4';
}else{
    color_border = '#000000';
    color_background = '#A4A4A4';
}*/



var nodos = new vis.DataSet([
    //Curso Serie 100 Impar
    {id:'cc121copia', label:'CC121', group:'100-impar', level:1, title:'aa'},
    {id:'cc121', label:'CC121', group:'100-impar', level:1, title:'Computación Básica',color:{border:bcc121, background:bgcc121, highlight:{border:bcc121,background:bgcc121}}},
    {id:'ma143', label:'MA143', group:'100-impar', level:1, title:'Cálculo I',color:{border:bma143, background:bgma143, highlight:{border:bma143,background:bgma143}}},
    {id:'le141', label:'LE141', group:'100-impar', level:1, title:'Comunicación Oral y Escrita',color:{border:ble141, background:bgle141, highlight:{border:ble141,background:bgle141}}},
    {id:'ma141', label:'MA141', group:'100-impar', level:1, title:'Matemática Básica',color:{border:bma141, background:bgma141, highlight:{border:bma141,background:bgma141}}},
    {id:'ef122', label:'EF122', group:'100-impar', level:1, title:'Deportes Menores',color:{border:bef122, background:bgef122, highlight:{border:bef122,background:bgef122}}},
    {id:'is141', label:'IS141', group:'100-impar', level:1, title:'Algoritmos',color:{border:bis141, background:bgis141, highlight:{border:bis141,background:bgis141}}},
    {id:'ec141', label:'EC141', group:'100-impar', level:1, title:'Economía',color:{border:bec141, background:bgec141, highlight:{border:bec141,background:bgec141}}},
    {id:'md141', label:'MD141', group:'100-impar', level:1, title:'Método del Estudio Universitario',color:{border:bmd141, background:bgmd141, highlight:{border:bmd141,background:bgmd141}}},

    //Curso Serie 100 Par
    {id:'ac121', label:'AC121', group:'100-par', level:2, title:'Folklore',color:{border:bac121, background:bgac121, highlight:{border:bac121,background:bgac121}}},
    {id:'ma142', label:'MA142', group:'100-par', level:2, title:'Matemática Discreta',color:{border:bma142, background:bgma142, highlight:{border:bma142,background:bgma142}}},
    {id:'ad142', label:'AD142', group:'100-par', level:2, title:'Administración General',color:{border:bad142, background:bgad142, highlight:{border:bad142,background:bgad142}}},
    {id:'is142', label:'IS142', group:'100-par', level:2, title:'Programación Orientada a Objetos',color:{border:bis142, background:bgis142, highlight:{border:bis142,background:bgis142}}},
    {id:'ec142', label:'EC142', group:'100-par', level:2, title:'Microeconomía',color:{border:bec142, background:bgec142, highlight:{border:bec142,background:bgec142}}},
    {id:'ma144', label:'MA144', group:'100-par', level:2, title:'Cálculo II',color:{border:bma144, background:bgma144, highlight:{border:bma144,background:bgma144}}},
    {id:'fs142', label:'FS142', group:'100-par', level:2, title:'Física I',color:{border:bfs142, background:bgfs142, highlight:{border:bfs142,background:bgfs142}}},

    //Curso Serie 200 Impar
    {id:'ec241', label:'EC241', group:'200-impar', level:3, title:'Macroeconomía',color:{border:bec241, background:bgec241, highlight:{border:bec241,background:bgec241}}},
    {id:'ec24', label:'EC2', level:3, title:'Macroeconomía', hidden:true},
    {id:'es241', label:'ES241', group:'200-impar', level:3, title:'Estadística I',color:{border:bes241, background:bges241, highlight:{border:bes241,background:bges241}}},
    {id:'fs241', label:'FS241', group:'200-impar', level:3, title:'Física II',color:{border:bfs241, background:bgfs241, highlight:{border:bfs241,background:bgfs241}}},
    {id:'ma243', label:'MA243', group:'200-impar', level:3, title:'Cálculo III',color:{border:bma243, background:bgma243, highlight:{border:bma243,background:bgma243}}},
    {id:'ma241', label:'MA241', group:'200-impar', level:3, title:'Álgebra Lineal',color:{border:bma241, background:bgma241, highlight:{border:bma241,background:bgma241}}},
    {id:'is241', label:'IS241', group:'200-impar', level:3, title:'Estructura de Datos',color:{border:bis241, background:bgis241, highlight:{border:bis241,background:bgis241}}},

    //Curso Serie 200 Par
    {id:'es244', label:'ES244', group:'200-par', level:4, title:'Estadística II',color:{border:bes244, background:bges244, highlight:{border:bes244,background:bges244}}},
    {id:'is242', label:'IS242', group:'200-par', level:4, title:'Métodos Numéricos',color:{border:bis242, background:bgis242, highlight:{border:bis242,background:bgis242}}},
    {id:'is244', label:'IS244', group:'200-par', level:4, title:'Sistemas Eléctricos y Electrónicos',color:{border:bis244, background:bgis244, highlight:{border:bis244,background:bgis244}}},
    {id:'is262', label:'IS262', group:'200-par', level:4, title:'Investigación de Operaciones',color:{border:bis262, background:bgis262, highlight:{border:bis262,background:bgis262}}},
    {id:'is248', label:'IS248', group:'200-par', level:4, title:'Organización y Métodos',color:{border:bis248, background:bgis248, highlight:{border:bis248,background:bgis248}}},       
    {id:'is246', label:'IS246', group:'200-par', level:4, title:'Teoría General de Sistemas',color:{border:bis246, background:bgis246, highlight:{border:bis246,background:bgis246}}},
    {id:'ac222', label:'AC222', group:'200-par', level:4, title:'Arte Musical y Teatral',color:{border:bac222, background:bgac222, highlight:{border:bac222,background:bgac222}}},

    //Curso Serie 300 Impar
    {id:'is34', label:'IS34', group:'300-impar', level:5, title:'Metodología de Sistemas Blandos'},
    {id:'is343', label:'IS343', group:'300-impar', level:5, title:'Metodología de Sistemas Blandos',color:{border:bis343, background:bgis343, highlight:{border:bis343,background:bgis343}}},
    {id:'co341', label:'CO341', group:'300-impar', level:5, title:'Contabilidad General',color:{border:bco341, background:bgco341, highlight:{border:bco341,background:bgco341}}},
    {id:'is341', label:'IS341', group:'300-impar', level:5, title:'Sistemas Digitales y Arquitectura de Computadoras',color:{border:bis341, background:bgis341, highlight:{border:bis341,background:bgis341}}},
    {id:'is347', label:'IS347', group:'300-impar', level:5, title:'Investigación de Operaciones II',color:{border:bis347, background:bgis347, highlight:{border:bis347,background:bgis347}}},
    {id:'is345', label:'IS345', group:'300-impar', level:5, title:'Planeamiento de Sistemas de Información',color:{border:bis345, background:bgis345, highlight:{border:bis345,background:bgis345}}},
    {id:'cs321', label:'CS321', group:'300-impar', level:5, title:'Realidad Nacional',color:{border:bcs321, background:bgcs321, highlight:{border:bcs321,background:bgcs321}}},
    {id:'cs341', label:'CS341', group:'300-impar', level:5, title:'Liderazgo',color:{border:bcs341, background:bgcs341, highlight:{border:bcs341,background:bgcs341}}},

    //Curso Serie 300 Par
    {id:'is346', label:'IS346', group:'300-par', level:6, title:'Sistemas Dinámicos',color:{border:bis346, background:bgis346, highlight:{border:bis346,background:bgis346}}},
    {id:'co342', label:'CO342', group:'300-par', level:6, title:'Sistema de Costos',color:{border:bco342, background:bgco342, highlight:{border:bco342,background:bgco342}}},
    {id:'is344', label:'IS344', group:'300-par', level:6, title:'Sistemas Operativos',color:{border:bis344, background:bgis344, highlight:{border:bis344,background:bgis344}}},
    {id:'is342', label:'IS342', group:'300-par', level:6, title:'Teoría de Decisiones',color:{border:bis342, background:bgis342, highlight:{border:bis342,background:bgis342}}},
    {id:'is348', label:'IS348', group:'300-par', level:6, title:'Modelamiento de Datos',color:{border:bis348, background:bgis348, highlight:{border:bis348,background:bgis348}}},
    {id:'is362', label:'IS362', group:'300-par', level:6, title:'Sistemas de Información I',color:{border:bis362, background:bgis362, highlight:{border:bis362,background:bgis362}}},

    //Curso Serie 400 Impar
    {id:'in44', label:'IN44', group:'400-impar', level:7, title:'Inglés I'},
    {id:'in441', label:'IN441', group:'400-impar', level:7, title:'Inglés I',color:{border:bin441, background:bgin441, highlight:{border:bin441,background:bgin441}}},
    {id:'ec441', label:'EC441', group:'400-impar', level:7, title:'Ingeniería Económica',color:{border:bec441, background:bgec441, highlight:{border:bec441,background:bgec441}}},
    {id:'is441', label:'IS441', group:'400-impar', level:7, title:'Redes de Computadoras',color:{border:bis441, background:bgis441, highlight:{border:bis441,background:bgis441}}},
    {id:'ad441', label:'AD441', group:'400-impar', level:7, title:'Logística',color:{border:bad441, background:bgad441, highlight:{border:bad441,background:bgad441}}},
    {id:'is443', label:'IS443', group:'400-impar', level:7, title:'Adminictración de Base de Datos',color:{border:bis443, background:bgis443, highlight:{border:bis443,background:bgis443}}},
    {id:'is445', label:'IS445', group:'400-impar', level:7, title:'Sistemas de Información II',color:{border:bis445, background:bgis445, highlight:{border:bis445,background:bgis445}}},
    {id:'is451', label:'IS451', group:'400-impar', level:7, title:'Ingeniería de la Información',color:{border:bis451, background:bgis451, highlight:{border:bis451,background:bgis451}}},
    {id:'ad451', label:'AD451', group:'400-impar', level:7, title:'Ingeniería de Software',color:{border:bad451, background:bgad451, highlight:{border:bad451,background:bgad451}}},
    {id:'is453', label:'IS453', group:'400-impar', level:7, title:'Creatividad Empresarial',color:{border:bis453, background:bgis453, highlight:{border:bis453,background:bgis453}}},

    //Curso Serie 400 Par
    {id:'in442', label:'IN442', group:'400-par', level:8, title:'Inglés II',color:{border:bin442, background:bgin442, highlight:{border:bin442,background:bgin442}}},
    {id:'ad442', label:'AD442', group:'400-par', level:8, title:'Gestión Financiera',color:{border:bad442, background:bgad442, highlight:{border:bad442,background:bgad442}}},
    {id:'is444', label:'IS444', group:'400-par', level:8, title:'Seguridad Informática',color:{border:bis444, background:bgis444, highlight:{border:bis444,background:bgis444}}},    
    {id:'is454', label:'IS454', group:'400-par', level:8, title:'Desarrollo Web',color:{border:bis454, background:bgis454, highlight:{border:bis454,background:bgis454}}},
    {id:'is442', label:'IS442', group:'400-par', level:8, title:'Sistemas Expertos',color:{border:bis442, background:bgis442, highlight:{border:bis442,background:bgis442}}},
    {id:'ad444', label:'AD444', group:'400-par', level:8, title:'Gestión de Recursos Humanos',color:{border:bad444, background:bgad444, highlight:{border:bad444,background:bgad444}}},
    {id:'is446', label:'IS446', group:'400-par', level:8, title:'Sistemas de Información Gerencial',color:{border:bis446, background:bgis446, highlight:{border:bis446,background:bgis446}}},
    {id:'ad452', label:'AD452', group:'400-par', level:8, title:'Seminario de Empresas',color:{border:bad452, background:bgad452, highlight:{border:bad452,background:bgad452}}},
    {id:'is452', label:'IS452', group:'400-par', level:8, title:'Calidad Total',color:{border:bis452, background:bgis452, highlight:{border:bis452,background:bgis452}}},

    //Curso Serie 500 Impar
    {id:'in541', label:'IN541', group:'500-impar', level:9, title:'Inglés III',color:{border:bin541, background:bgin541, highlight:{border:bin541,background:bgin541}}},
    {id:'ad541', label:'AD541', group:'500-impar', level:9, title:'Proyectos de Inversión',color:{border:bad541, background:bgad541, highlight:{border:bad541,background:bgad541}}},
    {id:'is545', label:'IS545', group:'500-impar', level:9, title:'Comercio Electrónico',color:{border:bis545, background:bgis545, highlight:{border:bis545,background:bgis545}}},
    {id:'is551', label:'IS551', group:'500-impar', level:9, title:'Reingeniería de Procesos',color:{border:bis551, background:bgis551, highlight:{border:bis551,background:bgis551}}},
    {id:'is541', label:'IS541', group:'500-impar', level:9, title:'Control y Automatización de Procesos',color:{border:bis541, background:bgis541, highlight:{border:bis541,background:bgis541}}},
    {id:'is543', label:'IS543', group:'500-impar', level:9, title:'Seminario de Tesis I',color:{border:bis543, background:bgis543, highlight:{border:bis543,background:bgis543}}},
    {id:'is547', label:'IS547', group:'500-impar', level:9, title:'Auditoría de Sistemas',color:{border:bis547, background:bgis547, highlight:{border:bis547,background:bgis547}}},
    {id:'is553', label:'IS553', group:'500-impar', level:9, title:'Sistemas Distribuidos',color:{border:bis553, background:bgis553, highlight:{border:bis553,background:bgis553}}},
    {id:'ad551', label:'AD551', group:'500-impar', level:9, title:'Mercadotecnia',color:{border:bad551, background:bgad551, highlight:{border:bad551,background:bgad551}}},

    //Curso Serie 500 Par
    {id:'in542', label:'IN542', group:'500-par', level:10, title:'Inglés IV',color:{border:bin542, background:bgin542, highlight:{border:bin542,background:bgin542}}},
    {id:'is548', label:'IS548', group:'500-par', level:10, title:'Planeamiento Estratégico de Negocios',color:{border:bis548, background:bgis548, highlight:{border:bis548,background:bgis548}}},
    {id:'is546', label:'IS546', group:'500-par', level:10, title:'Prácticas Pre-Profesionales',color:{border:bis546, background:bgis546, highlight:{border:bis546,background:bgis546}}},
    {id:'de542', label:'DE542', group:'500-par', level:10, title:'Legislación',color:{border:bde542, background:bgde542, highlight:{border:bde542,background:bgde542}}},
    {id:'ad552', label:'AD552', group:'500-par', level:10, title:'Gestión de Empresas',color:{border:bad552, background:bgad552, highlight:{border:bad552,background:bgad552}}},
    {id:'is542', label:'IS542', group:'500-par', level:10, title:'Seminario de Tesis II',color:{border:bis542, background:bgis542, highlight:{border:bis542,background:bgis542}}},
    {id:'is544', label:'IS544', group:'500-par', level:10, title:'Taller de Ingeniería de Sistemas',color:{border:bis544, background:bgis544, highlight:{border:bis544,background:bgis544}}},
    {id:'is554', label:'IS554', group:'500-par', level:10, title:'Gestión de Centros de Información',color:{border:bis554, background:bgis554, highlight:{border:bis554,background:bgis554}}},
    {id:'is552', label:'IS552', group:'500-par', level:10, title:'Soporte para la Toma decisiones',color:{border:bis552, background:bgis552, highlight:{border:bis552,background:bgis552}}}
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
    //height:'400px',
    //width:'840px',
    interaction:{
        hover:true,
    },
    layout: {
        hierarchical:{
            enabled:true,
            direction:'LR',
            levelSeparation:80,
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
        physics: false,
        labelHighlightBold:false            
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
        btn.click();}

    if(valor == 'le141'){
        var btn = document.getElementById('btnLe141');
        btn.click();}

    if(valor == 'is141'){
        var btn = document.getElementById('btnIs141');
        btn.click();}

    if(valor == 'ec141'){
        var btn = document.getElementById('btnEc141');
        btn.click();}

    if(valor == 'md141'){
        var btn = document.getElementById('btnMd141');
        btn.click();}

    if(valor == 'ef122'){
        var btn = document.getElementById('btnEf122');
        btn.click();}

    if(valor == 'cc121'){
        var btn = document.getElementById('btnCc121');
        btn.click();}

    if(valor == 'ac121'){
        var btn = document.getElementById('btnAc121');
        btn.click();}
    
    if(valor == 'ma142'){
        var btn = document.getElementById('btnMa142');
        btn.click();}
    
    if(valor == 'ad142'){
        var btn = document.getElementById('btnAd142');
        btn.click();}

    if(valor == 'is142'){
        var btn = document.getElementById('btnIs142');
        btn.click();}

    if(valor == 'ec142'){
        var btn = document.getElementById('btnEc142');
        btn.click();}

    if(valor == 'ma144'){
        var btn = document.getElementById('btnMa144');
        btn.click();}

    if(valor == 'fs142'){
        var btn = document.getElementById('btnFs142');
        btn.click();}

    if(valor == 'ec241'){
        var btn = document.getElementById('btnEc241');
        btn.click();}

    if(valor == 'es241'){
        var btn = document.getElementById('btnEs241');
        btn.click();}

    if(valor == 'fs241'){
        var btn = document.getElementById('btnFs241');
        btn.click();}

    if(valor == 'ma243'){
        var btn = document.getElementById('btnMa243');
        btn.click();}

    if(valor == 'ma241'){
        var btn = document.getElementById('btnMa241');
        btn.click();}

    if(valor == 'is241'){
        var btn = document.getElementById('btnIs241');
        btn.click();}    
    
    if(valor == 'es244'){
        var btn = document.getElementById('btnEs244');
        btn.click();}

    if(valor == 'is242'){
        var btn = document.getElementById('btnIs242');
        btn.click();} 

    if(valor == 'is244'){
        var btn = document.getElementById('btnIs244');
        btn.click();}

    if(valor == 'is262'){
        var btn = document.getElementById('btnIs262');
        btn.click();} 

    if(valor == 'is248'){
        var btn = document.getElementById('btnIs248');
        btn.click();}

    if(valor == 'is246'){
        var btn = document.getElementById('btnIs246');
        btn.click();}

    if(valor == 'ac222'){
        var btn = document.getElementById('btnAc222');
        btn.click();}
    
    if(valor == 'is343'){
        var btn = document.getElementById('btnIs343');
        btn.click();}

    if(valor == 'co341'){
        var btn = document.getElementById('btnCo341');
        btn.click();}

    if(valor == 'is341'){
        var btn = document.getElementById('btnIs341');
        btn.click();}

    if(valor == 'is347'){
        var btn = document.getElementById('btnIs347');
        btn.click();}

    if(valor == 'is345'){
        var btn = document.getElementById('btnIs345');
        btn.click();}

    if(valor == 'cs321'){
        var btn = document.getElementById('btnCs321');
        btn.click();}

    if(valor == 'cs341'){
        var btn = document.getElementById('btnCs341');
        btn.click();}

    if(valor == 'is346'){
        var btn = document.getElementById('btnIs346');
        btn.click();}

    if(valor == 'co342'){
        var btn = document.getElementById('btnCo342');
        btn.click();}

    if(valor == 'is344'){
        var btn = document.getElementById('btnIs344');
        btn.click();}

    if(valor == 'is342'){
        var btn = document.getElementById('btnIs342');
        btn.click();}

    if(valor == 'is348'){
        var btn = document.getElementById('btnIs348');
        btn.click();}

    if(valor == 'is362'){
        var btn = document.getElementById('btnIs362');
        btn.click();}

    if(valor == 'in441'){
        var btn = document.getElementById('btnIn441');
        btn.click();}

    if(valor == 'ec441'){
        var btn = document.getElementById('btnEc441');
        btn.click();}
    
    if(valor == 'is441'){
        var btn = document.getElementById('btnIs441');
        btn.click();}

    if(valor == 'ad441'){
        var btn = document.getElementById('btnAd441');
        btn.click();}
    //Curso Serie 400 Impar
    if(valor == 'is443'){
        var btn = document.getElementById('btnIs443');
        btn.click();}

    if(valor == 'is445'){
        var btn = document.getElementById('btnIs445');
        btn.click();}
    if(valor == 'is451'){
        var btn = document.getElementById('btnIs451');
        btn.click();}
    
    if(valor == 'ad451'){
        var btn = document.getElementById('btnAd451');
        btn.click();}

    if(valor == 'is453'){
        var btn = document.getElementById('btnIs453');
        btn.click();}

    if(valor == 'in442'){
        var btn = document.getElementById('btnIn442');
        btn.click();}

    if(valor == 'ad442'){
        var btn = document.getElementById('btnAd442');
        btn.click();}
    
    if(valor == 'is444'){
        var btn = document.getElementById('btnIs444');
        btn.click();}

    if(valor == 'is454'){
        var btn = document.getElementById('btnIs454');
        btn.click();}

    if(valor == 'is442'){
        var btn = document.getElementById('btnIs442');
        btn.click();}

    if(valor == 'ad444'){
        var btn = document.getElementById('btnAd444');
        btn.click();}

    if(valor == 'is446'){
        var btn = document.getElementById('btnIs446');
        btn.click();}

    if(valor == 'ad452'){
        var btn = document.getElementById('btnAd452');
        btn.click();}

    if(valor == 'is452'){
        var btn = document.getElementById('btnIs452');
        btn.click();}

    if(valor == 'in541'){
        var btn = document.getElementById('btnIn541');
        btn.click();}

    if(valor == 'ad541'){
        var btn = document.getElementById('btnAd541');
        btn.click();}
    
    if(valor == 'is545'){
        var btn = document.getElementById('btnIs545');
        btn.click();}

    if(valor == 'is551'){
        var btn = document.getElementById('btnIs551');
        btn.click();}

    if(valor == 'is541'){
        var btn = document.getElementById('btnIs541');
        btn.click();}

    if(valor == 'is543'){
        var btn = document.getElementById('btnIs543');
        btn.click();}

    if(valor == 'is547'){
        var btn = document.getElementById('btnIs547');
        btn.click();}

    if(valor == 'is553'){
        var btn = document.getElementById('btnIs553');
        btn.click();}

    if(valor == 'ad551'){
        var btn = document.getElementById('btnAd551');
        btn.click();}

    if(valor == 'in542'){
        var btn = document.getElementById('btnIn542');
        btn.click();}

    if(valor == 'is548'){
        var btn = document.getElementById('btnIs548');
        btn.click();}

    if(valor == 'is546'){
        var btn = document.getElementById('btnIs546');
        btn.click();}

    if(valor == 'de542'){
        var btn = document.getElementById('btnDe542');
        btn.click();}

    if(valor == 'ad552'){
        var btn = document.getElementById('btnAd552');
        btn.click();}

    if(valor == 'is542'){
        var btn = document.getElementById('btnIs542');
        btn.click();}

    if(valor == 'is544'){
        var btn = document.getElementById('btnIs544');
        btn.click();}

    if(valor == 'is554'){
        var btn = document.getElementById('btnIs554');
        btn.click();}

    if(valor == 'is552'){
        var btn = document.getElementById('btnIs552');
        btn.click();
    }

});
red.on("doubleClick", function (params) {
    params.event = "[original event]";
    //document.getElementById('eventSpan').innerHTML = '<h2>doubleClick event:</h2>' + JSON.stringify("hola", null, 4);;
});

