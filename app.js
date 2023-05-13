let button = document.querySelector(".btn");

async function getCatFact(){
    let response = await fetch("https://cat-fact.herokuapp.com/facts");
    let data = await response.json();
    
    let catFact = document.querySelector(".cat-fact");
    let randomnumber = Math.floor(Math.random()*data.length);
    catFact.innerHTML = data[randomnumber].text;
}
button.addEventListener("click",()=>{
    getCatFact();
})
