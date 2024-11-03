const celsiusEl = document.getElementById("celsius")
const farenheitEl = document.getElementById("farenheit")
const kelvinEL = document.getElementById("kelvin")

function computeTemp(event){
    const currentValue = +event.target.value;

    switch(event.target.name){
        case "celsius":
            kelvinEL.value = (currentValue + 273.32).toFixed(2)
            farenheitEl.value = (currentValue * 1.8 + 32).toFixed(2)
            break;
        case "farenheit":
            celsiusEl.value = ((currentValue - 32) / 1.8).toFixed(2)
            kelvinEL.value =  ((currentValue - 32) / 1.8 + 273.32).toFixed(2)
            break;
         case "kelvin":
            celsiusEl.value = (currentValue - 273.32).toFixed(2)
            farenheitEl.value = ((currentValue - 273.32) * 1.8).toFixed(2)
            break;
    }
}

