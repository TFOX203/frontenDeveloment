//retrieve all theme buttons using class selector
const btns = document.querySelectorAll(".theme-btn");
const bd = document.querySelector("body");
console.log(bd);
console.log(btns);
// iterate all theme buttons to associate each one with
// a task that we want to execute when ocurring a click event
for (let index = 0; index < btns.length; index++) {
    const btn = btns[index];
    console.log(btn);
    btn.addEventListener("click", ()=>{
        console.log(btn.getAttribute("theme-btn"));
        console.log(btn.getAttribute("class"));
        bd.className = btn.getAttribute("data-theme");


    });
}
