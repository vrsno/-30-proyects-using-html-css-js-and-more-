const testimonial = [
    {
        name: "Alex Thompson",
        photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "I am extremely satisfied with apple's outstanding mobile products. The sleek design and cutting-edge features make it a top choice for customers seeking quality and innovation."
    },
    {
        name: "Eren Johnson",
        photoUrl: "https://images.unsplash.com/photo-1529758146491-1e11fd721f77?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "I am amazed by the innovation and quality of products from apple. Their mobile devices are sleek, powerful, and user-friendly. As a tech enthusiast, I appreciate their commitment to excellence."
    },
    {
        name: "Son Goku ",
        photoUrl: "https://i.pinimg.com/564x/66/8b/1c/668b1cf502041918fdd52fe0e3cafd2b.jpg",
        text: "Watashi wa appuru no mobairu seihin ni hijō ni kanmei o ukemashita. Senren sa reta dezain to yūzā furendorīna intāfēsu ni yori, kyōgō seihin yori mo medatte imasu. Sai kōkyū no mobairu debaisu o o sagashi no kata ni wa, appuru o tsuyoku o susume shimasu..."
    },
    {
        name: "Satoru Gojo",
        photoUrl: "https://i.pinimg.com/736x/bd/c6/f2/bdc6f2d8b3661c1bdba4646037f5fe7a.jpg",
        text: "Watashi wa appuru to sono sugureta mobairu debaisu no shiyō keiken ni hijō ni manzoku shite imasu. Senren sa reta dezain to yūzā furendorīna kinō ni yori, watashi ni totte wa saikō no sentakushi to natte imasu."
    }
];

const img = document.querySelector("img");
const textEl = document.querySelector(".text");
const nameEl = document.querySelector(".username");

let idx = 0

const updateTestimonial = ()=>{
    const {name, photoUrl, text} =
    testimonial[idx];
    img.src = photoUrl;
    textEl.innerText = text;
    nameEl.innerText = name;
    idx++;
    if(idx == testimonial.length){
        idx = 0;
    }
    setTimeout(() => {
        updateTestimonial()
    }, 3000);
}

updateTestimonial()


  
// const updateTestimonial = (index = 0) => {
//     username.textContent = testimonial[index].name;
//     text.textContent = testimonial[index].text;
//     index = (index + 1) % testimonial.length;
//     setTimeout(() => updateTestimonial(index), 3000);
// };
