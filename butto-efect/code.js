const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover",(e)=>{
    let x = e.pageX - btnEl.offsetLeft;
    let y = e.pageY - btnEl.offsetTop;

    btnEl.style.setProperty("--xPos", x + "px")
    btnEl.style.setProperty("--yPos", y + "px")
})
