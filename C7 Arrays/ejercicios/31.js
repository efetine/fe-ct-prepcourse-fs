function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  let result = ""
  for (i = texto.length - 1; i >= 0; i--) {
    result = result + texto[i]
  }
  return result
}
module.exports = invertirTexto;
