

let prods = document.getElementById('prods')

// CAPTURANDO DATOS DESDE LA "API" CREADA PARA SIMULAR LA LLAMADA DE DATOS

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
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

        let clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    prods.appendChild(fragment)
}
