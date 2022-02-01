const pool = require('../../bd')

async function obtenerPaises() {
    let results = null
    results = await pool.query('SELECT * FROM pais')
    return results.rows
}

module.exports = {
    obtener: obtenerPaises, 
}