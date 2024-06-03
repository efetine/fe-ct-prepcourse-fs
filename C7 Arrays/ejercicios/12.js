function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  const result = [];
  for (i = 0; i < array.length; i++) {
    let x = array[i];
    result.push(x.toUpperCase());
  }
  return result
}

module.exports = convertirStringAMayusculas;
