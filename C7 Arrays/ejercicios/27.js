function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  // let resultado = "";
  // for (i = 0; i < palabras.length; i++) {
  //   resultado = resultado + " " + palabras[i]
  // }
  // return resultado.trim();
  return palabras.join(" ");
}


module.exports = dePalabrasAFrase;
