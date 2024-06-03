function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   if (array.length === 0) return undefined;

   let x = Math.random() * (array.length - 1);
   let y = Math.round(x);
   return array[y]
}

module.exports = obtenerElementoAleatorio;
