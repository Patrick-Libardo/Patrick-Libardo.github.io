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

// Criação de Cactos
const background = document.querySelector(".background");
function criarCacto() {
  let cactoPosition = 1000;
  const cacto = document.createElement("div");
  // Tempo aleatório entre 1s e 6s
  let tempoRandom = Math.random() * 5000 + 100;
  cacto.classList.add("cacto");
  cacto.style.left = 1000 + "px";
  background.appendChild(cacto);

  let intervaloEsquerda = setInterval(() => {
    if (cactoPosition <= -60) {
      clearInterval(intervaloEsquerda);
      // Remover da Tela
      background.removeChild(cacto);
    } else {
      cactoPosition -= 10;
      cacto.style.left = cactoPosition + "px";
    }
  }, 20);
  let tempoCacto = setTimeout(criarCacto, tempoRandom);
}

criarCacto();
