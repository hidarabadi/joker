const span =document.getElementById("span");
const btn =document.getElementById("btn");

btn.addEventListener("click",()=>{

fetch("https://v2.jokeapi.dev/joke/Any").then((res)=>{
    
    return res.json()

}).then((data)=>{
if(!data.joke){
    console.error("errore")
}else{
span.innerHTML = data.joke

}
})


});



