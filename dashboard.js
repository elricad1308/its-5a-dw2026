let bsDialog

function init () {

    bsDialog = new bootstrap.Dialog('#form-dialog')

    document.querySelector('#btn-agregar')
      .addEventListener('click', () => bsDialog.show())
}

/** NO MODIFICAR */
window.addEventListener('load', () => {
    import('https://cdn.jsdelivr.net/npm/bootstrap@6.0.0-alpha.1/dist/js/bootstrap.bundle.min.js')
        .then(bootstrap => {
            window.bootstrap = bootstrap

            init()
        })
})