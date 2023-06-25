
//Todo el codigo lo colocamos de forma que tengamos asegurada toda la carga del DOM, con evento LOAD
//Cuando se haya cargado con load, procede a la funcion entera:

window.addEventListener("load",function(ev){
    //Asignacion de elementos
    var imagen=document.getElementById("imagen");
    var combo=document.getElementById("tipo");
    var serie=document.getElementById("serie");
    var labelSerie=document.getElementById("labelSerie");
    var labelDescripcion=document.getElementById("labelDescripcion");
    var enviar=document.getElementById("enviar");
    var mostrarDescripcion=document.getElementById("mostrarDescripcion");
    var capaError=document.getElementById("capaError");
    var fDescripcion=document.getElementById("fDescripcion");

    //Cuadro combinado que cambia la imagen, creando evento que cambia la imagen con ev change segun la opcion elegida
    combo.addEventListener("change",function(ev){

        imagen.setAttribute("src", `img/${combo.value}.jpg`);
        labelSerie.removeAttribute("class");
        serie.removeAttribute("class");
    });

    //Si se coloca el foco en el numero de serie, quitamos los errores si salen, ev focus
    serie.addEventListener("focus",function(ev){

        capaError.textContent="";
        labelSerie.classList.remove("error");
        serie.classList.remove("error");
    });

    //Validacion del numero de serie al intentar enviar los datos, ev click
    enviar.addEventListener("click",function(ev){

        //CONDICIONES QUE DEBE CUMPLIR EL NUMERO DE SERIE EN EL ENUNCIADO,EXP REGULAR > 3 NUMEROS,4 LETRAS,TERMINAR EN 1 O 2 O A
        if(/^[0-9]{3}[A-Z]{4}[12A]$/.test(serie.value)==false){
            ev.preventDefault();
            capaError.textContent="Código no válido";
            labelSerie.classList.add("error");
            serie.classList.add("error");
        }
    });

    //Click en el boton descripcion, muestra una capa con el área de texto y la etiqueta
    mostrarDescripcion.addEventListener("click",function(ev){

        fDescripcion.style.display="inline-block";
        this.style.display="none";
    });

});