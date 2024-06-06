var parag=document.querySelector("p");
var header=document.querySelector("h2");
var bigBtn=document.querySelector(".bigger");
var smallBtn=document.querySelector(".smaller");

function FontSizeToBig()
{
parag.classList.add("bigFont");
header.classList.add("bigFont");
}


function FontSizeToSmall()
{
parag.classList.add("smallFont");
header.classList.add("smallFont");
}
bigBtn.onclick=FontSizeToBig;
smallBtn.onclick=FontSizeToSmall;

