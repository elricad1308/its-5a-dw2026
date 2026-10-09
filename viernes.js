function saludar() {
    const nombre = prompt('Como te llamas?')
    confirm('Te llamas ' + nombre + '?')
    alert('Hola ' + nombre)
}

// Primera opción
const roberto = document.getElementById('roberto')

// Segunda opción
let roberto2 = document.querySelector('#roberto')

// Obsoleta: no la usen
var roberto3 = 'algo'

roberto2.addEventListener('click', function () {
    saludar()
})

document
  .querySelector('img')
  .addEventListener('mouseenter', function () {
    // Seleccionamos el elemento
    document.querySelector('img')
      .classList.toggle('borroso', false)
  })
document
  .querySelector('img')
  .addEventListener('mouseleave', function () {
    document.querySelector('img')
      .classList.toggle('borroso', true)
  })

