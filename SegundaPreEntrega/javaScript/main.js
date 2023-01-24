// PRIMER INTENTO CARRITO

// // DECLARANADO VARIABLES
// let contadorComidas = 0

// const pedido =[];

// // MOLDE PARA CREAR OBJETOS "COMIDAS"
// class Pedido{
//     constructor (primerTiempo, segundoTiempo, tercerTiempo) {
//     this.primerTiempo = primerTiempo;
//     this.segundoTiempo = segundoTiempo;
//     this.tercerTiempo = tercerTiempo;
//     }
// }

// // CREANDO NUEVOS OBJETOS
// const comida1 = new Pedido ("Consome", "Arroz", "Tacos");
// const comida2 = new Pedido ("Sopa", "Spaghetti", "Milanesa");
// const comida3 = new Pedido ("Lentejas", "Chilaquiles", "Hamburguesa");

// pedido.push(comida1, comida2, comida3);
// console.log(pedido);

// let precios = [60, 75, 80]
// let primer_tiempo = ["Consome", "Sopa", "Lentejas"];
// let segundo_tiempo = ["Arroz", "Spaghetti", "Chilaquiles"];
// let tercer_tiempo = ["Tacos", "Milanesa", "Hamburguesa"];

// let menu_de_platillos = ["Consome", "Sopa", "Lentejas", "Arroz", "Spaghetti", "Chilaquiles", "Tacos", "Milanesa", "Hamburguesa"];

// let search = prompt("ingrese el platillo que busca")

// function buscarPlatillo(menu_de_platillos, search){
//     for( let i =0; i < menu_de_platillos.length; i++){
//         if (menu_de_platillos[i] === search) {
//             console.log("El platillo pertenece al Primer Tiempo");
//             break;
//         }
//



// SEGUNDO INTENTO CARRITO


const platillos = [

    // Primer tiempo

    {nombreDelPlatillo: "Lentejas", precio: 10 },
    {nombreDelPlatillo: "Consome", precio: 10 },
    {nombreDelPlatillo: "Sopa", precio: 10 },
 
    // Segundo tiempo

    {nombreDelPlatillo: "Arroz", precio: 10 },
    {nombreDelPlatillo: "Pasta", precio: 10 },
    {nombreDelPlatillo: "Chilaquiles", precio: 10 },
 
    // Tercer tiempo
    
    {nombreDelPlatillo: "Tacos", precio: 10 },
    {nombreDelPlatillo: "Milanesa", precio: 10 },
    {nombreDelPlatillo: "Hamburguesa", precio: 10 },
];

let pedido =[];
const SALIR = "no"

let saludoBienvenida = alert("Hola, le gustaria iniciar su orden?");
let opcionElegida = prompt(`Si o ${SALIR} para salir`)

while (opcionElegida != "si" && opcionElegida != `${SALIR}`){
    alert("Por favor ingrese una opción valida")
    opcionElegida = prompt("Desea comprar algo ¿ si o no ?")
}
    
if (opcionElegida == "si"){
    alert ("Te mostraré el menú")

 let menu = platillos.map((platillos) => platillos.nombreDelPlatillo + " " + "$" + platillos.precio );
 alert(menu.join( " " + "--" + " "))
    
} else if (opcionElegida == `${SALIR}`){
    alert("Gracias por visitarnos, Vuelve pronto")
}
while (opcionElegida == "si"){
    let platillo = prompt("Agrega el platillo de tu eleccion al pedido")
    let precio = 0

if (platillo == "Lentejas" || 
    platillo == "Consome"  ||
    platillo == "Sopa"     ||
    platillo == "Arroz"    ||
    platillo == "Pasta"    ||
    platillo == "Chilaquiles" ||
    platillo == "Tacos" ||
    platillo == "Milanesa" ||
    platillo == "Hamburguesa"){

    switch (platillo){

            case "Lentejas": 
                precio = 10 ;
                break;
            case "Consome": 
                precio = 10 ;
                break;
            case "Sopa": 
                precio = 10 ;
                break;
            case "Arroz": 
                precio = 10 ;
                break;
            case "Pasta": 
                precio = 10 ;
                break;
            case "Chilaquiles": 
                precio = 10 ;
                break;
            case "Tacos": 
                precio = 10 ;
                break;
            case "Milanesa": 
                precio = 10 ;
                break;
            case "Hamburguesa": 
                precio = 10 ;
                break;
                default:
                break;
        }

    let cantidadPlatillos = Number(prompt("¿Cuántas (unidades) deseas llevar de dicho platillo? "))
    
    pedido.push({platillo, cantidadPlatillos, precio})
    console.log(pedido)
    } else {
        alert("Ese platillo no esta en el menú")
    }

    opcionElegida = prompt("Desea continuar agregando productos al pedido?")
    while (opcionElegida == `${SALIR}`){
        alert("Gracias por tu compra!, Hasta pronto!");
       
           
          
     pedido.forEach((pedidoFinal) => { console.log(`Platillo: ${pedidoFinal.platillo}, Cantidad: ${pedidoFinal.cantidadPlatillos}, Total a pagar por producto: ${pedidoFinal.cantidadPlatillos * pedidoFinal.precio}`)
        })
        break;
    }
}

let total = pedido.reduce((acc, element) => acc + element.precio * element.cantidadPlatillos, 0)
console.log(`El Total a pagar por su pedido es de: ${total}`)   

for (const pedidos of pedido) {
    console.log(pedido.monto)
}

let buscar = prompt("¿QUERES BUSCAR UNA FACTURA?, SI QUIERE CANCELAR INGRESE ESC")

if (buscar != SALIR) {
    const resultado = pedido.find((pedido) => pedido.nombre === buscar.toUpperCase())
    alert(`PEDIDO ${pedido.indexOf(resultado)+1} con nombre ${resultado.nombrePlatillo} y monto ${resultado.precio}.  El total de todo es ${total}`)
}







// ADAPTANDO EJEMPLO PROFE 

// let cantidad_pedidos = Number(prompt("Ingrese La Cantidad de Pedidos a recibir")) //PIDO LA CANTIDAD PARA EL segundo CICLO DE FOR (comidas por pedido)

// let platillo = ["Tacos", "Hamburguesa", "Milanesa"]
// let cantidad_comidas = Number(prompt("Ingrese cuantas comidas tendrá el Pedido")) //PIDO LA CANTIDAD PARA EL primer ciclo for (comidas por pedido)
// let total = 0
// let promedio = 0


// const SALIR = "ESC"
// const pedidos = [];

// for (let platillo = 1; platillo <= cantidad_comidas; platillo++) {
//     let nombre = prompt(`ingrese su platillo o ${SALIR} para salir`)
//     if(nombre=="ESC" || nombre == "esc"){
//         break
//     } else if (platillo === "Tacos"){
//         alert("Su Platillo es de:" +" " + precios[0])
//     } else if (platillo === "Hamburguesa"){
//         alert("Su Platillo es de:" +" " + precios[1])
//     }
//     else if (platillo === "Milanesa"){
//         alert("Su Platillo es de:" +" " + precios[2])
// }
//     while(nombre ==""){
//         nombre = prompt("No puede quedar en blanco este espacio")}

//     }

//     class Pedido {
//         constructor(nombre, monto) {
//             this.nombre = nombre.toUpperCase();
//             this.monto = parseFloat(monto);
//             this.montoConIva = 0
//             this.items = []
//         }
//         sumaIva() {
//             this.montoConIva = this.monto * 1.21;
//         }}
//     //     agregaDetalle(detalle) {
//     //         if ((detalle.nombre != undefined) && (Number(detalle.monto) != NaN)) {
//     //             // this.items.push(detalle)
//     //             this.items.push({
//     //                 nombre: detalle.nombre,
//     //                 monto: detalle.monto
//     //             })
//     //         }
//     //         return
//     //         //items = []
//     //     }
//     // }


// for (let pedido = 1; pedido <= cantidad_pedidos; pedido++) {
//     let pedido = prompt(`ingrese nombre del pedido o ${SALIR} para salir`)
//     let monto = precios[0];
//     pedidos.push(new Pedido(nombre, monto));
//     total = calcularTotal(pedidos)
//     console.log(`PEDIDO ${pedido} con nombre ${nombre} y monto ${monto}. El total de todo es ${total}`)


// // function calcularTotal(items) {
// //     let totalInterino = 0
// //     for (const item of items) {
// //         totalInterino = totalInterino + item.monto
// //     }
// //     return totalInterino
// // }
// // for (const pedido of pedidos)
// //     pedido.sumaIva();

// // promedio = calcularPromedio(pedidos)

// // function escondicionSalida(texto) {
// //     if (texto == SALIR) {
// //         return true
// //     }
// //     return false
// // }

// // function calcularPromedio(items) {
// //     let cantidad = items.length
// //     let totalInterino = 0
// //     for (const item of items) {
// //         totalInterino = totalInterino + item.monto
// //     }
// //     console.log(`El promedio es ${totalInterino / cantidad}`)
// //     return totalInterino / cantidad
// // }
// // //bonus track
//  for (const pedido of pedidos) {
//      console.log(pedido.monto)
// }

// let buscar = prompt("¿QUERES BUSCAR UN Pedido?, SI QUIERE CANCELAR INGRESE ESC")

//  if (buscar != SALIR) {
//      const resultado = pedidos.find((pedido) => pedido.nombre === buscar.toUpperCase())
//     alert(`PEDIDO ${pedidos.indexOf(resultado)+1} con nombre ${resultado.nombre} y monto ${resultado.monto}. El iva es ${resultado.montoConIva}. El total de todo es ${total}`)
//  }



