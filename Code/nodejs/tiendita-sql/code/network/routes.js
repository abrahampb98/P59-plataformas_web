const pais = require('../components/pais/network')

const routes = function( server ) {
    server.use('/pais', pais)
}

module.exports = routes