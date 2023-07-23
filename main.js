// Función para calcular el costo total
function costoTotalProductos() {
    let costoTotal = 0;
  
    // Se solicita  al usuario los valores de productos mediante prompt
    for (let i = 1; i <= 4; i++) {
      let costo = parseFloat(prompt(`Ingrese el costo del Producto ${i}:`));
      if (costo > 0) {
        costoTotal += costo;
      }
    }
  
    // Mostramos  el resultado del costo total mediante alert
    alert(`El costo total es: $${costoTotal}`);
  }
  
  costoTotalProductos();