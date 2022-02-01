const storage = require('./storage')

function obtenerPaises() {
    return new Promise((resolve, reject) => {
        resolve( storage.obtener() )
    })
}

module.exports = {
    obtenerPaises,
}