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
function setColor(){
    var pagina=document.body;
    pagina.style.backgroundColor=pagina.style.backgroundColor=="blue" ? "green" : "blue"
}

function stopChangColor(){
    clearInterval(temporizador);
}


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

//Eventos multimedia
const video=document.querySelector(".bostonVideo")

video.addEventListener("play", function(){
    console.log("El video ha iniciado");
})

video.addEventListener("seeking", function(){
    console.log("El video se se esta buscando",this.currentTime);
})

video.addEventListener("ended", function(){
    let resultado=confirm("Desea seguir viendo el video?");
    if(resultado){
        video.play();
    }else{
        window.location="http://www.google.com";
    }
})

//Temporizadores y timers
//Setinterval **ocurre indefinidamente**
var temporizador=setInterval(function(){
    setColor();
},2000)

//SetTimeOut **ocurre solo una vez**
setTimeout(function(){
    setColor();
},3000)