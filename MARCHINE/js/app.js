let button = document.querySelector("button");
let containeReady = document.querySelector(".container-ready");

let i =0;
let chaine = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, consectetur, quis repellendus qui eaque aut consequuntur sunt sequi quaerat unde, voluptatem nihil cum recusandae. Incidunt voluptatibus explicabo reprehenderit vel esse!";


button.addEventListener("click", ()=>{
   ecriture();
})

function ecriture(){
    if(i < chaine.length){
        containeReady.innerHTML += chaine.charAt(i)
        i++
        setTimeout(ecriture, 50)
    }
}