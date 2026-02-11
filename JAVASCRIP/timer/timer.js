//"document" object represents the whole html page wich is a tree data structure
//document.getElementById("timerDisplay")
//this method or command allows us to retrieve an element in our page by its id

const timerDisplay = document.getElementById("timerDisplay");
console.debug(timerDisplay);
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
console.log(startBtn);
console.log(stopBtn);
console.log(resetBtn);
//change the font size of the timer label using js
timerDisplay.style.fontSize = "40px";

startBtn.addEventListener("click", ()=>{console.log("you are clicking me")});
sizeAnimation();

function sizeAnimation(){
let size = 40;
let x = 1000;
while(x == 0){
//increment the font size
for (let i = 0; i < 50; i++){
    size++;
    timerDisplay.style.fontSize = size + "px";
}
for (let i = 0; i < 50; i++){
    size--;
    timerDisplay.style.fontSize = size + "px";
}
    x--;
}
}