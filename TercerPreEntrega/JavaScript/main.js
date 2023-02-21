

let prods = document.getElementById('prods')


// CAPTURANDO DATOS DESDE LA "API" CREADA PARA SIMULAR LA LLAMADA DE DATOS

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})

prods.addEventListener('click', e => {
    addProdCarrito(e)
})

const fetchData = async () => {
    try {
        let respuesta = await fetch('inventario.json')
        let data = await respuesta.json()
        hacerCard(data)  
        }
        catch(error){}

}

const hacerCard = (data) => {

    // USAMOS TEMPLATE PARA HACER LA PLANTILLA 
let templateCard = document.getElementById('template-card').content
let fragment = document.createDocumentFragment()

    data.forEach(producto => {
        templateCard.querySelector('h5').textContent = producto.nombreProd
        templateCard.querySelector('p').textContent = producto.precio
        templateCard.querySelector('img').setAttribute("src", producto.thumbnailUrl)
        templateCard.querySelector(".btn").dataset.id = producto.id

        let clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    prods.appendChild(fragment)
}

// HAREMOS COLECCION DE OBJETOS 
// OBJETO CARRITO VACIO
let carrito = {}


let addProdCarrito = e => {
    // console.log(e.target.classList.contains('btn'))
    if (e.target.classList.contains('btn')){
    }
    e.stopPropagation()
}

let setCarrito = objeto => {

    let producto = {
        id: objeto.querySelector('.btn').dataset.id,
        nombreProd: objeto.querySelector('h5').textContent,
        precio: objeto.querySelector('p').textContent,
        cantidad: 1
    }
    if (carrito.hasOwnProperty()){}
}

