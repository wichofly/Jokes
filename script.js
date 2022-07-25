const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn')

generateJoke()

function generateJoke() {
    fetch('https://icanhazdadjoke.com')
}