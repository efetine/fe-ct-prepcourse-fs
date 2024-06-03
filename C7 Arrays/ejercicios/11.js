function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  const dupliArray = [];
  for (i = 0; i < array.length; i++) {
    let result = array[i] * 2;
    dupliArray.push(result);
  }
  return dupliArray
}

module.exports = duplicarElementos;
