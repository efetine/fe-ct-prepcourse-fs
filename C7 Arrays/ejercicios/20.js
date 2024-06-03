function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  let valorAnterior = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] !== valorAnterior) {
      return false;
    }
    valorAnterior = array[i];
  }
  return true;
}

module.exports = todosIguales;
