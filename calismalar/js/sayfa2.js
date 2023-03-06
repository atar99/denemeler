let container=document.querySelector(".container");
let button=document.createElement("button");
let sayi=0;
let sayacyazi=document.createElement("sayacyazi");
sayacyazi.setAttribute("class","sayacyazi");
sayacyazi.innerHTML=sayi;
button.innerHTML="sayaci arttir";
container.appendChild(button);
container.appendChild(sayacyazi);


function arttici()
{
    sayi++;   
    sayacyazi.innerHTML=sayi;
}
button.addEventListener("click",arttici);

function resetleyici()
{
    sayi=0;
}
