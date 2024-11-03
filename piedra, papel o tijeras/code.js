const choices = document.querySelectorAll(".choice");
const resultDisplay = document.getElementById("result");
const resetBtn = document.getElementById("reset");


const getResult = (userChoice) =>{
    const computerChoice = ["piedra","papel","tijeras"][Math.floor(Math.random() * 3)];
    const outcomes = {
        empate: userChoice === computerChoice,
        gana: (userChoice === "piedra" && computerChoice === "tijeras") ||
        (userChoice === "papel" && computerChoice === "piedra") ||
        (userChoice === "tijeras" && computerChoice === "papel"),
    };
    return `Tu elegiste: ${userChoice}.
    computadora eligio: ${computerChoice}.
    ${outcomes.empate ? "empate" : outcomes.gana ? "Ganaste" : "PERDISTE"}`;
}


choices.forEach(choice =>{
    choice.addEventListener("click", (e) => resultDisplay.innerText =
    getResult(e.target.dataset.choice))
});

resetBtn.addEventListener("click", ()=> resultDisplay.innerText = "")