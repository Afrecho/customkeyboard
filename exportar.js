function exportToPDF() {
    const element = document.getElementById('myDiv');
    const options = {
        margin: 1, // Ajusta el margen según sea necesario
        filename: 'exported_keyboard.pdf',
        html2canvas: { scale: 2 }, // Aumenta la escala para mejorar la calidad
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' } // Ajusta el formato y orientación
    };

    html2pdf()
      .set(options)
      .from(element)
      .save();
}

// Asegúrate de agregar el evento al botón de exportar
document.getElementById("exportKeyboard").addEventListener("click", exportToPDF);
