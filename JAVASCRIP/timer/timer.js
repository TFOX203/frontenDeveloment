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

//Associate the click event with a function,
//so that each time when the button
//is clicked, the fimction will be called
//Anonymous function
startBtn.addEventListener("click", function(){
    //What setInterval does is executing a function periodically,
    //the first parameter is the function that we want to execute,
    //the second is the period.
    setInterval(()=>{
        //1. If the size of the font has reached the maximun, 
        //it starts to reduce gradually.
        if(!isGrowing){//If it is not growing
            fontSize--;
            timerDisplay.style.fontSize = fontSize + "px";
            //Check if the size has reached the limit
            if(fontSize <= minimunSize){
                isGrowing = true;
            }
        }
        //2. If the size of the font has reached the minimun,
        //it starts to increase gradually.
        else{
            fontSize++;
            timerDisplay.style.fontSize = fontSize + "px";
            if(fontSize >= maximunSize){
                isGrowing = false;
            }
        }        
    }, 1)
});
//Arrow function as parameter
stopBtn.addEventListener("click", ()=>{});
let fontSize = 40;
let maximunSize = 200;
let minimunSize = 20;
let isGrowing = true;
//Named function
function resetTimer(){

}
resetBtn.addEventListener("click", resetTimer);
//sizeAnimation();

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