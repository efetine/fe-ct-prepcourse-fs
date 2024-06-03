function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  if (array.length <= 1) {
    return 0
  }

  let mayor = array[0];
  let posicion = 0;
  for (let i = 1; i < array.length; i++) {
    if (mayor < array[i]) {
      mayor = array[i];
      posicion = i;
    }
  }
  return posicion;
}

module.exports = encontrarIndiceMayor;
