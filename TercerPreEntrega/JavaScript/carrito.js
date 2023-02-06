
let ClickButton = document.querySelectorAll(".button")
let carrito = []

ClickButton.forEach(btn => {
    btn.addEventListener('click', addProdAlCarrito)
})

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

function addNewProduct(nuevoItem){

    carrito.push(nuevoItem)
    actualizarCarrito()
}

function actualizarCarrito(){
    console.log(carrito)
}