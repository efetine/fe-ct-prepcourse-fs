function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  if (array.length > 1) {
    array.sort(
      function (a, b) {
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }

        return 0;
      }
    )
  }

  return array
}

module.exports = ordenarArray;
