import { Dialog } from './bootstrap.js'

// Escuchar al evento 'load' asegura que JS se espere hasta que la página esté cargada
window.addEventListener('load', init)

// DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM correctamente creado')
})

let intentos = 0

function init () {
    document
      .querySelector('#guardar')
      .addEventListener('click', guardar)

    document
      .querySelector('#cancelar')
      .addEventListener('click', cancelar)
}

function guardar (evt) {
    evt.preventDefault()
    console.log('presionaste el boton guardar')
    /*intentos += 1

    if (intentos >= 5)
        alert('Pagina bloqueada')*/
    const dialog = new Dialog('#dialog')
    dialog.show()
}

function cancelar (evt) {
    evt.preventDefault()
    console.log('you pressed the cancel button')
}