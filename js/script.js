
var op = parseInt(prompt("Seleccione la opcion: "));
var x=0,y=0;

function suma(a,b){
    return (parseInt(a)+parseInt(b));
}

function resta(a,b){
    return (parseInt(a)-parseInt(b));
}

function multi(a,b){
    return (parseInt(a)*parseInt(b));
}

function divi(a,b){
    return(parseInt(a)/parseInt(b));
}

function cubica(a){
    return Math.pow(parseFloat(a),1/3);
}

function facto(a){
    let i, s=1;
    for(i=1; i<a+1;i++){
        s*=i;
    }return s;
}

function pot(a){
    return a*a;
}

function d2(){
    x = prompt("N1: ");
    y = prompt("N2: ");
}
function d1 (){
    x = Number(prompt("N1: "));
}

switch(op){
    case 1: d2();
    document.write(suma(x,y));
    break;

    case 2: d2();
    document.write(resta(x,y));
    break;

    case 3: d2();
    document.write(multi(x,y));
    break;

    case 4: d2();
    document.write(divi(x,y));
    break;

    case 5: d1();
    document.write(cubica(x));
    break;

    case 6: d1();
    document.write(facto(x));
    break;

    case 7: d1();
    document.write(pot(x));
    break;
}


/*
if(n1 < n2){
document.write(n2," es mayor que ",n1)
}else{
    document.write(n1 ," es mayor que ", n2)
}
*/

