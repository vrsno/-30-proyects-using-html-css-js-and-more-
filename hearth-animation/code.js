const bodyEl = document.querySelector("body")

bodyEl.addEventListener("mousemove",(e)=>{
    const xPos = e.offsetX;
    const yPos = e.offsetY;
    const spanEl = document.createElement("span")
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";
    const size = Math.floor(Math.random()*100);
    spanEl.style.height = size + "px"
    spanEl.style.width = size + "px"

    bodyEl.appendChild(spanEl)
    setTimeout(()=>{
        spanEl.remove()
    },3000)
})

