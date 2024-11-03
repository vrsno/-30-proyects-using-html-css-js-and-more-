
const monthName = document.getElementById("month-name")
const dayName = document.getElementById("day-name")
const dayNumber = document.getElementById("day-number")
const Year = document.getElementById("year")

const date = new Date()
// const month = date.getMonth() no se necesita
monthName.textContent = date.toLocaleDateString("en-US",{
    month:"long"
})
// const day = date.getDay() no se necesita
dayName.textContent = date.toLocaleString("en-US",{
    weekday:"long"
} 
)

dayNumber.textContent = date.getDate()
Year.textContent = date.getFullYear()


console.log(date.toLocaleString("en",{
    weekday:"long"
} ))
