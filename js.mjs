import { canvas ,imgInp,context,p,circle,pixelsSquare } from "./j.mjs";
const onCopy=()=>{
  navigator.clipboard.writeText(p.textContent);
}
const showPixels= evt =>{
  for(let i=0;i<pixelsSquare.length;i++){
    console.log(evt[0],evt[1])
    for(let k=0;k<evt.length;k++){
pixelsSquare[i].style.background=`rgba(${evt[0]},${evt[1]},${evt[2]},${evt[3]})`
  
 }
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
  let c = context.getImageData(mouseX, mouseY, 36,36).data;

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

//button.addEventListener("mousemove", onCopy);
