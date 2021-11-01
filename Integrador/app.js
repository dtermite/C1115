function validarDatos(nombre, apellido, correo, cantidad,descuento){
    let cant=parseInt(cantidad);
    if(isNaN(cant)){
        cant=0;
    }
    console.log(cant);
    let desc=parseFloat(descuento);
    console.log(desc);
    if (nombre==""){
        alert("Debe ingresar su nombre");
    }else if(apellido==""){
        alert("Debe ingresar su apellido");
    }else if(correo==""){
        alert("Debe ingresar su dirección de correo")
    }else if(cant==0 || cant<0){
        alert("La cantidad a ingresar debe ser mayor a cero")
    }else if(desc==0){
        alert("Debe seleccionar una categoria")
    }else{
        let total=aPagar(cantidad,descuento);
        document.getElementById("pagar").innerHTML="Total a pagar: $ "+total ; 
    }
}

function aPagar(cantidad,descuento){
    let desc=(parseFloat(descuento)*200)/100;
    let precio=200 - desc;
    let total=parseInt(cantidad)*precio;
    return total;
}

var total=document.getElementById("resumen");
total.addEventListener('click', function() {
    //console.log("El boton se ha pulsado");
    let nombre=document.getElementById("nombre").value ;
    let apellido=document.getElementById("apellido").value ;
    let correo=document.getElementById("email").value ;
    let descuento=document.getElementById("tipo").value ;
    let cantidad=document.getElementById("cantidad").value ;
    validarDatos(nombre,apellido,correo,cantidad,descuento);
})

var borrar=document.getElementById("reset");
borrar.addEventListener('click',function(){
    document.getElementById("pagar").innerHTML="Total a pagar: $ ";  
})

var seleccion=document.getElementById("desc80");
seleccion.addEventListener('click',function(){
    document.getElementById("tipo").value=80;
})  

var seleccion=document.getElementById("desc50");
seleccion.addEventListener('click',function(){
    document.getElementById("tipo").value=50;
})  

var seleccion=document.getElementById("desc15");
seleccion.addEventListener('click',function(){
    document.getElementById("tipo").value=15;
})  





