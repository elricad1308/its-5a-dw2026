const POKEAPI_URL = `https://pokeapi.co/api/v2/pokemon/`

import ('./util.js')
  .then(algo => {
    console.log(algo)

    window.suma = algo.suma
  })


/*setTimeout(function () {
    alert('Se acabo el tiempo')
}, 5000)*/

import('https://cdn.jsdelivr.net/npm/bootstrap@6.0.0-alpha.1/dist/js/bootstrap.bundle.min.js')
// callback
.then((bootstrap) => {
    window.bootstrap = bootstrap
})

// Escuchar al evento 'load' asegura que JS se espere hasta que la página esté cargada
window.addEventListener('load', init)

// DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM correctamente creado')
})

let intentos = 0

let zetabyte = 90

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

    // Primer paso obtener la entrada del usuario
    let poke = document.querySelector('#matricula').value
    
    // Segundo paso: lanzar una solicitud asíncrona
    fetch(POKEAPI_URL + poke)
    // JSON : JavaScript Object Notation
    .then(respuesta => {
        return respuesta.json()
    })
    // callback
    .then(datos => {
        console.log(datos)
        document.querySelector("#poke-title").innerHTML = datos.name
        document.querySelector("#poke-img").src = datos.sprites.front_default
    })

    const dialog = new bootstrap.Dialog('#dialog')
    dialog.show()
}

function cancelar (evt) {
    evt.preventDefault()

    document.querySelector('#poke-img').style.display = 'none'
    
    fetch("https://dog.ceo/api/breeds/image/random")
    .then ((respuesta)=>{
        return respuesta.json()
    })
    .then((datos)=>{
        console.log(datos.message)
        document.querySelector('#poke-img').src = datos.message
        document.querySelector('#poke-img').style.display = 'inline-block'
        const dialog = new bootstrap.Dialog('#dialog')
        dialog.show()
    })

    
}