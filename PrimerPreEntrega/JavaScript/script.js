window.onload = iniciar;

//Pedir Nombre del cliente a evaluar




for (let consulta = 1; consulta <= 3; consulta++) {
    
    let ingresarNombre = prompt("Ingresar nombre");
    if(ingresarNombre=="ESC"){
        break
    }
    while(ingresarNombre ==""){
        ingresarNombre = prompt("No puede quedar en blanco")}
        alert(" Consulta  N° "+ consulta +" Nombre: "+ingresarNombre);
    }


function iniciar(){
   let btnCalcular = document.getElementById("botonCalcular");
   btnCalcular.addEventListener("click", clickbtnCalcular);
}

function clickbtnCalcular(){

    let txtaltura = document.getElementById("txtaltura");
    let altura = txtaltura.value;
    if (altura == ""){
        alert ("No ingresaste una altura");
    }
    
    let txtpeso = document.getElementById("txtpeso");
    let peso = txtpeso.value;
    if (peso == ""){
        alert ("No ingresaste tu peso");
    }
    
    let imc = peso / (altura * altura);

    if (imc < 18.5){
        alert("Su IMC es de:" +" " + Math.round(imc)+ " " + "estas bajo peso" )
    }
    else if (imc >= 18.5 && imc <= 24.9){
        alert("Su IMC es de :" +" " + Math.round(imc)+ " "  + "estas en tu peso ideal" )
    }
    else if (imc >= 25 && imc <=29.9){
        alert("Su IMC es de:" +" " + Math.round(imc)+ " "  + "estas en sobrepeso" )
    }
    else if (imc >= 30 && imc <=39.9){
        alert("Su IMC es de:" +" " + Math.round(imc)+ " "  + "tienes obesidad" )
    }
    else if (imc >= 40)
        alert("Su IMC es de:" +" " + Math.round(imc)+ " "  + "tienes obesidad extrema")
    
}