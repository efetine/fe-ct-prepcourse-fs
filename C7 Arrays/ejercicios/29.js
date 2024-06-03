function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  if (numeros.length == 0) {
    return null
  }
  for (i = 0; i < numeros.length - 1; i++) {
    let a = numeros[i]
    let b = numeros[i + 1]
    if (a + 1 != b) {
      return (a + 1)
    }
  }
  return null
}

module.exports = encontrarNumeroFaltante;