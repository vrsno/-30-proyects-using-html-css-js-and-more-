const textareaEl = document.getElementById("textarea");
const totalCharacters = document.getElementById("total-counter")
const remainingCounter = document.getElementById("remaining-counter")
const btn = document.getElementById("btn")
let clicked = false


// puse clicked es false cambiara remainig a infinito xd
//

const updateCounter = ()=>{

    totalCharacters.textContent = textareaEl.value.length
   
    
    //  if(textareaEl.hasAttribute("maxLenght")){
    //     remainingCounter.textContent = textareaEl.getAttribute("maxLength") - textareaEl.value.length
    //  }
     remainingCounter.textContent = textareaEl.getAttribute("maxLength") - textareaEl.value.length

     if(totalCharacters.textContent == 50){
        alert("Congratulations u are the best ♥♥")
     } 
}
updateCounter();

textareaEl.addEventListener("keyup",()=>{
    updateCounter()
    if (clicked) {
        remainingCounter.textContent = "∞ mode";
    }
    
})

btn.addEventListener("click",()=>{
    clicked = true;
    
    textareaEl.removeAttribute("maxLength");
    remainingCounter.textContent = "∞ mode";
    
})



