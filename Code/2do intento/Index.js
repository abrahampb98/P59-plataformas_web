
var arrayImagenes = [];
var arrayImagenes1 = ["01.jpg" , "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg"]

var url = "Galeria_01/";
var imagen_actual = 0;


function cambiarDeImagen(id) {
    var boton = id;

    if(boton == 'anterior') {
        imagenActual--;
        if(imagenActual < 0) {
            imagenActual = arrayImagenes.length -1; 
        } 
    }

    if(boton == 'siguiente') {
        imagenActual ++;
        
        if(imagenActual == arrayImagenes.length) {
            imagenActual = imagenActual;
        } 
    }

    var imagen = arrayImagenes[imagenActual];
    document.getElementById('foto_galeria').src = url + imagen;

}

function setImgGalleryArray(id) {
  // Id del div que selecciona la galería
  var galeria = id;

  if(galeria == 'galery1') {
    arrayImagenes = arrayImagenes1
    document.getElementById("foto_galeria").src="Galeria_01/01.jpg";
    direccion = "Galeria_01/";
    
  }

  if(galeria == 'galery2') {
    arrayImagenes = arrayImagenes2

document.getElementById("foto_galeria").src="Galeria_02/01.jpg";
direccion = "Galeria_02/";

  }

  if(galeria == 'galery3') {
    arrayImagenes = arrayImagenes3
document.getElementById("foto_galeria").src = "Galeria_03/01.jpg";

direccion = "Galeria_03/";
    
  }

  
}
