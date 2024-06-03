function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  for (i = 0; i < array.length; i++) {
    let palabra = array[i];
    if (palabra.length >= 5) {
      return palabra;
    }
  }
  return undefined
}

module.exports = obtenerPrimerStringLargo;
