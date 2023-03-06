console.log("Js Etkin");
let body=document.body;

let container=document.createElement("div");
container.setAttribute("class","container");
body.appendChild(container);
//---------ICERIGI OLUTSTURMA----------

let sayigiris=document.createElement("input");
sayigiris.setAttribute("class","sayigiris");
container.appendChild(sayigiris);

let karekokbutton=document.createElement("button");
karekokbutton.setAttribute("class","button");
karekokbutton.innerText="Karekök al";
container.appendChild(karekokbutton);

let kupkokbutton=document.createElement("button");
kupkokbutton.setAttribute("class","button");
kupkokbutton.innerText="Küpkök al";
container.appendChild(kupkokbutton);

let sonuclabel=document.createElement("p");
sonuclabel.setAttribute("class","sonuclabel");
sonuclabel.innerText="Sonuc";
container.appendChild(sonuclabel);

//----------BUTON ISLEMLERI-------------

karekokbutton.addEventListener("click",karekok);
kupkokbutton.addEventListener("click",kupkok);


//-------------FONKSIYONLAR------------
function karekok(){


    let sonuc=Math.sqrt(parseInt(sayigiris.value));
    let karekok=0;

    sonuclabel.innerText=sonuc;
    console.log(sonuc);
}

function kupkok(){
    let sonuc=Math.cbrt(parseInt(sayigiris.value));
    sonuclabel.innerText=sonuc;
    console.log(sonuc);
}