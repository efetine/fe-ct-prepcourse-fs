function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:
   let lettersUno = []
   let countersUno = []
   if (str1.length !== str2.length) {
      return false
   }
   for (let i = 0; i < str1.length; i++) {

      if (lettersUno.includes[str1[i]] == true) {
         let foundLetter = lettersUno.findIndex(letter => letter == str1[i])
         countersUno[foundLetter]++  // counter[foundLetter] = counter[foundLetter] + 1
      } else {
         lettersUno.push(str1[i])
         countersUno.push(1)
      }
   }
   let lettersDos = []
   let countersDos = []
   for (let j = 0; j < str1.length; j++) {

      if (lettersDos.includes[str1[i]] == true) {
         let foundLetter = lettersDos.findIndex(letter => letter == str1[i])
         countersDos[foundLetter]++  // counter[foundLetter] = counter[foundLetter] + 1
      } else {
         lettersDos.push(str1[i])
         countersDos.push(1)
      }
   }
   if (countersUno.length !== countersDos.length) {
      return false
   }
   for (i = 0; i < lettersUno.length; i++) {
      if (lettersDos.includes[lettersUno[i]] == true) {
         let idx = lettersDos.findIndex(letter => letter == lettersUno[i])
         if (countersUno[i] !== countersDos[idx]) {
            return false
         }
      }

   }
   return true
}

module.exports = esAnagrama;
