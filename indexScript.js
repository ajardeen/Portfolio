let navtoggle = document.querySelectorAll(".nav-toggle");
let navindicatorpill = document.querySelector(".nav-indicator-pill")
let navindicatorglow = document.querySelector(".nav-indicator-glow")
navtoggle.forEach((Element)=>{
  Element.addEventListener("click",()=>{
     if(Element.innerText==="Profile"){
        navindicatorglow.style.marginLeft="33px";
        navindicatorpill.style.left="6px";
        navindicatorpill.style.right="";
     }else{
        navindicatorglow.style.marginLeft="120px";
        navindicatorpill.style.left="";
        navindicatorpill.style.right="6px";
     }
  })
})