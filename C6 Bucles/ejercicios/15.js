function obtenerDiaSemana(numero) {
  // La función recibe un "numero" entre 1 y 7 por argumento.
  // Devuelve el día de la semana correspondiente a este número,
  // por ejemplo, 1 para "Lunes", 2 para "Martes", etc.
  // El día devuelto debe tener mayúscula inicial y no llevar tilde.
  // Si el número no corresponde a un día de la semana, retorna
  // el string "No es un dia de la semana"
  // Tu código:

  let diaSemana;
  switch (numero) {
    case 1:
      diaSemana = "Lunes"
      break;
    case 2:
      diaSemana = "Martes"
      break;
    case 3:
      diaSemana = "Miercoles"
      break;
    case 4:
      diaSemana = "Jueves"
      break;
    case 5:
      diaSemana = "Viernes"
      break;
    case 6:
      diaSemana = "Sabado"
      break;
    case 7:
      diaSemana = "Domingo"
      break;
    default:
      diaSemana = "No es un dia de la semana"
      break;
  }
  return diaSemana
}

module.exports = obtenerDiaSemana;