const btn=document.querySelector(".burger-btn");
const i=document.querySelectorAll("i");
btn.addEventListener("click", function(){
    i.forEach(function(el){
        el.classList.toggle("open")
    })
})