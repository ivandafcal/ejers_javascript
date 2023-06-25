var capaevaluacion=document.getElementById("capaevaluacion");

//el raton entra en la capa
//mouseenter = el evento ocurre al mover el cursor dentro del elemento
capaevaluacion.addEventListener("mouseenter", (ev)=>{
    capaevaluacion.style.backgroundColor="pink";
});

//el raton sale de la capa
//mouseleave = se realiza cuando sale del elemento
capaevaluacion.addEventListener("mouseleave", (ev)=>{
    capaevaluacion.style.background="white";
});

//se aprieta el boton sobre la capa
//mousedown = cuando el usuario pulsa el boton sobre el elemento, antes de soltarlo
capaevaluacion.addEventListener("mousedown", (ev)=>{
    //propiedad button = boton del raton que pulsas. Si da 0, es el ppal, si da 2, es el secundario, si da 1 es la ruedecita del medio
    if(ev.button==0){
        capaevaluacion.style.backgroundColor="blue";
    }else if(ev.button=2){
        capaevaluacion.style.backgroundColor="yellow";
    }
});

//se suelta el boton sobre la capa
//mouseup = cuando suelta el boton del raton pulsado
capaevaluacion.addEventListener("mouseup", (ev)=>{
    capaevaluacion.style.backgroundColor="transparent";
});

//preventDefault = evitar un evento que es por defecto (en este caso, que no salga menu cuando das al derecho del raton)
//contextmenu = pedir el menu contextual, boton derecho
capaevaluacion.addEventListener("contextmenu", (ev)=>{
    ev.preventDefault();

});