function colors(color) {
  // La función recibe un color. Retorna el string correspondiente:
  // En caso que el color recibido sea "blue"   --> "This is blue".
  // En caso que el color recibido sea "red"    --> "This is red".
  // En caso que el color recibido sea "green"  --> "This is green".
  // En caso que el color recibido sea "orange" --> "This is orange".
  // Si no es ninguno de esos colores           --> "Color not found".
  // PISTA: utilizar el statement SWITCH.
  // Tu código:
  let resultadoColor;
  switch (color) {
    case "blue":
      resultadoColor = "This is blue"
      break;
    case "red":
      resultadoColor = "This is red"
      break;
    case "green":
      resultadoColor = "This is green"
      break;
    case "orange":
      resultadoColor = "This is orange"
      break;
    default:
      resultadoColor = "Color not found"
      break;
  }
  return resultadoColor
}


module.exports = colors;
