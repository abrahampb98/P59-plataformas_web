const storage = require('./storage')

function obtenerProdcuto( filtroPais ) {
    return new Promise((resolve, reject) => {
        resolve( storage.obtener( filtroProducto ) )
    })
}

function agregarProdcuto( producto ) {
    return new Promise((resolve, reject) => {
        if (producto.id == null || producto.nombre ==null) {
            return reject('No existen los datos')
        }
        resolve( storage.agregar( producto ) )
    })
}

function actualizarProducto( producto ) {
    return new Promise((resolve, reject) => {
        if (producto.id == null || producto.nombre ==null) {
            return reject( 'No existen los datos.' )
        }
        resolve( storage.actualizar( producto ) )
    })
}

function eliminarProducto( producto ) {
    return new Promise((resolve, reject) => {
        if (producto.id == null) {
            return reject('No existen los datos.')
        }
        resolve( storage.eliminar( producto ) )
    })
}

module.exports = {
    obtenerProdcuto,
    agregarProdcuto,
    actualizarProducto,
    eliminarProducto,
}