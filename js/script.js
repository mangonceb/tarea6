//Funcionalidad: Permite escribir sólo letras y en el momento en que se escribe una nueva la anterior se convierte a chino actualizándose la cadena
function soloLetras(event) {
    var key = event.keyCode;
    if ((key >= 65 && key <= 90)) {
        //Conversión del carácter introducido en mayúscula ya que algunas minúsculas no se traducen en chino
        var cadena = document.getElementById("entrada").value.toUpperCase();
        var posicion = cadena.length - 1;
        var codigoUnicode = cadena.charCodeAt(posicion);
        if (posicion >= 0) {
            var chino = unescape("%u" + codigoUnicode + "e8");
            cadena = cadena.substring(0, cadena.length - 1);
            cadena = cadena + chino;
            document.getElementById("entrada").value = cadena;
        //Este else evita que al introducir la primera letra de la cadena el unicode devuelva undefined al ser la posición de la cadena -1
        } else {
            cadena = "";
        }

    }
    //Devuelve cualquier letra, incluso el delete para poder borrar la cadena
    return ((key >= 65 && key <= 90) || key == 8)
        ;
};




