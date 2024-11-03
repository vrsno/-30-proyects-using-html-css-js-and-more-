const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const messageEl = document.getElementById("message");
const gameArea = document.getElementById("gameArea");
const startbtn = document.getElementById("start");


let score = 0;
let timeLeft = 15;
let timer;

startbtn.addEventListener("click",()=>{
    score = 0;
    timeLeft = 15;
    scoreEl.innerHTML = score;
    timeEl.innerText = timeLeft;
    messageEl.innerText = "";
    gameArea.innerText = "";
    timer = setInterval(uptadeTimer, 1000);
    spawnCoin();
})


function uptadeTimer(){
    timeLeft--;
    timeEl.innerText = timeLeft;

    if(timeLeft <=0){
        clearInterval(timer);
        messageEl.innerText = `El juego ha terminado! Puntuacion final: ${score}`
    }
}

function spawnCoin(){
    const coin = document.createElement("div");
    coin.classList.add("coin");

    const x = Math.random()* (400 - 40);
    const y = Math.random()* (400 - 40);

    coin.style.left = `${x}px`
    coin.style.top = `${y}px`

    gameArea.appendChild(coin);

    coin.addEventListener("click",()=>{
        score++
        scoreEl.innerText = score;
        coin.remove()
        spawnCoin();
    })
}