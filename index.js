// Ingresar la cantidad de juegos ganados por el jugador A y el jugador B
let m = prompt("Ingresa la cantidad de juegos ganados por el jugador A:");
let n = prompt("Ingresa la cantidad de juegos ganados por el jugador B:");

// Verificar que las cantidades de juegos ganados sean válidas
if (m >= 0 && n >= 0) {
  // Determinar quién ganó el set de tenis
  if ((m < 6 && n < 6) || Math.abs(m - n) < 2) {
    console.log("El set todavía no ha terminado");
    alert("El set todavía no ha terminado");
  } else if (m >= 6 && m - n >= 2) {
    console.log("El jugador A ha ganado el set");
    alert("El jugador A ha ganado el set");
  } else if (n >= 6 && n - m >= 2) {
    console.log("El jugador B ha ganado el set");
    alert("El jugador B ha ganado el set");
  } else if (m == 5 && n == 5) {
    console.log("El primer jugador en ganar dos juegos consecutivos gana el set");
    alert("El primer jugador en ganar dos juegos consecutivos gana el set");
  } else if (m == 6 && n == 6) {
    console.log("Se juega un último juego, y el jugador que lo gana, gana el set (7-6)");
    alert("Se juega un último juego, y el jugador que lo gana, gana el set (7-6)");
  } else {
    console.log("El resultado es inválido");
    alert("El resultado es inválido");
  }
} else {
  console.log("La cantidad de juegos ganados ingresada no es válida");
  alert("La cantidad de juegos ganados ingresada no es válida");
}
