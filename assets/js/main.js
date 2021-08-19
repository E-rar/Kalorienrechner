function rechnen(){
let gewicht=document.getElementById("gewicht").value;
let größe=document.getElementById("größe").value;
let alter=document.getElementById("alter").value;
let grundUmsatz=0;
if(gewicht==null||größe==null||alter==null||document.getElementById("männlich").checked==false&&document.getElementById("weiblich").checked==false){//wenn eine angabe fehlt kommt es zur fehlermeldung
    alert("es fehlen Angaben !");
}
else{ //ansonsten führe die funktion aus 


if(document.getElementById("männlich").checked){ //für männlich
    grundUmsatz=664.7+(13.7*gewicht)+(5*größe)-(6.8*alter);
}
else{ //für weiblich
    grundUmsatz=655.1+(9.6*gewicht)+(1.8*größe)-(4.7*alter);
}
let pal=document.getElementById("pal").value; //der palwert wird gegeben 
const kJ=4.184;
console.log(pal);
function printGrU(){
    document.getElementById("grkcal").innerHTML=grundUmsatz.toFixed(0);
    document.getElementById("gukcal").innerHTML=(pal*grundUmsatz).toFixed(0);
    document.getElementById("grkJ").innerHTML=(kJ*(grundUmsatz)).toFixed(0);
    document.getElementById("gukJ").innerHTML=(kJ*(pal*grundUmsatz)).toFixed(0);
}
printGrU();
}
}