const velaFlame = document.querySelector(".cake");
const candleCountDisplay = document.getElementById('candle-count');
let candleCount = 0; // Contador inicial de velas

velaFlame.addEventListener("click", () => {
    // Incrementar el contador de velas
    candleCount++;

    // Actualizar el display del número de velas
    candleCountDisplay.textContent = candleCount;

    // Crear una nueva vela
    const newCandle = document.createElement("div");
    newCandle.classList.add("candle");

    const newFlame = document.createElement("div");
    newFlame.classList.add("flame");

    newCandle.appendChild(newFlame);

    // Obtener las dimensiones de la torta
    const cakeRect = velaFlame.getBoundingClientRect();

    // Calcular una posición aleatoria dentro de la parte superior de la torta
    const maxLeft = cakeRect.width - 16; // Ajustar según el ancho de la vela
    const randomLeft = Math.random() * maxLeft; // Posición horizontal aleatoria
    const randomVerticalOffset = Math.random() * (30 - 15) + 15; // Posición vertical aleatoria entre -10 y 10px

    // Cambiar la posición de la nueva vela
    newCandle.style.position = 'absolute';
    newCandle.style.left = `${randomLeft}px`;
    newCandle.style.top = `${randomVerticalOffset}px`; // Usar el offset vertical aleatorio

    // Añadir la nueva vela al contenedor de la torta
    velaFlame.appendChild(newCandle);
});


