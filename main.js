var parag=document.querySelector("p");
var header=document.querySelector("h2");
var bigBtn=document.querySelector(".bigger");
var smallBtn=document.querySelector(".smaller");

function FontSizeToBig()
{
parag.classList.add("bigFont");
header.classList.add("bigFont");
parag.classList.remove("smallFont");
header.classList.remove("smallFont");
}


function FontSizeToSmall()
{
parag.classList.add("smallFont");
header.classList.add("smallFont");
header.classList.remove("bigFont");
parag.classList.remove("bigFont");

}
bigBtn.onclick=FontSizeToBig;
smallBtn.onclick=FontSizeToSmall;

