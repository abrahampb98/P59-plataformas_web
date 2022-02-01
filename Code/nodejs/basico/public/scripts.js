var xhttp = null

function cargarDatos() {
    xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = obtener_respuesta
    xhttp.open('GET', '/mensaje', true)
    xhttp.send()
}

function obtener_respuesta() {
    if (xhttp && xhttp.readyState == 4 && xhttp.status == 200) {
        mensaje = JSON.parse(xhttp.responseText)
        console.log( mensaje.body )
    }
}