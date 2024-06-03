function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  // let ordenado = [];
  // for (let i = 0; i < array.length; i++) {
  //   if (array[i] == 'Enero' || array[i] == 'Marzo' || array[i] == 'Noviembre') {
  //     ordenado.push(array[i]);
  //   }
  // }
  // if (ordenado.length == 3) {
  //   return ordenado;
  // }
  // return "No se encontraron los meses pedidos";

  // Solucion 2
  let tieneEnero = false;
  let tieneMarzo = false;
  let tieneNoviembre = false;
  const ordenado = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] == 'Enero') {
      tieneEnero = true;
    } else if (array[i] == 'Marzo') {
      tieneMarzo = true;
    } else if (array[i] == 'Noviembre') {
      tieneNoviembre = true;
    }

    if (array[i] == 'Enero' || array[i] == 'Marzo' || array[i] == 'Noviembre') {
      ordenado.push(array[i]);
    }
  }

  if (tieneEnero && tieneMarzo && tieneNoviembre) {
    return ordenado;
  }
  return "No se encontraron los meses pedidos"
}

module.exports = mesesDelAño;
