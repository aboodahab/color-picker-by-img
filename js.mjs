
import { canvas ,imgInp,context,p,circle,pixelsSquare } from "./j.mjs";
const onCopy=()=>{
  navigator.clipboard.writeText(p.textContent);
  
}

function showPixels(evt,x,y){
  for(let i=0;i<pixelsSquare.length;i++){
    context.clearRect(x,y,canvas.width,canvas.height)
  onAdd()
  context.fillRect(x,y,20,200)
    context.fillStyle=`rgba(${evt[i*4+0]},${evt[i*4+1]},${evt[i*4+2]},${evt[i*4+3]}`
 pixelsSquare[i].style.backgroundColor=`rgba(${evt[i*4+0]},${evt[i*4+1]},${evt[i*4+2]},${evt[i*4+3]}`
}

}
function onMouseMove(evt) {
  let mouseX, mouseY;
  
circle.style.display="flex"
  if (evt.offsetX) {
    mouseX = evt.offsetX; 
    mouseY = evt.offsetY;
  } else if (evt.layerX) {
    mouseX = evt.layerX;
    mouseY = evt.layerY;
  }
  
  let c = context.getImageData(mouseX, mouseY, 6,6).data;
  const {clientX,clientY}=evt
  circle.style.left=`${clientX}px`
  circle.style.top=`${clientY}px`

  
  showPixels(c,clientX,clientY)


// p.style.color=`rgb(${c[0]},${c[1]},${c[2]})`
  p.textContent = `rgb(${c[0]},${c[1]},${c[2]})`;
};
function onAdd() {
  const [file] = imgInp.files;
  if (file) {
    const img = URL.createObjectURL(file);
    let base_image = new Image();
    base_image.src = img;

    base_image.onload = function () {
      context.drawImage(base_image, 0, 0,canvas.width,canvas.height);
    };

  }
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("click", onCopy);
  canvas.addEventListener("resize",onAdd)
};
imgInp.onchange =onAdd
canvas.addEventListener("resize",onAdd)