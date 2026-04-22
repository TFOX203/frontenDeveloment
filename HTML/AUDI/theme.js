// //retrieve all the theme buttons using class selector
 const btns = document.querySelectorAll(".theme-btn");
// //obtain the body object
 const bd = document.querySelector("body");
 console.log(bd);
 console.log(btns);
// console.log(btns);
// //iterate all theme buttons to associate each one with 
// //a task that we want to execute when ocurring a click event
// for (let index = 0; index < btns.length; index++){
//     const btn = btns[index];
//     console.log(btn);
//     btn.addEventListener("click", ()=>{
//         console.log(btn.getAttribute("data-theme"));
//         console.log(btn.getAttribute("class"));
//         bd.className = btn.getAttribute("data-theme");
//     });
// }
//add a key-value pair data to the local storage
// localStorage.setItem("theme","dark");
// //access the data using its key
// const theme = localStorage.getItem("theme");
// console.log("current theme =" + theme);
// //remove the data associated with the key
// localStorage.removeItem("theme");
// console.log("current theme =" + localStorage.getItem("theme"));
//Step 1: read the btheme value stored in the local storage


const theme = localStorage.getItem("theme");
if(theme){// if the theme value exits, not null
    //set the current theme to the one selected by the user
    bd.className = theme;
}


console.log(btns);
btns.forEach(btn => {
console.log(btn);
    btn.addEventListener("click", ()=>{
        console.log(btn.getAttribute("data-theme"));
        console.log(btn.getAttribute("class"));
        bd.className = btn.getAttribute("data-theme");
        localStorage.setItem("theme",btn.getAttribute("data-theme"));
    });
});