let bsDialog

let pokeData

function init () {
    let savedData = localStorage.getItem('pokedata')

    if (savedData) {
        pokeData = JSON.parse(savedData)
    } else {
        pokeData = []
    }

    render(pokeData)

    bsDialog = new bootstrap.Dialog('#form-dialog')

    document.querySelector('#btn-buscar')
      .addEventListener('click', request)

    document.querySelector('#btn-agregar')
      .addEventListener('click', () => bsDialog.show())
}

async function request () {
    try {
        const busqueda = document.querySelector('#inp-search').value
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${busqueda}`)
        const datos = await response.json()

        bsDialog.hide()

        pokeData.push({
            id: datos.id,
            name: datos.name,
            sprite: datos.sprites.front_default
        })

        render(pokeData)
    } catch (er) {
        alert('Pokemon no encontrado')
    }
}

function render (data) {
    localStorage.setItem('pokedata', JSON.stringify(pokeData))

    let htmlRows = ''

    for (let [index, poke] of data.entries()) {
        htmlRows += /* html */ `
        <tr>
          <td>${poke.id}</td>
          <td>${poke.name}</td>
          <td>
            <img src="${poke.sprite}">
            <button data-index="${index}" class="table-btn-close btn-close btn-solid theme-danger" title="Eliminar">
                X
            </button>
          </td>
        </tr>`
    }

    document.querySelector('tbody').innerHTML = htmlRows

    document.querySelectorAll('.table-btn-close')
      .forEach(element => {
        const index = element.dataset.index

        document.querySelector(`button[data-index="${index}"]`)
          .addEventListener('click', () => {
            pokeData.splice(index, 1)

            render(pokeData)
          })        
      })
}

/** NO MODIFICAR */
window.addEventListener('load', () => {
    import('https://cdn.jsdelivr.net/npm/bootstrap@6.0.0-alpha.1/dist/js/bootstrap.bundle.min.js')
        .then(bootstrap => {
            window.bootstrap = bootstrap

            init()
        })
})