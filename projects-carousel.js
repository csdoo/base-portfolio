(() => {
 const carousel=document.querySelector("#projects-carousel"); if(!carousel)return;
 const track=carousel.querySelector(".projects-gallery"), pagination=document.querySelector(".projects-pagination");
 const prev=carousel.querySelector(".projects-prev"), next=carousel.querySelector(".projects-next");
 const originals=[...track.children], total=originals.length; if(!total)return;
 const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
 const first=originals[0].cloneNode(true), last=originals[total-1].cloneNode(true);
 first.setAttribute("aria-hidden","true"); last.setAttribute("aria-hidden","true");
 track.insertBefore(last,originals[0]); track.appendChild(first);
 let index=1,step=0,peek=0,moving=false;
 const dots=originals.map((_,i)=>{const d=document.createElement("button");d.type="button";d.setAttribute("aria-label",`Ir para o projeto ${i+1}`);d.addEventListener("click",()=>go(i+1));pagination.appendChild(d);return d;});
 function render(animate=true){track.style.transition=animate&&!reduced?"":"none";track.style.transform=`translate3d(${-(step*index-peek)}px,0,0)`;const active=(index-1+total)%total;dots.forEach((d,i)=>d.setAttribute("aria-current",String(i===active)));}
 function measure(){const card=track.children[1];if(!card)return;const st=getComputedStyle(track);step=card.getBoundingClientRect().width+parseFloat(st.columnGap||st.gap||0);peek=card.getBoundingClientRect().width*.42;render(false);}
 function go(n){if(moving||!step)return;index=n;moving=true;render(true);}
 prev.addEventListener("click",()=>go(index-1));next.addEventListener("click",()=>go(index+1));
 dots.forEach((d,i)=>d.addEventListener("click",()=>go(i+1)));
 track.addEventListener("transitionend",e=>{if(e.propertyName!=="transform")return;if(index===0){index=total;render(false)}else if(index===total+1){index=1;render(false)}moving=false;});
 window.addEventListener("resize",measure);measure();window.addEventListener("load",measure,{once:true});
})();