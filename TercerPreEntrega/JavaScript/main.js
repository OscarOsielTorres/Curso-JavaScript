
// VARIABLES 
let prods = document.getElementById('prods')
let items = document.getElementById('items')
let footer = document.getElementById('footer')
let templateCard = document.getElementById('template-card').content
let templateFooter = document.getElementById('template-footer').content
let templateCarrito = document.getElementById('template-carrito').content
let fragment = document.createDocumentFragment()

// OBJETO CARRITO VACIO
let carrito = {}


// CAPTURANDO DATOS DESDE LA "BD" CREADA PARA SIMULAR LA LLAMADA DE DATOS

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
    if(localStorage.getItem('carrito')){
        
    }
})

prods.addEventListener('click', e => {
    addProdCarrito(e)
})

items.addEventListener('click', e => { 
    btnAgrQui(e)
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

let addProdCarrito = e => {
    // console.log(e.target.classList.contains('btn'))
    if (e.target.classList.contains('btn')){
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}

// ESTE OBJETO SERA TODO EL CARD Y SUS ELEMENTOS
let setCarrito = objeto => {

    producto = {
        id: objeto.querySelector('.btn').dataset.id,
        nombreProd: objeto.querySelector('h5').textContent,
        precio: objeto.querySelector('p').textContent,
        cantidad: 1
    }
    if (carrito.hasOwnProperty(producto.id)){
        producto.cantidad = carrito[producto.id].cantidad + 1 
    }

    carrito[producto.id] = {...producto}
    hacerCarrito()
}

let hacerCarrito = () => {
    items.innerHTML = ''
    Object.values(carrito).forEach(producto => {
        templateCarrito.querySelector('th').textContent = producto.id
        templateCarrito.querySelectorAll('td')[0].textContent = producto.nombreProd
        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
        templateCarrito.querySelector('.btn-success').dataset.id = producto.id
        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id
        templateCarrito.querySelector('span').textContent = producto.cantidad * producto.precio

        let clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)

    })
    items.appendChild(fragment)
    hacerFooterCarrito()

    
}

let hacerFooterCarrito = () => {
    footer.innerHTML = ''
    if(Object.keys(carrito).length === 0 ){
        footer.innerHTML = `<th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>`
        return
    }
    
    // SUMAR CANTIDADES TOTALES ASI COMO PRECIO TOTAL DEL CARRITO

    let sumaCantidades = Object.values(carrito).reduce((acc, {cantidad}) => acc + cantidad,0)
    let sumaTotalPrecio = Object.values(carrito).reduce((acc,{cantidad,precio}) => acc + cantidad * precio,0)

    templateFooter.querySelectorAll('td')[0].textContent = sumaCantidades
    templateFooter.querySelector('span').textContent = sumaTotalPrecio

    let clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)
    footer.appendChild(fragment)


    let btnComprar = document.getElementById('vaciar-carrito')
    btnComprar.addEventListener('click', () => {
        carrito = {}
        hacerCarrito()
    })
}

let btnAgrQui = e => {
    if(e.target.classList.contains('btn-success')){

    let producto = carrito[e.target.dataset.id]
    producto.cantidad++
    carrito[e.target.dataset.id] = {...producto }
    hacerCarrito()
}

if(e.target.classList.contains('btn-danger')){
    let producto = carrito[e.target.dataset.id]
    producto.cantidad--
    if(producto.cantidad  === 0) {
        delete carrito[e.target.dataset.id]
    } 
    hacerCarrito()

}
e.stopPropagation()
}



