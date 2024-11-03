const btnEl = document.getElementById("btn")
const bmiInputEl = document.getElementById("bmi-result")
const weightConditionEl = document.getElementById("weight-condition")




function calculateBMI(){
    const heightValue = document.getElementById("height").value / 100
    const weightValue = document.getElementById("weight").value;

    const bmiValue = weightValue / (heightValue * heightValue);
    bmiInputEl.value = (bmiValue).toFixed(2)
    
    if(bmiValue < 18.5){
        weightConditionEl.innerHTML = "Under Weight"
        weightConditionEl.style.color = "red"
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        weightConditionEl.innerHTML = "Normal Weight"
        weightConditionEl.style.color = "green"
    } else if (bmiValue >= 25 && bmiValue <= 29.9){
        weightConditionEl.innerHTML = "overweight";
        weightConditionEl.style.color = "blue"
    } else if (bmiValue >= 30){
        weightConditionEl.innerHTML = "obesity"
        weightConditionEl.style.color = "yellow"
    }
}


btnEl.addEventListener("click",()=>{
    calculateBMI()
})