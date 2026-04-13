const timeDisplay = document.getElementById("timePanel");

let totalSeconds = 0;

function updateTime() {
    totalSeconds++;

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    //
    // Formato 00:00:00 
    const formattedTime = 
        String(hours).padStart(2, '0') + ":" + 
        String(minutes).padStart(2, '0') + ":" +
        String(seconds).padStart(2, '0');
        //lo que hace esto es que creamos las cadenas y como esta compuesto por dos digitos si no ocupa los dos digitos se completa con 0
    timeDisplay.innerText = formattedTime;

    // Cada 10 minutos (600 segundos)
    if (totalSeconds % 600 === 0) {
        playSound();
    }
}

setInterval(updateTime, 1000);