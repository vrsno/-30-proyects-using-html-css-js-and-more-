const imageContainerEl = document.querySelector(".image-container")
const prevEl = document.getElementById("prev")
const nextEl = document.getElementById("next")

let x = 0;
let time;

prevEl.addEventListener("click",()=>{
    x = x + 45;
    clearTimeout(time)
    updateGallery();
})

nextEl.addEventListener("click",()=>{
    x = x - 45;
    updateGallery();
})

const updateGallery = ()=>{
    imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    time = setTimeout(()=>{
        x = x - 45
        clearTimeout(time)
        updateGallery()
    }, 3000)

}

updateGallery()