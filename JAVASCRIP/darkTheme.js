// Crear título
const titulo = document.createElement("h1");
titulo.textContent = "Proyecto Manipulación del DOM";
titulo.style.textAlign = "center";
document.body.appendChild(titulo);

// Crear párrafo (contenido estático)
const parrafo = document.createElement("p");
parrafo.textContent = "Esta página fue creada únicamente con JavaScript.";
parrafo.style.textAlign = "center";
document.body.appendChild(parrafo);

// Crear caja animada
const caja = document.createElement("div");
caja.style.width = "100px";
caja.style.height = "100px";
caja.style.backgroundColor = "red";
caja.style.position = "relative";
caja.style.margin = "50px auto";
document.body.appendChild(caja);

// Variable posición
let posicion = 0;

// Función animación
function animarCaja() {
    posicion += 2;
    caja.style.left = posicion + "px";

    if (posicion < 300) {
        requestAnimationFrame(animarCaja);
    }
}

// Crear botón
const boton = document.createElement("button");
boton.textContent = "Iniciar Animación";
boton.style.display = "block";
boton.style.margin = "20px auto";
document.body.appendChild(boton);

// Evento botón
boton.addEventListener("click", function() {
    posicion = 0;
    animarCaja();
});