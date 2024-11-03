const srchBarContEl = document.querySelector(".search-bar-container")

const magnifier = document.querySelector(".magnifier")

magnifier.addEventListener("click",()=>{
    srchBarContEl.classList.toggle("active")
})