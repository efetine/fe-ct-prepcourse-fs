function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // NOTA: no debes retornar nada.
   // Tu código:
   const total = arrayOfNumbers.reduce((acc, cv) => {
      return acc + cv
   }, 0);

   cb(total)
}

module.exports = sumarArray;
