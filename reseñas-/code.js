// local reviews data

const reviews = [
    {
        id: 1,
        name: "Haruka Kasabe",
        job: "Estudiante",
        img: 
        "https://i.pinimg.com/originals/aa/29/7b/aa297b8ad6599bebb3629de6e94c0718.jpg",
        text: "Es una adolescente de estatura promedio con cabello azul y ojos anaranjados. Se puede ver un lunar cerca de su ojo izquierdo. Ella tiene un cuerpo bien dotado y es considerada muy atractiva por sus compañeros de clase."

    },
    { 
         id: 2,
        name: "Kaurizawa Kei",
        job: "Estudiante",
        img: "https://i.pinimg.com/originals/2e/a9/93/2ea9935f8067187de14973cd0ceaa207.jpg",
        text: "Kei es una adolescente de estatura media, con ojos morados y el pelo rubio que le llega hasta la cintura, el cual está atado con una cola de caballo. Su uniforme escolar consiste en una camisa azul claro debajo del abrigo escolar rojo con las mangas remangadas y una falda blanca corta. Lleva zapatos escolares normales con medias azules hasta la pantorrilla. En el cuello de su camisa, ella tiene atado un lazo azul."
   },
   {
        id: 3,
        name: "Rokusuke Koenji",
        job: "Estudiante",
        img: "https://i.pinimg.com/originals/c7/12/1e/c7121e96c315cba1f558ef2143fb1bf8.jpg",
        text: "Kōenji es un joven bien formado, de estatura superior a la media, con cabello rubio, largo y liso. A menudo se lo ve con el uniforme escolar estándar."
   },
   {
        id: 4,
        name: "Suzune Horikita",
        job: "Estudiante",
        img: "https://i.pinimg.com/originals/33/6b/dc/336bdc65130832ff2b2fe9bb83ae5956.jpg",
        text: "Suzune tiene el pelo largo y negro, con una trenza atada con un lazo rosa y ojos rojos degradados. Ella siempre mantiene una mirada severa en su rostro. Tiene un cuerpo delgado pero bien dotado que la hace destacar como alguien bella, incluso atrayendo la atención de Ken Sudō y Kakeru Ryūen."
   }
];

// select items

const img = document.getElementById("person-img")
const author = document.getElementById("author")
const job = document.getElementById("job")
const info = document.getElementById("info")

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const RandomBtn = document.querySelector(".random-btn")


// get character

let currentItem = 0;

// load initial item

// window.addEventListener("DOMContentLoaded",()=>{
//   showPerson(currentItem)
// })

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}
 

// ver la siguiente persona
nextBtn.addEventListener("click",()=>{
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson()
})

//anterior persona
prevBtn.addEventListener("click",()=>{
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1
    }
    showPerson()
})

//random caracter

RandomBtn.addEventListener("click",()=>{
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
})

