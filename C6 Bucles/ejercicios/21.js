function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  let i = 2
  while (numero >= i) {
    if (i == numero) {
      return true
    }
    i = i * 2;
  }
  return false
}

module.exports = esPotenciaDeDos;
