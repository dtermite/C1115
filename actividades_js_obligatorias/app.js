function ej1_1(nombre, apellido, comision, hobbie){
    let cadena= "Mi nombre es: " + nombre + ", mi apellido: " + apellido + ", mi comision es: " + comision + ", y mi hobbie es: " + hobbie;
    console.log(cadena);
}
function ej1_2(){
    console.log(prompt("Ingrese una frase:"));

}
function ej1_3(){
    let nombre=prompt("Ingrese su nombre");
    alert("Hola: " + nombre + " !");
}
function ej1_4(){
    let nombre=prompt("Ingrese su nombre");
    let apellido=prompt("Ingrese su apellido");
    console.log(nombre + " " + apellido);
}
function ej1_5(){
    let anioNac=prompt("Ingrese su año de nacimiento");
    let fecha=new Date();
    let anioActual=fecha.getFullYear();
    let edad=anioActual-parseInt(anioNac);
    console.log("Tiene " + edad + " años" );
}
function ej1_6(){
    let peso=parseFloat(prompt("ingrese su peso"));
    let altura=parseFloat(prompt("ingrese su altura"));
    let imc= peso / (altura*altura);
    alert("Su IMC es: " + imc);
}
function ej1_7(){
    let cantidadDeVentanas=5;
    console.log("La cantidad de ventanas de mi casa es: " + cantidadDeVentanas);
}
function ej1_8(){
    let soyHumano=true;
    console.log(soyHumano);
}
function ej1_9(){
    let miGustoDePizza="Jamon crudo y rucula";
    console.log(miGustoDePizza);
}
function ej1_10(){
    let unica;
    unica=false;
    console.log(unica);
    unica="'Hola'";
    console.log(unica);
    unica=0;
    console.log(unica);
    unica="'Minions'";
    console.log(unica);
}
function ej1_11(){
    let base=parseFloat(prompt("ingrese su base"));
    let altura=parseFloat(prompt("ingrese su altura"));
    let area=(base*altura)/2;
    let perimitro=base+altura;
    alert("El area es de:" + area + " y su perimitro:" + perimitro);
}
function ej1_12(){
    const kilos=0.453592
    let libras=parseFloat(prompt("Ingrese su peso en libras:"));
    let librasKilos=libras*kilos;
    alert("Su peso en kilos es: " + librasKilos.toFixed(2));
}
function ej1_13(){
    let sueldo=parseFloat(prompt("Ingrese su sueldo: "));
    let nuevoSueldo=(sueldo * 1.15);
    console.log(nuevoSueldo.toFixed(2));
}
function ej1_14(){
    let nota=parseInt(prompt("Ingrese nota:"));
    if(nota>=7){
        alert("Aprobado");
    }else{
        alert("Reprobado");
    }
}
function ej1_15(){
    /*
    Categoria 1 - 20%
    Categoria 2 - 15%
    Categoria 3 - 10%
    */
   let sueldo=parseFloat(prompt("Ingrese su sueldo:"));
   let categoria=parseInt(prompt("Ingrese su categoria:"));
   switch(categoria){
       case 1:
           porcentaje=20;
           break;
        case 2:
            porcentaje=15;
            break;
        case 3:
            porcentaje=10;
            break;
        default:
            porcentaje=0;
            alert("La categoria ingresada es incorrecta");
            break;
   }
   if(porcentaje>0){
       let aumento=(sueldo*porcentaje)/100;
       let nuevoSueldo=sueldo+aumento;
       alert("Su nuevo sueldo es: $ " +nuevoSueldo.toFixed(2));
   }
}
function ej1_16(){
    let matricula=prompt("Ingrese la matricula: ");
    let nota=0
    let notas=[];
    let sumatoria=0;
    for(i=1;i<=5;i++){
      nota=parseInt(prompt("ingrese nota "+ i + " de 5"));  
      notas.push(nota);  
    }
    console.log(notas);
    for(i=0;i<=notas.length -1;i++){
        sumatoria +=notas[i];
    }
    let promedio=sumatoria/notas.length;
    if(promedio>=7){
        resultado="Aprobado";
    }else{
        resultado="No Aprobado";
    }
    alert("El alumno con matricula: " + matricula + " con promedio: " + promedio + " su calificación es: " + resultado);
}
function ej1_17(){
    let numeros=[];
    for(i=1;i<=3;i++){
      numero=parseInt(prompt("ingrese numero "+ i + " de 3"));  
      numeros.push(numero);  
    }
    console.log(numeros)
    let mayorValor=numeros[0];
    for(i=1;i<=numeros.length -1;i++){
        if(numeros[i]>=mayorValor){
            mayorValor=numeros[i];
        }
    }
    alert("El mayor valor de los numeros ingresados es: "+mayorValor);
}
function ej2_1(){
    let variable_a=33;
    let variable_b=77;
    let variable_resultado=variable_a+variable_b;
    console.log(variable_resultado);
}
function ej2_2(){
    let variable_a=parseFloat(prompt("Ingrese numero A:"));
    let variable_b=parseFloat(prompt("Ingrese numero B:"));
    let variable_c=parseFloat(prompt("Ingrese numero C:"));
    let variable_d=parseFloat(prompt("Ingrese numero D:"));
    let variable_e=parseFloat(prompt("Ingrese numero E:"));
    let promedio=(variable_a+variable_b+variable_c+variable_d+variable_e)/5;
    console.log(promedio);
}
function ej2_3(){
    let nota1=parseInt(prompt("Ingrese la nota 1:"));
    let nota2=parseInt(prompt("ingrese la nota 2:"));
    if(nota1>nota2){
        alert("La nota 1 es mayor a nota 2");
    }else{
        alert("La nota 1 es menor a nota 2");
    }
}
function ej2_4(){
    let montoCompra=parseFloat(prompt("Ingrese el monto de su compra:"));
    if(montoCompra>100){
        montoCompra=montoCompra-(montoCompra*0.15);
    }
    alert("El importe a pagar es: " + montoCompra.toFixed(2));
}
function ej2_5(){
    const menosOcho=1.5;
    const masOcho=0.5;
    let precio=0;
    let cantidad=parseInt(prompt("Ingrese la cantidad de integrantes del grupo:"));
    if(cantidad>=8){
        precio= masOcho*cantidad;
    }else{
        precio=menosOcho*cantidad;
    }
    alert("El precio a abonar es: "+precio);
}
function ej2_6(){
    let nota1=parseInt(prompt("Ingrese la nota 1:"));
    let nota2=parseInt(prompt("ingrese la nota 2:"));
    if(nota1>nota2){
        alert("La nota 1 es mayor");
    }else{
        alert("La nota 2 es mayor");
    }
}
function ej2_7(){
    let clasificacion=["mala","regular","buena","muy buena","excelente"];
    let puntuacion=parseInt(prompt("Ingrese puntacion entre 0 y 4:"));
    if(puntuacion<0 || puntuacion>4){
        alert("puntuacion incorrecta")
    }else{
        alert("Su puntuacion es: " +clasificacion[puntuacion]);
    }
}
function ej2_8(){
    for(i=59;i>=0;i--){
        console.log(i);
    }
}
function ej2_9(){
   for(i=0;i<=100;i++){
       resto= i % 2;
       if(resto==0){
           console.log(i);
       }
   }
}
function ej2_10(){
    for(i=100;i>=0;i--){
        console.log(i);
    }
}
function ej2_11(){
    let numero=parseInt(prompt("ingrese numeros hasta tipear -1:"));;
    let numeros=[];
    while(numero != -1){
        if(numero != -1){
            numeros.push(numero);
            numero=parseInt(prompt("ingrese numeros hasta tipear -1:"));
        }  
    }
    for(i=0;i<=numeros.length -1;i++){
        console.log("[" + i + "]="+ numeros[i]);
    }
}
function ej2_12(){
    let numero=parseInt(prompt("ingrese numeros hasta tipear -1:"));;
    let numeros=[];
    let promedio=0;
    while(numero != -1){
        if(numero != -1){
            numeros.push(numero);
            numero=parseInt(prompt("ingrese numeros hasta tipear -1:"));
        }  
    }
    for(i=0;i<=numeros.length -1;i++){
        promedio=promedio+numeros[i];
    }
    promedio=promedio/numeros.length;
    console.log(promedio);
}
function ej2_13(){
    let arrProductos=[];
    let arrPrecios=[];
    for(i=1;i<=5;i++){
        let producto=prompt("Ingrese producto:");
        arrProductos.push(producto);
        let precio=parseFloat(prompt("Ingrese precio:"));
        arrPrecios.push(precio);
    }
    for(i=0;i<=arrProductos.length-1;i++){
        console.log("Producto: " + arrProductos[i]+ " precio:" 
        +arrPrecios[i])
    }
}
function ej2_14(){
    let sumaAltura=0;
    let cantAlturas=parseInt(prompt("Ingrese cantidad de Alturas:"));
    for(i=1;i<=cantAlturas;i++){
        let altura=parseFloat(prompt("Ingrese altura:"));
        sumaAltura=sumaAltura+altura;
        console.log(sumaAltura);
    }
    let promedio=sumaAltura/cantAlturas;
    alert("El promedio de "+ cantAlturas + " alturas de de: "+promedio);
}
function ej2_15(){
    arrNumeros=['Huevos','Agua','Niño','San Cono','La Cama','Gato','Perro','Revolver','Incendio','Arroyo','La leche','Patito','Soldado','La yeta','Borracho','Niña bonita','Anillo','Desgracia','Sangre','Pescado','La fiesta','La mujer','El loco','Mariposa','Caballo','Gallina']
    let numero=parseInt(prompt("Ingrese numero del 0 al 25"));
    if(numero>=0 && numero<=25){
        alert("El numero ingresado equivale a: "+arrNumeros[numero]);
    }else{
        alert("numero fuera de rango")
    }
}
function ej2_16(){
    let arrNombres=[];
    let arrApellidos=[];
    for(i=1;i<=10;i++){
        let nombre=prompt("Ingrese Nombre:");
        arrNombres.push(nombre);
        let apellido=prompt("Ingrese Apellido:");
        arrApellidos.push(apellido);
    }
    for(i=0;i<=arrNombres.length-1;i++){
        console.log("El nombre y apellido es:"+arrNombres[i]+", "+arrApellidos[i]);
    }
}
