console.log("Início do jogo!");

const dino = document.querySelector(".dino");

let dinoPosition = 0;
let estaPulando = false;

// Verificar se a tecla espaço foi pressionada
document.addEventListener("keydown", event => {
  if (event.code === "Space") if (!estaPulando) pular();
});

function pular() {
  let intervaloPulo = setInterval(() => {
    estaPulando = true;
    if (dinoPosition >= 250) {
      clearInterval(intervaloPulo);
      let intervaloQueda = setInterval(() => {
        if (dinoPosition <= 0) {
            estaPulando = false;
            clearInterval(intervaloQueda);
        } else {
          // Decrementar a posição do Dino
          dinoPosition -= 20;
          // Atualizar a posição na tela
          dino.style.bottom = dinoPosition + "px";
        }
      }, 20);
    } else {
      // Incrementar a posilção do Dino
      dinoPosition += 20;
      // Atualizar a posição na tela
      dino.style.bottom = dinoPosition + "px";
    }
  }, 20);
}
