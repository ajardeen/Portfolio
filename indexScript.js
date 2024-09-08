let navtoggle = document.querySelectorAll(".nav-toggle");
let navindicatorpill = document.querySelector(".nav-indicator-pill")
let navindicatorglow = document.querySelector(".nav-indicator-glow")
navtoggle.forEach((Element) => {
   Element.addEventListener("click", () => {
      if (Element.innerText === "Profile") {
         navindicatorglow.style.marginLeft = "33px";
         navindicatorpill.style.left = "6px";
         navindicatorpill.style.right = "";
      } else {
         navindicatorglow.style.marginLeft = "120px";
         navindicatorpill.style.left = "";
         navindicatorpill.style.right = "6px";
      }
   })
});

const skillul = document.querySelector("#skill-ul");
// let skill_list = ["Html",
//    "Css",
//    "JavaScript",
//    "Core Java",
//    "SpringBoot",
//    "React",
//    "Taliwind",
//    "Mysql",
//    "Mangodb"]

const skill_element = document.querySelectorAll(".word");

const input_skill = document.querySelector("#inputskill");
const skill_list = document.querySelector(".skills-list")
   
   document.addEventListener("click",()=>skill_list.style.display="none");

input_skill.addEventListener("keyup",(val)=>{
   let input_value=val.target.value.toUpperCase();
   if(val!=""){
   skill_list.style.display="block";
   }
   skill_element.forEach((ele)=>{
      ele.innerHTML.toUpperCase().includes(input_value) ?  ele.style.display="" :ele.style.display="none"
   })
});

const nav_right_link_wrapper = document.querySelector(".nav-right-link-wrapper");
nav_right_link_wrapper.addEventListener("click",()=>{
   const icon_link_wrapper =document.querySelector(".icon-link-wrapper");
   if(icon_link_wrapper.style.display=="block"){
      icon_link_wrapper.style.display="none";
   }else{
      icon_link_wrapper.style.display="block";
   }
})
