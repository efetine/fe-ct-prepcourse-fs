function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  // let arrayInvertido = []
  // while (array.length !== 0) {
  //   arrayInvertido.push(array.pop());
  // }
  // return arrayInvertido;
  let arrayInvertido = []
  let i = 0
  while (array.length !== i) {
    i++
    let element = array[array.length - i];
    arrayInvertido.push(element);
  }
  return arrayInvertido;

}

module.exports = invertirArray;
