const colors = ["green","red","rgba(133,122,200)","#f15025"]

const color = document.getElementById("color")
const btn = document.getElementById("btn")
const divColor = document.querySelector(".container1")

btn.addEventListener("click", ()=>{
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber];
    // divColor.style.backgroundColor = colors[randomNumber]
})

const getRandomNumber = ()=>{
    const Numero = Math.floor(Math.random() * colors.length)
    return Numero;
}