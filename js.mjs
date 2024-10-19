
import { canvas ,imgInp,context,p,circle,pixelsSquare } from "./j.mjs";
const onCopy=()=>{
  navigator.clipboard.writeText(p.textContent);
}

const showPixels= evt =>{
  for(let i=0;i<pixelsSquare.length;i++){
    console.log(evt)
 pixelsSquare[i].style.backgroundColor=`rgb(${evt[i]},${evt[i]*4},${evt[i]*5})`
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
  let c = context.getImageData(mouseX, mouseY, 4,4).data;

  const {clientX,clientY}=evt
  circle.style.left=`${clientX}px`
  circle.style.top=`${clientY}px`
showPixels(c)
  p.textContent = `rgb(${c[0]},${c[1]},${c[2]})`;
};
imgInp.onchange = evt => {
  const [file] = imgInp.files;
  if (file) {
    const img = URL.createObjectURL(file);

    let base_image = new Image();
    base_image.src = img;

    base_image.onload = function () {
      context.drawImage(base_image, 0, 0);
    };

  }
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("click", onCopy);

};
