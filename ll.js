// Función para generar números aleatorios
function generarNumerosAleatorios(cantidad, minimo = 0, maximo = 100) {
  const numeros = [];
  for (let i = 0; i < cantidad; i++) {
    numeros.push(Math.floor(Math.random() * (maximo - minimo + 1)) + minimo);
  }
  return numeros;
}

// Ejemplo de uso
console.log(generarNumerosAleatorios(10, 1, 50));
