const express = require('express')
const bodyParser = require('body-parser')
const response = require('./network/response')

const router = express.Router()

let app = express()

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({extended:false}) )
app.use( router )

router.get('/mensaje', function(req, res) {
    if (req.query.error == 'ok') {
        response.error(req, res, 'Error en el GET.')
    } else {
        response.success(req, res, 'Hola desde GET')
    }
})

router.post('/mensaje', function(req, res) {
    response.success(req, res, 'Hola desde POST')
})

router.delete('/mensaje', function(req, res) {
    response.success(req, res, 'Hola desde DELETE')
})

app.use('/', express.static('public'))

let puerto = 8000
app.listen(puerto)
console.log(`La aplicacion esta escuchando http://localhost:${puerto}`)