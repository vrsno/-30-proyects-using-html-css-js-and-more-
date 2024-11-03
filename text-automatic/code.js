const containerEl = document.querySelector(".container")

const carrers = ["Bestia","Boss","God","Jesus"];

let carrerIndex = 0;

let characterIndex = 0;


const updateText = ()=>{
    characterIndex++;
    containerEl.innerHTML = 
    `<h1>I am the fuck*ng ${carrers[carrerIndex].slice(0,
    characterIndex)}</h1>`;
   
    if(characterIndex === carrers[carrerIndex].length){
        carrerIndex++
        characterIndex = 0
    }

    if(carrerIndex === carrers.length){
        carrerIndex = 0
    }
    setTimeout(updateText,1000)
}
         
updateText()
                        