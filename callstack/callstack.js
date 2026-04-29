function finalTask(){
    console.log("3. Inside finalTask");
}
function secondTask(){
    console.log("2. Inside secondTask");
    finalTask(); //Pushes finalTask onto the stack
}
function firstTask(){
    console.log("1. Inside firstTask");
    secondTask(); //Pushes secondTask onto thae stack
}
firstTask();

function add(num){
console.log(num);
add(++num);
}
add(0);