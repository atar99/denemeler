console.log("Js Etkin");


let sayac = localStorage.getItem(`sayac`)?Number(localStorage.getItem(`sayac`)):0;
let sayacDom = document.querySelector(`#sayac`);
let sayacArttir = document.querySelector(`#arttirici`);
let sayacAzalt = document.querySelector(`#azaltici`);

sayacDom.innerHTML = sayac;

sayacArttir.addEventListener("click",sayacCalisma);
sayacAzalt.addEventListener("click",sayacCalisma);

function sayacCalisma(){
    this.id=="arttirici"?sayac+=1:sayac-=1;
    localStorage.setItem(`sayac`,sayac);
    sayacDom.innerHTML=sayac;
}