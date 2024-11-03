const hourEl = document.querySelector(".hour")
const minutesEl = document.querySelector(".minutes")
const secondEl = document.querySelector(".second")

function updateClock(){
    const currentDate = new Date()
    // setTimeout(updateClock, 1000)
    
    const second = currentDate.getSeconds();
    const minute = currentDate.getMinutes();
    const hour = currentDate.getHours();
   

    const hourDeg = (hour / 12) * 360;
    hourEl.style.transform = `rotate(${hourDeg}deg)`

    const minuteDeg = (minute / 60) * 360;
    minutesEl.style.transform = `rotate(${minuteDeg}deg)`

    const secondDeg = (second / 60) * 360;
    secondEl.style.transform = `rotate(${secondDeg}deg)`
}

setInterval(updateClock,1000)