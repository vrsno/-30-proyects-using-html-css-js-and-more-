const btnEl = document.querySelector(".btn")
const emojiNameEl = document.querySelector(".emoji-name")

const emoji = [];

 async function getEmoji(){
    let response = await fetch("https://emoji-api.com/emojis?access_key=40077b21cdba7834b42a53c22c3f3da710aeef43");

    data = await response.json()
   
    for(let i=0; i<1500;i++){
        emoji.push({
            emojiName: data[i].character,
            emojiCode: data[i].unicodeName,
        })
    }
}


getEmoji()


btnEl.addEventListener("click",()=>{
    const randomNum = Math.floor(Math.random() * 1500)
    btnEl.innerText = emoji[randomNum].emojiName;
    emojiNameEl.innerText = emoji[randomNum].emojiCode;
})


