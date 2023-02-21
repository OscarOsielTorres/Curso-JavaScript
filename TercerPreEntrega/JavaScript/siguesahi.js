//MOVER EL MOUSE
function mostrarMensaje() {
    Swal.fire({
        title: '¿Todo bien?, ¿estas ahi?',
        text: 'Notamos que hace 10 segundos no mueves el mouse',
        icon: 'question',
        showCancelButton: false,
        showConfirmButton: false
    })
}

let myTimeout = setTimeout(mostrarMensaje, 10000);

function cerrarMensaje() {
    Swal.close()
}

function reiniciarContador() {
    cerrarMensaje()
    clearTimeout(myTimeout);
    myTimeout = setTimeout(mostrarMensaje, 10000);
}
document.addEventListener("mousemove", reiniciarContador)