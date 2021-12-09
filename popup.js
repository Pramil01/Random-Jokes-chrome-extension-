document.getElementById("button").addEventListener("click", getJoke);
document.addEventListener("DOMContentLoaded", getJoke, false);
function getJoke() {
  var joke = document.getElementById("joke");
  fetch("https://v2.jokeapi.dev/joke/Any")
    .then((response) => response.json())
    .then((data) => {
      if (data.type === "twopart") {
        joke.innerHTML = data.setup;
        joke.innerHTML += "\n" + data.delivery;
      } else {
        joke.innerHTML = data.joke;
      }
    })
    .catch((err) => {
      joke.innerHTML = "An error occured while loading the joke :(";
    });
}
