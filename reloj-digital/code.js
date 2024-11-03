const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm")
const toggleBtn = document.getElementById("toggleFormat");


let is24HourFormat = true;

const updateclock = ()=>  {
    const now = new Date()
    
    // calcular las horas, minuto y segundos
    const hours = is24HourFormat ? now.getHours() :(now.getHours() % 12 || 12);
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const ampm = !is24HourFormat && now.getHours() >= 12 ? "PM" : "AM";


    hoursEl.textContent = String(hours).padStart(2, "0");
    minutesEl.textContent = minutes
    secondsEl.textContent = seconds;

    if(!is24HourFormat){
        ampmEl.textContent = ampm;
    } else {
        ampmEl.textContent = "";
    }
}

toggleBtn.addEventListener("click",()=>{
    is24HourFormat = !is24HourFormat;
    updateclock()
})
setInterval(updateclock,1000)

updateclock()