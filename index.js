// Ingresar la cantidad de juegos ganados por el jugador A y el jugador B
let a,b;
const btnEnviar = document.getElementById("btn-enviar");  
const inputA = document.getElementById("a");
const inputB = document.getElementById("b");
btnEnviar.addEventListener('click', () => {
  a = inputA.value;
  b = inputB.value;
  verificador(a,b);
});
function verificador(m,n){
// Verificar que las cantidades de juegos ganados sean válidas
if (m >= 0 && n >= 0) {
  // Determinar quién ganó el set de tenis
  if ((m < 6 && n < 6) || Math.abs(m - n) < 2) {
    alert("El set todavía no ha terminado");
  } else if (m >= 6 && m - n >= 2) {
    alert("El jugador A ha ganado el set");
  } else if (n >= 6 && n - m >= 2) {
    alert("El jugador B ha ganado el set");
  } else if (m == 5 && n == 5) {
    alert("El primer jugador en ganar dos juegos consecutivos gana el set");
  } else if (m == 6 && n == 6) {
    alert("Se juega un último juego, y el jugador que lo gana, gana el set (7-6)");
  } else {
    alert("El resultado es inválido");
  }
} else {
  alert("La cantidad de juegos ganados ingresada no es válida");
}

}

