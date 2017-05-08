var b=5;
const a = "5";
if(b==a){
    /* es cierto mismo valor */
    console.log("Es igual")
}else{
    console.error("No es igual");
}

if (b===a){
    /* Es falso son el mismo valor pero no el mismo tipo */
    console.trace("Es identico");
}
else{
    console.info("Es distinto");
}
function decirHola() {
    alert("Hola Mundo!");
}


