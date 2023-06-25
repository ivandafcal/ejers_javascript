let capa1=document.getElementById("capa1");
let capa2=document.getElementById("capa2");

//drag = una vez iniciado el arrastre ocurre el evento
capa1.addEventListener("drag", (ev)=>{
    capa1.style.opacity=.5;
});

//dragend = cuando el usuario ha terminado de arrastrar
capa1.addEventListener("dragend", (ev)=>{
    capa1.style.opacity=1;
    capa1.style.backgroundColor="transparent";
});

//dragenter = cuando el elemento que se arrastra entra en el elemento destino
capa2.addEventListener("dragenter", (ev)=>{
    capa2.style.backgroundColor="red";
});

//dragleave= cuando el elemento sale del destino,capa2
capa2.addEventListener("dragleave", (ev)=>{
    capa2.style.backgroundColor="transparent";
});

//drop = cuando el elemento de origen se suelte dentro del elemento destino
//a tener en cuenta, hay que eliminar el comportamiento por defecto con Drop, utilizas DRAGOVER
capa2.addEventListener("dragover", (ev)=>{
    ev.preventDefault();
});
capa2.addEventListener("drop", (ev)=>{
    document.body.removeChild(capa1);
    capa2.textContent="Lo has logrado";
    capa2.style.backgroundColor="yellow";
});

