function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   let result = []
   for (i = 0; i < arrayOfStrings.length; i++) {

      if (arrayOfStrings[i][0] == "a") {
         result.push(arrayOfStrings[i])
      }
   }
   return result
}
module.exports = filter;
