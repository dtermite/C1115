"use strict"
/*
var y = 5;
var texto = "";

do{
    for (let x = 0; x < y; x++) {
        texto = texto + "*";
    }
    console.log(texto)
    texto = "";
    y--;
} 
while (y>0);
*/

//Eventos del mousse
const boton=document.querySelector('.boton');

boton.addEventListener('click', function() {
    console.log("El boton se ha pulsado");
})

boton.addEventListener('mouseover', function() {
    console.log("El mousse esta sobre el boton");
})

boton.addEventListener('mouseout', function() {
    console.log("El mousse esta fuera del boton mousse");
})

//Eventos de teclado

window.addEventListener("keydown", function(event) {
    console.log("pulsando tecla");
    console.log(String.fromCharCode(event.keyCode));
})

window.addEventListener("keypress", function(event) {
    console.log("tecla pulsada");
})

window.addEventListener("keyup", function(event) {
    console.log("tecla liberada");
})

// Carga de documento

window.addEventListener('load',function(){
    console.log("La pagina se ha cargado");
})