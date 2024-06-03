function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  let multiplicar = [];
  for (let i = 0; i < array.length; i++) {
    multiplicar.push(array[i] * i);
  }
  return multiplicar;
}

module.exports = multiplicarElementosPorIndice;
