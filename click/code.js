const words = ["manzana", "platano", "cereza", "fresa", "kiwi"];
let chosenWord = "";
let displayWord = "";
let attempts = 0;

const wordDisplay = document.getElementById('word');
const letterInput = document.getElementById('letterInput');
const guessButton = document.getElementById('guessButton');
const messageDisplay = document.getElementById('message');
const resetButton = document.getElementById('reset');

function startGame() {
    chosenWord = words[Math.floor(Math.random() * words.length)];
    displayWord = "_".repeat(chosenWord.length).split("");
    wordDisplay.textContent = displayWord.join(" ");
    messageDisplay.textContent = "";
    resetButton.style.display = "none";
    attempts = 0; // Reiniciar los intentos
}

guessButton.addEventListener('click', () => {
    const letter = letterInput.value.toLowerCase();
    letterInput.value = "";
    
    if (letter && !displayWord.includes(letter)) {
        let correctGuess = false; // Variable para verificar si la letra es correcta

        for (let i = 0; i < chosenWord.length; i++) {
            if (chosenWord[i] === letter) {
                displayWord[i] = letter;
                correctGuess = true; // Si hay coincidencia, cambiar la variable a true
            }
        }

        wordDisplay.textContent = displayWord.join(" ");

        if (correctGuess) {
            // Si fue un acierto, no incrementar intentos
            if (!displayWord.includes("_")) {
                messageDisplay.textContent = "¡Ganaste! La palabra era: " + chosenWord;
                resetButton.style.display = "block";
            }
        } else {
            // Solo incrementar intentos si la letra no fue correcta
            attempts++;
            if (attempts >= 6) {
                messageDisplay.textContent = "¡Perdiste! La palabra era: " + chosenWord;
                resetButton.style.display = "block";
            }
        }
    }
});


resetButton.addEventListener('click',() =>{
    startGame();
    attempts = 0;
});

// Iniciar el juego al cargar la página
startGame();




