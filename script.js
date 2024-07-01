function calcularNota() {
      const notaProducto1 = parseFloat(document.getElementById('notaProducto1').value);
    const notaProducto2 = parseFloat(document.getElementById('notaProducto2').value);
    const notaProducto3 = parseFloat(document.getElementById('notaProducto3').value);
    const notaDesempeno1 = parseFloat(document.getElementById('notaDesempeno1').value);
    const notaDesempeno2 = parseFloat(document.getElementById('notaDesempeno2').value);
    const notaConocimiento = parseFloat(document.getElementById('notaConocimiento').value);

    // Calcular promedios y ponderaciones
    const promedioProductos = (notaProducto1 + notaProducto2 + notaProducto3) / 3;
    const promedioDesempeno = (notaDesempeno1 + notaDesempeno2) / 2;

    const notaFinal = (promedioProductos * 0.4) + (promedioDesempeno * 0.3) + (notaConocimiento * 0.3);

    // Determinar si aprueba o reprueba
    let mensaje = `La nota definitiva es: ${notaFinal.toFixed(2)}. `;
    if (notaFinal >= 3.5) {
        mensaje += "Aprendiz aprobado";
    } else {
        mensaje += "Aprendiz no aprobado.";
    }

    // Mostrar resultado
    document.getElementById('resultado').innerText = mensaje;
}

function limpiarFormulario() {
    document.getElementById('notasForm').reset();
    document.getElementById('resultado').innerText = '';
}
