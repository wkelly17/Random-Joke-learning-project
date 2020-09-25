///! Built from Scrimba Module 7, following tutor Jesse Hall...

const setupDiv = document.querySelector("#setup");
const punchlineDiv = document.querySelector("#punchline");
const punchlineBtn = document.querySelector("#punchlineBtn");
const newJokeBtn = document.querySelector("#newJokeBtn");
let punchline;

// Create 4 variables and assign them to their respective elements: setupDiv, punchlinDiv, punchlineBtn, newJokeBtn

async function getJoke() {
  const jokePromise = await fetch(
    "https://official-joke-api.appspot.com/jokes/programming/random"
  );
  const joke = await jokePromise.json();
  console.log(joke);
  setupDiv.textContent = joke[0].setup;
  punchline = joke[0].punchline;
  punchlineBtn.classList.toggle("hidden");
  newJokeBtn.classList.toggle("hidden");
  punchlineDiv.textContent = "";
  punchlineDiv.classList.remove("bubble");

}
getJoke();




punchlineBtn.addEventListener("click", getPunchline);
function getPunchline() {
  punchlineDiv.textContent = punchline;
  punchlineDiv.classList.add("bubble");
  punchlineBtn.classList.toggle("hidden");
  newJokeBtn.classList.toggle("hidden");
}


newJokeBtn.addEventListener('click', getJoke)