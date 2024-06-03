function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:
  const a = str1.length
  const b = str2.length
  const c = str3.length
  let caracter
  if (a > b && a > c) {
    caracter = a
  } else if (b > a && b > c) {
    caracter = b
  } else if (c > a && c > b) {
    caracter = c
  } else {
    caracter = a
  }
  // // if (a > b) {
  // //   if (a > c) {
  // //     mayor = a
  // //   } else {
  // //     mayor = c
  // //   }
  // // } else {
  // //   if (b > c) {
  // //     mayor = b
  // //   } else {
  // //     mayor = c
  // //   }
  // //   mayor = b > c ? b : c
  // }

  let result = ""

  for (i = 0; i < caracter; i++) {

    if (str1[i] != undefined) {
      result = result + str1[i]
    }
    if (str2[i] != undefined) {
      result = result + str2[i]
    }
    if (str3[i] != undefined) {
      result = result + str3[i]
    }
  }
  return result
}

module.exports = combine;