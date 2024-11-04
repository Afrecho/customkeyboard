
function borrarCampos() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
    
    document.getElementById("keyArray").value = "";
    document.getElementById("altArray").value = "";
    document.getElementById("alt2Array").value = "";
    
    document.getElementById("arraysGenerados").value = "";
    document.getElementById("codigoHTML").value = "";
    document.getElementById("textoGenerado").value = "";
  }

  function copiarCodigoJS() {
  var codigoJS = document.getElementById("textoGenerado");
  codigoJS.select();
  document.execCommand("copy");
  alert("El código JavaScript ha sido copiado al portapapeles.");
}

function imprimirTextoGenerado() {
var divsGenerados = document.getElementById("codigoHTML").value;
var textoGenerado = `function hangulContent() {
var div = document.getElementById('myDiv');
div.innerHTML = \`
    <div id="myDiv">
      <div class="marca">printyourkeyboard.kom</div>
      ${divsGenerados}
    </div>
\`;
}`;
document.getElementById("textoGenerado").value = textoGenerado;
}

/*
document.addEventListener("DOMContentLoaded", function() {
  var input1 = document.getElementById("input1");
  var keyDivs = document.querySelectorAll(".key");

  input1.addEventListener("input", function() {
    var inputText = input1.value;
    var characters = Array.from(inputText);

    for (var i = 0; i < keyDivs.length; i++) {
      var character = characters[i] || "";
      if (character === " ") {
        character = "&nbsp;"; // Insertar espacio vacío
      }
      keyDivs[i].innerHTML = character;
    }
  });
});
*/



/*CARGAR IMAGEN*/
function previewImage() {
    var fileInput = document.getElementById('imagen');
    var preview = document.getElementById('imagen-previa');

    if (fileInput.files && fileInput.files[0]) {
      var reader = new FileReader();

      reader.onload = function(e) {
        preview.src = e.target.result;
        preview.style.display = 'block';
      }

      reader.readAsDataURL(fileInput.files[0]);
    }
  }

  function limpiarImagen() {
    var fileInput = document.getElementById('imagen');
    var preview = document.getElementById('imagen-previa');

    fileInput.value = ""; 
    preview.src = "#"; 
    preview.style.display = 'none'; 
  }

