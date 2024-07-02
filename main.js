async function getRecepy(){
    const response =await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
const data=await response.json();  
const recepy=data.recipes;
const result=recepy.map(function(ele)
{
    return`
    <div class='recipes'>
    <h3>${ele.title}<h3>
    <img src='${ele.image_url}'>
    </div>

    `;
}).join('');
document.querySelector(".data").innerHTML=result;
}
getRecepy();