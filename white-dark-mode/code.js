const inputEl = document.querySelector(".input");

const bodyEl = document.querySelector("body");


inputEl.checked = JSON.parse(localStorage.getItem("mode")) || false;



const updateBody = ()=> {
    if(inputEl.checked) {
        bodyEl.style.background = "#000d";
    } else {bodyEl.style.background = "#fff8"};
};

updateBody();

inputEl.addEventListener("input",()=>{
    updateBody();
    updatelocalStorage();
});


const updatelocalStorage =()=>{
    localStorage.setItem("mode",(
        JSON.stringify(inputEl.checked)
    ));
};



