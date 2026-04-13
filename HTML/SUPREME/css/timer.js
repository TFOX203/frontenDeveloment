const timeDisplay = document.getElementById("timePanel");

let totalSeconds = 0;

function updateTime() {
    totalSeconds++;

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    // Formato 00:00:00
    const formattedTime = 
        String(hours).padStart(2, '0') + ":" +
        String(minutes).padStart(2, '0') + ":" +
        String(seconds).padStart(2, '0');

    timeDisplay.innerText = formattedTime;

    // Cada 10 minutos (600 segundos)
    if (totalSeconds % 600 === 0) {
        playSound();
    }
}

setInterval(updateTime, 1000);