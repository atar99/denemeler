function deneme(sayi1,sayi2)
{
    return(sayi1+sayi2);
}

var add = deneme(1,2)
console.log(deneme);
console.log(add);

let body=document.body;

let yazi = document.createElement("h1");
yazi.setAttribute("class","yazi");
body.appendChild(yazi);
yazi.innerText=add;

function yazici(yazi1,yazi2,yazi3){
    console.log(yazi1);
    console.log(yazi1,yazi2);
    console.log(yazi1,yazi2,yazi3);
}

function toplama(toplama1,toplama2){
return toplama1+toplama2;
}
console.log(toplama(2,3));

var toplamsayi = function toplama(toplama1,toplama2){
    return toplama1+toplama2;
}
var toplam=toplamsayi(3,4);
console.log(toplam);

const carpim=(sayi1,sayi2)=> sayi1*sayi2;
console.log(`carpim: ${carpim(10,3)}`);

let deneyim=4;
const gelistirici=deneyim>5?()=>console.log("var"):()=>console.log("yok");
gelistirici();

//1.Yol
function pow(x,n){
    let result=1;
    for(let i=0;i<n;i++){
        result*=x;
    }
    return result;
}

console.log(`pow1.yol:${pow(2,3)}`);

function pow2(x,n){
    if(n==1){
        return x;
    }
    else{
        return x*pow(x,n-1);
    }
}
console.log(`pow2.yol:${pow2(2,3)}`);

{
    var maraba="maraba";
}
console.log(maraba);







console.log("---------------------------------------");


var faktoriyel=document.createElement("h1");
faktoriyel.setAttribute("class","yazi");
body.appendChild(faktoriyel);


function factorial(n){
    if(n==0|| n==1){
        n=1;
        return n;
    }
    else{
        
        for(let sayi=n;sayi<=1;sayi--){
        n=n*(n-1);
        console.log("for icerisi",n);
            
    }
    
    }
    console.log("fonk sonu",n);
    return n;
}
faktoriyel.innerHTML=`faktöriyel sonucu : ${factorial(5)}`;