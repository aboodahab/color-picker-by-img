
import { canvas ,imgInp,context,p,circle,pixelsSquare } from "./j.mjs";
const onCopy=()=>{
  navigator.clipboard.writeText(p.textContent);
}

const showPixels= evt=>{
  [
    1,1,1,1
   ,2,2,2,2,
3,3,3,3,
4,4,4,4
  ]
  for(let i=0;i<pixelsSquare.length;i++){

pixelsSquare[i].style.backgroundColor=`rgba(${evt[i*4+0]},${evt[i*4+1]},${evt[i*4+2]},${evt[i*4+3]}`
}

}
const onMouseMove = evt => {
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
  showPixels(c)

p.style.color=`rgb(${c[0]},${c[1]},${c[2]})`
  p.textContent = `rgb(${c[0]},${c[1]},${c[2]})`;
};
const  onAdd= evt => {
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