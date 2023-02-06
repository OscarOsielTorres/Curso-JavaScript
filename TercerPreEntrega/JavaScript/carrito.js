
// DECLARANDO VARIABLES 
let ClickButton = document.querySelectorAll(".button")
const tbody = document.querySelector(".tbody")

// Array vacio de carrito
let carrito = []

// Evento de Click en Boton 
ClickButton.forEach(btn => {
    btn.addEventListener('click', addProdAlCarrito)
})


// FUNCION AGREGAR AL CARRITO
function addProdAlCarrito (e){
    let boton = e.target
    let producto = boton.closest('.card')
    let nombreProd = producto.querySelector('.card-title').textContent;
    let precioProd = producto.querySelector('.precio').textContent;
    let imgProd =  producto.querySelector('.card-img-top').src;

    const nuevoItem = {
        producto: nombreProd,
        precio: precioProd,
        img: imgProd,
        cantidad: 1
    }
    addNewProduct(nuevoItem)
}
// LLENANDO EL CARRITO HACIENDOLE PUSH DE LOS NUEVOS PRODCTOS
function addNewProduct(nuevoItem){

    // Agregando tiempo de show del alert producto añadido
    
    const alert = document.querySelector('.alert')
    setTimeout( function(){
        alert.classList.add('hide')
        }, 2000)
        alert.classList.remove('hide')
    
const elementoInput = tbody.getElementsByClassName(".inputElement")


//  CICLO FOR PARA RECORRER el carrito en busqueda del mismo producto 
for (let i = 0; i < carrito.length; i++) {
    if(carrito[i].producto.trim() === nuevoItem.producto.trim()){
        carrito[i].cantidad++;
        let valorInput = elementoInput[i]
        valorInput.value++;
        totalCarrito()
        return null;

    }
    
}
    carrito.push(nuevoItem)
    actualizarCarrito()
}

function actualizarCarrito(){
    tbody.innerHTML = ""
    carrito.map(prod => {
        const tr = document.createElement('tr')
        tr.classList.add('prodCarrito')
        const Contenido = 
        `<th scope="row">1</th>
        <td class="tabla_productos">
        <img src= ${prod.img} alt="">
        <h6 class="title"> ${prod.producto} </h6></td>
        
        <td class="tabla_precios"><p>${prod.precio}</p></td>
        
        <td class="tabla_cantidad">
            <input type="number" min="1" value=${prod.cantidad} class="inputElement">
            <button class="borrar btn btn-danger">X</button>
        </td>`

        tr.innerHTML = Contenido;
        tbody.append(tr)

        tr.querySelector(".borrar").addEventListener('click',removeItemCarrito)
        // tr.querySelector(".inputElement").addEventListener('change', sumarCantidad)

    })
    totalCarrito()
}


// FUNCION PARA IR SUMANDO LOS PRECIOS MULTIPLICADOS POR LA CANTIDAD ELEGIDA
    // CONSIGUIENDO EL TOTAL
function totalCarrito(){
    let total = 0;
    const totalCarrito = document.querySelector(".totalCarrito");
    carrito.forEach((prod) => {
        let precio = Number(prod.precio.replace("$",'' ))
        total = total + precio*prod.cantidad
    })

    totalCarrito.innerHTML = `Total $${total}`
    addLocalStorage()


}

// FUNCION PARA EL BOTON BORRAR DEL CARRITO 
function removeItemCarrito(e){
    const botonBorrar = e.target
    let tr = botonBorrar.closest("prodCarrito")
    const title = tr.querySelector(".producto").textContent;

    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].nombreProd.trim() === nombreProd.trim()){
            carrito.splice(i,1)
        }
    }

    // Agregando tiempo de show del alert producto removido
    
    const alert = document.querySelector('.alert')
    setTimeout( function(){
        alert.classList.add('remove')
        }, 2000)
        alert.classList.remove('remove')

        
    tr.remove()
    totalCarrito()

}


function sumarCantidad(e){
    const sumaInput = e.target;
    let tr = sumaInput.closest('.prodCarrito')
    const title = tr.querySelector('.producto').textContent;
    carrito.forEach((prod) => {
        if(producto.nombreProd.trim() === nombreProd)
        sumaInput.value < 1 ?(sumaInput.value = 1) : sumaInput.value;
        producto.cantidad = sumaInput.value;
        totalCarrito()

    })
}

function addLocalStorage(){
    localStorage.setItem("carrito",JSON.stringify(carrito))

}

window.onload = function(){
    const storage = JSON.parse(localStorage.getItem('carrito'));
    if(storage){ 
        carrito = storage;
        actualizarCarrito()

    }
}