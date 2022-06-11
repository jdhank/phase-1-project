let randomBtn= document.getElementById('btn')
let randomMovieTitle = document.getElementById('randomMovieTitle')
let genreButton = document.getElementById('genreBtn')
let randomMovieRating = document.getElementById('randomMovieRating')
let comedy = document.getElementById('comedy')
let drama = document.getElementById('drama')
let family = document.getElementById('family')
let horror = document.getElementById('horror')
let action = document.getElementById('action')
const genreList = document.getElementById("genre-list")


function getRandomMovies(){
    fetch("http://localhost:3000/movies")
    .then (response => response.json())
    .then(data => {
        console.log(data);
        let randomMovie = data[Math.floor(Math.random() * data.length)]
    randomMovieTitle.innerHTML = randomMovie.title
    randomMovieRating.innerHTML = `Rating: ${randomMovie.rating}`
    })
}
function getComedy(){
    fetch("http://localhost:3000/movies")
    .then(response => response.json())
    .then(data => {
       console.log(data)
       const genres = data
    .map(movie =>{
        const li = document.createElement("li")
        if (movie.genre === "Comedy")
li.textContent = `${movie.title} - Rating: ${movie.rating} `
        genreList.append(li)
         })
      })
    }

function getDrama(){
    fetch("http://localhost:3000/movies")
    .then(response => response.json())
    .then(data => {
       console.log(data)
       const genres = data
    .map(movie =>{
        const li = document.createElement("li")
        if (movie.genre === "Drama")
li.textContent = `${movie.title} - Rating: ${movie.rating} `
        genreList.append(li)
         })
      })
    }

function getFamily(){
    fetch("http://localhost:3000/movies")
    .then(response => response.json())
    .then(data => {
       console.log(data)
       const genres = data
    .map(movie =>{
        const li = document.createElement("li")
        if (movie.genre === "Family")
li.textContent = `${movie.title} - Rating: ${movie.rating} ` 
        genreList.append(li)
         })
      })
    }

function getHorror(){
    fetch("http://localhost:3000/movies")
    .then(response => response.json())
    .then(data => {
       console.log(data)
       const genres = data
    .map(movie =>{
        const li = document.createElement("li")
        if (movie.genre === "Horror")
li.textContent =  `${movie.title} - Rating: ${movie.rating} `
        genreList.append(li)
         })
      })
    }
 
function getAction(){
    fetch("http://localhost:3000/movies")
    .then(response => response.json())
    .then(data => {
       console.log(data)
       const genres = data
    .map(movie =>{
        const li = document.createElement("li")
        if (movie.genre === "Action")
li.textContent =  `${movie.title} - Rating: ${movie.rating} `
        genreList.append(li)
         })
      })
    }    
randomBtn.addEventListener('click', (event) => {
    event.preventDefault()
    console.log("clicked random button")
    getRandomMovies()
})

genreButton.addEventListener('click', (event) => {
    console.log("clicked genre button")
})

comedy.addEventListener('click', (event) => {
    console.log("clicked comedy button")
    genreList.innerHTML = ""
    getComedy()
    
})
drama.addEventListener('click', (event) => {
    console.log("clicked drama button")
    genreList.innerHTML = ""
    getDrama()
})

family.addEventListener('click', (event) => {
    console.log("clicked family button")
    genreList.innerHTML = ""
    getFamily()
})

horror.addEventListener('click', (event) => {
    console.log("clicked horror button")
    genreList.innerHTML = ""
    getHorror()
})

action.addEventListener('click', (event) => {
    console.log("clicked action button")
    genreList.innerHTML = ""
    getAction()
})
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var options = {}
    var instances = M.Dropdown.init(elems, options);
  });






