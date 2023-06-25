/*   LISTA DE FUNCIONES NECESARIAS
    prepararBorrar
    prepararLista
    actualizarLsta
    anadirTarea
*/
var listaTareas = new Set();
var btMas = document.getElementById("mas");
var tTarea = document.getElementById("tarea");
var uLista  = document.getElementById("lista");

/*
 *Realiza todas las acciones necesarias para añadir la tarea y que se vea en la lista
 */
function anadirTarea(nuevaTarea){
    //buscamos si la tarea existe, si no, la añadimos
    if(listaTareas.has(nuevaTarea)==false){ //EN CASO DE QUE LA TAREA NO EXISTA, LA AÑADIMOS
        
        //almacenamos la nueva tarea en la lista
        listaTareas.add(nuevaTarea);
        actualizarLista();
        
        //creamos el nuevo elemento con la tarea
        let liNuevo = document.createElement("li");
        liNuevo.innerHTML = `<span> ${nuevaTarea} </span>` + `<button> Eliminar </button>`;
        
        //preparamos el evento en el boton 
        prepararBorrar(liNuevo);
        //Ahora la colocamos en su posicion idonea, sabiendo cual es

        if(uLista.children.length>0){
            //comprobamos que el elemento actual siga siendo menor alfabeticamente
            //y de no ser asi, añadimos el nuevoelemento delante del actual
            for (let li of uLista.children){ //recorrer con la variable li la lista de tareas
            let contenidoLi = li.querySelector("span").textContent;
            if(contenidoLi.localeCompare(nuevaTarea, "es")>0){ //si el elem va antes de la nueva tarea, lo inserta antes
                uLista.insertBefore(liNuevo, li);
                return; //abandonamos la funcion
            }
        }
    }
    //tnato en caso de que la lista este vacia o sea el ult elemento lo añadimos
    uLista.appendChild(liNuevo)
}
}

function prepararBorrar(liTarea){
    let boton=liTarea.querySelector("button");
    boton.addEventListener("click",(ev)=>{
        //target=objeto al que se le aplica el evento // el nodo padre es el parent, en este caso es liTarea y span,
        let textoLista = ev.target.parentNode.querySelector("span").textContent;
        //borramos el elemento de la lista
        uLista.removeChild(ev.target.parentNode);
        listaTareas.delete(textoLista);
        actualizarLista();
    })
}

//Quiero mostrar el contenido de la lista de tareas en forma de lista ordenada
function prepararLista (arrayTareas){
    //recorremos el set y mostramos la lista
    for (let textoLi of arrayTareas){
        let liNuevo = document.createElement("li");
        liNuevo.innerHTML = `<span> ${textoLi} </span>` + `<button> Eliminar </button>`;
        prepararBorrar(liNuevo);
        uLista.appendChild(liNuevo);
}
}

//poner el LocalStorage al dia
function actualizarLista (){
    localStorage.setItem("listaTareas", JSON.stringify([...listaTareas])) //con esos 3 puntitos convertimos a formato JSON y bonito en lista
}

if (localStorage.getItem("listaTareas")){
    //leemos arraytareas
    let arrayTareas = JSON.parse(localStorage.getItem("listaTareas"));
    prepararLista(arrayTareas);
    //convertimos el array a un Set
    listaTareas=new Set(arrayTareas);
}

//evento añadir tarea
btMas.addEventListener("click", (ev)=> {
    ev.preventDefault();
    anadirTarea(tTarea.value);
    tTarea.value="";
    tTarea.focus();
});