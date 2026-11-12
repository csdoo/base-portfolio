(() => {
 const dialog=document.querySelector(".image-dialog");
 if(!dialog) return;
 const dialogImage=dialog.querySelector("img");
 const dialogTitle=dialog.querySelector("[data-dialog-title]");
 document.querySelectorAll("[data-gallery-image]").forEach(link=>{
   link.addEventListener("click",event=>{
     event.preventDefault();
     dialogImage.src=link.dataset.full||link.querySelector("img").src;
     dialogImage.alt=link.querySelector("img").alt;
     dialogTitle.textContent=link.dataset.title||link.querySelector("img").alt;
     dialog.showModal();
   });
 });
 dialog.querySelector(".dialog-close").addEventListener("click",()=>dialog.close());
 dialog.addEventListener("click",event=>{if(event.target===dialog)dialog.close();});
})();