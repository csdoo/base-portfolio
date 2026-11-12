(() => {
 const carousel=document.querySelector("#featured-carousel");
 if(!carousel) return;
 const slides=[...carousel.querySelectorAll(".featured-slide")];
 const counter=carousel.querySelector(".featured-counter");
 let active=0;
 function show(index){
   active=(index+slides.length)%slides.length;
   slides.forEach((slide,i)=>{
     const current=i===active;
     slide.classList.toggle("is-active",current);
     slide.setAttribute("aria-hidden",String(!current));
     if(current) slide.removeAttribute("inert");
     else slide.setAttribute("inert","");
   });
   counter.textContent=String(active+1).padStart(2,"0")+" / "+String(slides.length).padStart(2,"0");
 }
 carousel.querySelector(".featured-prev").addEventListener("click",()=>show(active-1));
 carousel.querySelector(".featured-next").addEventListener("click",()=>show(active+1));
 show(0);
})();