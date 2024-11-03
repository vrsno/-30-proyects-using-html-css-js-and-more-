const scoreElement = document.getElementById("score");
const timeElement = document.getElementById("time");
const messageElement = document.getElementById("message");
const gameAreaElement = document.getElementById("gameArea");
const startButton = document.getElementById("start");

let score = 0;
let timeLeft = 15;
let timer;

startButton.addEventListener("click", startGame);

function startGame() {
    score = 0;
    timeLeft = 15;
    scoreElement.innerText = score;
    timeElement.innerText = timeLeft;
    messageElement.innerText = "";
    gameAreaElement.innerHTML = "";
    timer = setInterval(updateTimer, 1000);
    spawnCoin();
}

function updateTimer() {
    timeLeft--;
    timeElement.innerText = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(timer);
        messageElement.innerText = `¡Juego terminado! Puntuación final: ${score}`;
    }
}

function spawnCoin() {
    const coin = document.createElement("div");
    coin.classList.add("coin");

    const x = Math.random() * (400 - 40); // Espacio disponible
    const y = Math.random() * (400 - 40); // Espacio disponible
    coin.style.left = `${x}px`;
    coin.style.top = `${y}px`;

    gameAreaElement.appendChild(coin);

    coin.addEventListener("click", () => {
        score++;
        scoreElement.innerText = score;
        coin.remove();
        spawnCoin(); // Generar una nueva moneda
    });
}
