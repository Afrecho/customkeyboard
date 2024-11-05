

function guardarPreset() {
    // obtener valores de colores
    const colorPreset = {
        keyColor: document.getElementById('keyColor').value,
        alt1Color: document.getElementById('alt1Color').value,
        alt2Color: document.getElementById('alt2Color').value,
        fondoColor: document.getElementById('divColor').value
    };

    //   guardar en localStorage
    localStorage.setItem('colorPreset', JSON.stringify(colorPreset));
    alert('Preset de colores guardado correctamente');
}

function cargarPreset() {
    // obtener preset guardado
    const savedPreset = localStorage.getItem('colorPreset');
    
    if (savedPreset) {
        const colorPreset = JSON.parse(savedPreset);
        
    // actualizar los inputs de color
        document.getElementById('keyColor').value = colorPreset.keyColor;
        document.getElementById('alt1Color').value = colorPreset.alt1Color;
        document.getElementById('alt2Color').value = colorPreset.alt2Color;
        document.getElementById('divColor').value = colorPreset.fondoColor;
        
            // aplicar los colores
        document.documentElement.style.setProperty('--key-color', colorPreset.keyColor);
        document.documentElement.style.setProperty('--alt1-color', colorPreset.alt1Color);
        document.documentElement.style.setProperty('--alt2-color', colorPreset.alt2Color);
        document.documentElement.style.setProperty('--fondo-color', colorPreset.fondoColor);
        
        alert('Preset de colores cargado correctamente');
    } else {
        alert('No hay preset guardado');
    }
}