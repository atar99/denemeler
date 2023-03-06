console.log("Js Etkin");
let body=document.body;
//------------ CONTAİNER OLUŞTURMA--------------
let container=document.createElement("div");
container.setAttribute("class","container");
body.appendChild(container);

//--------------VERİ GİRİŞLERİ-------------------
let verigiris=document.createElement("div");
verigiris.setAttribute("class","verigiris");
container.appendChild(verigiris);

let deger1=document.createElement("input");
deger1.setAttribute("class","sayigiris");
deger1.setAttribute("placeholder","1.Sayıyı Girin");
verigiris.appendChild(deger1);

let deger2=document.createElement("input");
deger2.setAttribute("class","sayigiris");
deger2.setAttribute("placeholder","2.Sayiyi Girin");
verigiris.appendChild(deger2);

let sonuclabel=document.createElement("p");
sonuclabel.setAttribute("class","sonuc");
sonuclabel.innerText="sonuc";
verigiris.appendChild(sonuclabel);

//-----------------BUTONLAR-------------------------
let islemler=document.createElement("div");
islemler.setAttribute("class","islemler");
container.appendChild(islemler);

let toplabutton=document.createElement("button");
toplabutton.setAttribute("class","islembutton");
toplabutton.innerText="TOPLA";
islemler.appendChild(toplabutton);

let cikarbutton=document.createElement("button");
cikarbutton.setAttribute("class","islembutton");
cikarbutton.innerText="ÇIKAR";
islemler.appendChild(cikarbutton);

let carpbutton=document.createElement("button");
carpbutton.setAttribute("class","islembutton");
carpbutton.innerText="ÇARP";
islemler.appendChild(carpbutton);

let bolbutton=document.createElement("button");
bolbutton.setAttribute("class","islembutton");
bolbutton.innerText="BÖL";
islemler.appendChild(bolbutton);

//-------------- Buton işlemleri-------------

toplabutton.addEventListener("click",topla);
cikarbutton.addEventListener("click",cikar);
carpbutton.addEventListener("click",carp);
bolbutton.addEventListener("click",bol);

//------------Fonksiyonlar--------------

function topla()
{
    let sonuc=parseInt(deger1.value) + parseInt(deger2.value);
    sonuclabel.innerText=sonuc;
    console.log(sonuc);
}
function cikar()
{
    let sonuc=parseInt(deger1.value) - parseInt(deger2.value);
    sonuclabel.innerText=sonuc;
    console.log(sonuc);
}
function carp()
{
    let sonuc=parseInt(deger1.value) * parseInt(deger2.value);
    sonuclabel.innerText=sonuc;
    console.log(sonuc);
}
function bol()
{
    let sonuc=parseInt(deger1.value) / parseInt(deger2.value);
    sonuclabel.innerText=sonuc;
    console.log(sonuc);
}