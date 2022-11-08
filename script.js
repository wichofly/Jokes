const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

async function generateJoke() {
  const config = {
    headers: {
      'Accept': 'application/json'
    }
  }

  const res = await fetch('https://icanhazdadjoke.com', config)
  const data = await res.json()
  jokeEl.innerHTML = data.joke
}


// Fetch request is built  into the browser. It is a native API
// It is a sync method that means we have to wait each step, in async we do not. Remember de exmaple of a restaurant when 
// the waiter is waiting until one table has everything asked, then the waiter can go to another table. (sync)
// Async the waiter is serving multiple tables while the orders are in process. (async)

// function generateJoke() {
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     }
//     fetch('https://icanhazdadjoke.com', config,)
//         .then((res) => res.json())
//         .then((data) => {
//             jokeEl.innerHTML = data.joke
//         })
// }