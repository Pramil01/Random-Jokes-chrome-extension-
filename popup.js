document.getElementById("button").addEventListener('click',getJoke);
document.addEventListener('DOMContentLoaded', getJoke, false);
function getJoke(){
    var joke = document.getElementById("joke");
    fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious&type=single", {
	    "method": "GET",
    })
    .then(response => response.json())
    .then(data=>{
        joke.innerHTML = data.joke;
    })
    .catch(err => {
        joke.innerHTML = "An error occured while loading the joke :(";
    });
}