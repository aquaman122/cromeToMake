const title = document.querySelector(".hello h1");


function handleInnerWidth(){
    const bigColor = "bigColor";
    const middleColor = "middleColor";
    const SmallColor = "smallColor";
       if (window.innerWidth < 700){
       document.body.classList.add(SmallColor);
       document.body.classList.remove(middleColor);
       document.body.classList.remove(bigColor);
   }
   else if (window.innerWidth < 1200){
       document.body.classList.add(middleColor);
       document.body.classList.remove(bigColor);
   }
   else if(window.innerWidth < 1700){
       document.body.classList.add(bigColor);
   }
}

window.addEventListener("resize",handleInnerWidth);