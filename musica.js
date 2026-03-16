// musica.js
const musica = new Audio('musica-examen.mp3');
musica.loop = true;

// Al cargar, recuperamos el tiempo guardado
window.addEventListener('load', () => {
    const tiempoGuardado = localStorage.getItem('tiempoMusica') || 0;
    musica.currentTime = parseFloat(tiempoGuardado);
    musica.play().catch(() => console.log("Esperando interacción"));
});

// Guardar el tiempo actual constantemente
setInterval(() => {
    localStorage.setItem('tiempoMusica', musica.currentTime);
}, 1000);

// Función para cuando termine el examen o salgas, resetear si es necesario
function resetMusica() {
    localStorage.removeItem('tiempoMusica');
}

