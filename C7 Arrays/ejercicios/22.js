function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60. 
  // Tu código:
  const resultados = []

  for (let i = 0; i <= 10; i++) {
    const result = i * 6

    resultados.push(result)
  }


  return resultados;
}

module.exports = tablaDelSeis;
