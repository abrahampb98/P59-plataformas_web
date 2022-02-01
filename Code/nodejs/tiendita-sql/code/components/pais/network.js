const express = require('express')
const controller = require('./controller')
const response = require('../../network/response')

const routes = express.Router()

routes.get('/', function(req, res){
    controller.obtenerPaises()
        .then((data) => response.success(req, res, data))
        .catch((error) => response.error(req, res, error) )
})

module.exports = routes