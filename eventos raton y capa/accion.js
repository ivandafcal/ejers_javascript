var capa=document.getElementById("capa");

//el raton entra en la capa
//mouseenter = el evento ocurre al mover el cursor dentro del elemento
capa.addEventListener("mouseenter", (ev)=>{
    capa.style.backgroundColor="green";
});

//el raton sale de la capa
//mouseleave = se realiza cuando sale del elemento
capa.addEventListener("mouseleave", (ev)=>{
    capa.style.background="transparent";
});

//se aprieta el boton sobre la capa
//mousedown = cuando el usuario pulsa el boton sobre el elemento, antes de soltarlo
capa.addEventListener("mousedown", (ev)=>{
    //propiedad button = boton del raton que pulsas. Si da 0, es el ppal, si da 2, es el secundario, si da 1 es la ruedecita del medio
    if(ev.button==0){
        capa.style.backgroundColor="red";
    }else if(ev.button=2){
        capa.style.backgroundColor="blue";
    }
});

//se suelta el boton sobre la capa
//mouseup = cuando suelta el boton del raton pulsado
capa.addEventListener("mouseup", (ev)=>{
    capa.style.backgroundColor="green";
});

//preventDefault = evitar un evento que es por defecto (en este caso, que no salga menu cuando das al derecho del raton)
//contextmenu = pedir el menu contextual, boton derecho
capa.addEventListener("contextmenu", (ev)=>{
    ev.preventDefault();

});