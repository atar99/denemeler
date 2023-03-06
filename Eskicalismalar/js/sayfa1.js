let container=document.querySelector(".container");
let button=document.createElement("button");
button.innerHTML="ortala ve renk değiştir";
container.appendChild(button);
button.addEventListener("click",colorchanger);

function colorchanger()
{
    let colors=["red","green","blue","purple","aqua","gray","lime","dimgray","black"];
    rnd=Math.floor(Math.random()*8);
    document.querySelector("body").style.backgroundColor=colors[rnd];
    console.log("color number",rnd,"color is",colors[rnd]);
    button.innerHTML="Renk Değiştir";
    container.setAttribute("class", "ortalibuton");
    rndbtn=Math.floor(Math.random()*8);
    button.style.backgroundColor=colors[rndbtn];
    rndbtntext=Math.floor(Math.random()*8);
    button.style.color=colors[rndbtntext];
}
button.addEventListener("mouseenter",kacanbuton);
function kacanbuton()
{
    rnd=Math.floor(Math.random(0,100))
    rnd2=Math.floor(Math.random(0,100))
    button.style.left=rnd;
    button.style.top=rnd2;


    button.setAttribute("class", "kacanbuton");
console.log("asdsamdn");
}
button.addEventListener("mouseout",kacanbuton);
console.log(button);