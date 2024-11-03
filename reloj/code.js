// Definir variables
let is24HourFormat = true; // Variable para almacenar el formato de hora (24 o 12 horas)

// Obtener referencias a los elementos del DOM
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const ampmElement = document.getElementById('ampm');
const toggleButton = document.getElementById('toggleFormat');

// Función para actualizar el reloj
const updateClock = () => {
    const now = new Date(); // Obtener la fecha y hora actual

    // Calcular las horas, minutos y segundos
    const hours = is24HourFormat ? now.getHours() : (now.getHours() % 12 || 12);
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = !is24HourFormat && now.getHours() >= 12 ? ' PM' : ' AM';

    // Actualizar el contenido de los elementos
    hoursElement.textContent = String(hours).padStart(2, '0');
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;

    // Mostrar AM/PM si está en formato de 12 horas
    if (!is24HourFormat) {
        ampmElement.textContent = ampm;
    } else {
        ampmElement.textContent = ''; // Limpiar el contenido si es formato 24 horas
    }
};

// Evento para cambiar el formato de hora
toggleButton.addEventListener('click', () => {
    is24HourFormat = !is24HourFormat; // Cambiar el formato
    updateClock(); // Actualizar la hora inmediatamente al cambiar el formato
});

// Actualizar el reloj cada segundo
setInterval(updateClock, 1000); // Actualiza la hora cada segundo
updateClock(); // Inicializar la hora al cargar

