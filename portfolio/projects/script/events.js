const jsBtn = document.querySelector("#javascript");
const csharpBtn = document.querySelector("#csharp");
const webBtn= document.querySelector("#web");
const pythonBtn= document.querySelector("#python");



jsBtn.addEventListener("click",()=>{
    console.log("AA")
    const sections = document.querySelectorAll("section");
    const pokeClass= document.querySelector(".java");
   sections.forEach((section)=>{
        section.style.display="none"

   })
   pokeClass.style.display="flex";

})


webBtn.addEventListener("click",()=>{
    console.log("AA")
    const sections = document.querySelectorAll("section");
    const web= document.querySelector(".web");
   sections.forEach((section)=>{
        section.style.display="none"

   })
   web.style.display="block";

})

csharpBtn.addEventListener("click",()=>{
    console.log("AA")
    const sections = document.querySelectorAll("section");
    const sharp = document.querySelector(".csharp");
    // const web= document.querySelector(".web");
   sections.forEach((section)=>{
        section.style.display="none"

   })
   sharp.style.display="block";

})

pythonBtn.addEventListener("click",()=>{
    console.log("AA")
    const sections = document.querySelectorAll("section");
    const py = document.querySelector(".python")
    // const web= document.querySelector(".web");
   sections.forEach((section)=>{
        section.style.display="none"

   })
    py.style.display="block";

})