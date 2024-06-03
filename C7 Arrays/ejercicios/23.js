function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:
  const resultado = [];

  for (i = 0; i < 10; i++) {
    num = (num + 2);
    resultado.push(num);

    if (num == i) {
      return "Se interrumpió la ejecución";
    }
  }

  return resultado;

  // const resultado = [];
  // let breaked = false;
  // for (i = 2; i <= 20; i = i + 2) {
  //   const result = num + i;
  //   resultado.push(result);

  //   if (result == i) {
  //     // return "Se interrumpió la ejecución";
  //     breaked = true
  //     break;
  //   }
  // }

  // if (breaked == true) {
  //   return "Se interrumpió la ejecución";
  // } else {
  //   return resultado;
  // }
}

module.exports = breakStatement;
