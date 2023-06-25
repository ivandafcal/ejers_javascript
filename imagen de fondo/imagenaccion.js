const fileInput = document.getElementById("fileInput");
let foto = null;

fileInput.addEventListener("change", function() {
	const file = fileInput.files[0]; //poder insertar un fichero que leemos despues
	const reader = new FileReader(); //para leer el fichero que subimos
	reader.addEventListener("load", function() { //funcion para insertar imagen
		foto = new Image();
		foto.src = reader.result;
	});
	reader.readAsDataURL(file);
});

document.addEventListener("keydown", function(event) {
	if (event.altKey && event.code === "F12") { //pulsar tecla alt y evento teclado a la vez
		if (foto) {
			document.body.style.backgroundImage = `url(${foto.src})`;
			document.body.style.backgroundSize = "contain"; //puedes poner contain o cover, con cover corta la imagen
			document.body.style.backgroundPosition = "center";
		}
	}
});
