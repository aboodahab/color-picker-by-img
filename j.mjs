
const imgInp = document.querySelector("#imgInp");
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
const p = document.querySelector("p");
const circle=document.querySelector("#circle")
const pixelsSquare=document.querySelectorAll(".small-square")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

export {
    imgInp,
    canvas,
    context,
    p,
    circle,
    pixelsSquare,
    
}