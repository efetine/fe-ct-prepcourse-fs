function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  // const duplicate = [...numeros]
  for (i = 0; i < numeros.length; i++) {
    let a = numeros[i]
    let isDuplicated = false

    for (j = 0; j < numeros.length; j++) {
      let b = numeros[j]

      if (isDuplicated == true && a == b) {
        return a
      }

      if (a == b) {
        isDuplicated = true
      }
    }
  }
  // const duplicate = [...numeros]
  // let repetidos = Array.from(numeros, () => 0)
  // for (i = 0; i < numeros.length; i++) {
  //   let a = numeros[i]
  //   for (j = 0; j < duplicate.length; j++) {
  //     let b = duplicate[j]

  //     if (a == b) {
  //       repetidos[i] = repetidos[i] + 1
  //     }
  //   }
  // }
}
module.exports = encontrarElementoRepetido;