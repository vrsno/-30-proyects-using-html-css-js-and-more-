const button = document.getElementById('click-btn');
const countDisplay = document.getElementById('count');
let count = 0;

// Evento al hacer clic en el botón
button.addEventListener('click', () => {
    count++;
    countDisplay.textContent = `Clics: ${count}`;
});
