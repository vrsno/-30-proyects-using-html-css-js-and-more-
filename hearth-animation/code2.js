const bodyEl = document.querySelector("body");

        let timeout = null;
        const THROTTLE_DELAY = 100; // Tiempo en milisegundos

        function throttleMouseMove(e) {
            if (timeout) {
                clearTimeout(timeout);
            }
            timeout = setTimeout(() => {
                handleMouseMove(e);
            }, THROTTLE_DELAY);
        }

        function handleMouseMove(e) {
            const xPos = e.clientX; // Usa clientX y clientY para obtener la posición del ratón respecto al viewport
            const yPos = e.clientY;
            const spanEl = document.createElement("span");
            spanEl.style.left = xPos + "px";
            spanEl.style.top = yPos + "px";
            const size = Math.floor(Math.random() * 100);
            spanEl.style.height = size + "px";
            spanEl.style.width = size + "px";

            bodyEl.appendChild(spanEl);
            setTimeout(() => {
                spanEl.remove();
            }, 3000);
        }

        bodyEl.addEventListener("mousemove", throttleMouseMove);