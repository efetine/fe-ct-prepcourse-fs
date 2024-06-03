function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let result = a
  for (let i = a + 1; i <= b; i++) {
    if (result == 0 || i == 0) {
      result = 0
    } else {
      result = result * i;
    }
  }
  return result
}
module.exports = productoEntreNúmeros;