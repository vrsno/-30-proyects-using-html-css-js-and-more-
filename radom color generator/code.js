const conatinerEL = document.querySelector(".container")


for (let i = 0; i < 30; i++) {
    const colorContainerEl = document.createElement("div")
    colorContainerEl.classList.add("color-container")
    conatinerEL.appendChild(colorContainerEl)
}

const colorContainerEls = document.querySelectorAll(".color-container")


const generateColors = ()=>{
    colorContainerEls.forEach((colorContainerEl)=>{
        const newColorCode = randomColor()
        colorContainerEl.style.backgroundColor = "#" + newColorCode
        colorContainerEl.textContent = "#" + newColorCode
    })
}

const randomColor = ()=>{
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCodes = "";
    for (let i = 0; i < colorCodeLength; i++) {
       const randomNumber = Math.floor(Math.random() * chars.length)
       
        colorCodes += chars.substring(randomNumber, randomNumber + 1)
        
        
    }
    return colorCodes
}

randomColor()
generateColors()