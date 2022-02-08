const pool = require('../../bd')
const { obtenerProductos } = require('./controller')

async function obtenerProductos( filtroProducto ) {
    let results = null
    if (filtroProducto) {
        results = await pool.query('SELECT * FROM producto WHERE nombre LIKE $1', [ '%' + filtroProducto + '%' ])
    } else {
        results = await pool.query('SELECT * FROM producto')
    }
    return results.rows
}

async function agregarProducto( producto ) {
    let resultado = await pool.query('INSERT INTO pais(id_pais, nombre) VALUES($1, $2)', [producto.id, producto.nombre])
    return producto
}

async function actualizarProducto( producto ) {
    let resultado = await pool.query('UPDATE pais SET nombre=$1 WHERE id_pais = $2', [producto.nombre, producto.id])
    return producto
}

async function eliminarProducto( producto ) {
    let resultado = await pool.query('DELETE FROM pais WHERE id_producto = $1', [producto.id])
    return producto
}

module.exports = {
    obtener: obtenerProductos, 
    agregar: agregarProducto,
    actualizar: actualizarProducto,
    eliminar: eliminarProducto,
}