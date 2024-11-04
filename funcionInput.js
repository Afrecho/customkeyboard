// Inicializar arrays fuera de la función
var keyArray = [];
var altArray = [];
var alt2Array = [];

function actualizarDivs() {
    // Obtener valores de los inputs
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    var input3 = document.getElementById("input3").value;

    // Convertir los inputs a arrays
    keyArray = Array.from(input1);
    altArray = Array.from(input2);
    alt2Array = Array.from(input3);

    // Limpiar la salida antes de actualizar
    var outputDiv = document.getElementById("myDiv"); // Cambia "tu_id_correcto" por el ID de tu div
    outputDiv.innerHTML = ""; // Limpiar el contenido existente

    // Generar divs según la cantidad de caracteres
    for (var i = 0; i < Math.max(keyArray.length, altArray.length, alt2Array.length); i++) {
        var key = keyArray[i] || '';
        var alt = altArray[i] || '';
        var alt2 = alt2Array[i] || '';

        // Solo agregar divs si hay contenido
        if (key || alt || alt2) {
            outputDiv.innerHTML += '<div class="key">' + key + '\n' +
                '<h5 class="alt">' + alt + '</h5>\n' +
                '<h6 class="alt2">' + alt2 + '</h6>\n' +
                '</div>\n\n';
        }
    }
}

// Agregar eventos de input
document.getElementById("input1").addEventListener("input", actualizarDivs);
document.getElementById("input2").addEventListener("input", actualizarDivs);
document.getElementById("input3").addEventListener("input", actualizarDivs);
