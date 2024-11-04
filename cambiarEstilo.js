function cambiarColorKey() {
    const color = document.getElementById('keyColor').value;
    document.documentElement.style.setProperty('--key-color', color);
}

function cambiarColorAlt1() {
    const color = document.getElementById('alt1Color').value;
    document.documentElement.style.setProperty('--alt1-color', color);
}

function cambiarColorAlt2() {
    const color = document.getElementById('alt2Color').value;
    document.documentElement.style.setProperty('--alt2-color', color);
}

function cambiarFondo() {
    const color = document.getElementById('divColor').value;
    document.documentElement.style.setProperty('--fondo-color', color);
}
