const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const color = document.getElementById("color")
const btn = document.getElementById("btn")
const divColor = document.querySelector(".container1")

btn.addEventListener("mousedown", ()=>{
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()]
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor
})

const getRandomNumber = ()=>{
    const Numero = Math.floor(Math.random() * hex.length);
    return Numero;
}