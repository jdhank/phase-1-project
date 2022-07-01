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
let nav = document.getElementById("nav")
let movies
function getMovies(){
    fetch("http://localhost:3000/movies")
    .then(response => response.json())
    .then(data => {
        movies = data
    })
}

function getRandomMovies(){
    randomMovie = movies[Math.floor(Math.random() * movies.length)]
        randomMovieTitle.innerHTML = randomMovie.title
        randomMovieRating.innerHTML = `Rating: ${randomMovie.rating}`
    
}

function getGenre(genre){
        movies.forEach(movie =>{
            const li = document.createElement("li")
            if (movie.genre === genre){
                li.textContent = `${movie.title} - Rating: ${movie.rating} `
                genreList.append(li)
            }   
        })
}

function makeBold(){
    randomMovieTitle.style.fontWeight = "bold"
    randomBtn.textContent = "We Hope You Enjoy Your Movie!"

}
randomBtn.addEventListener('click', getRandomMovies)

randomBtn.addEventListener('mouseover', makeBold)

genreButton.addEventListener('click', (event) => {
    console.log("clicked genre button")
})

comedy.addEventListener('click', (event) => {
    console.log("clicked comedy button")
    genreList.innerHTML = "" 
    getGenre("Comedy")
})
drama.addEventListener('click', (event) => {
    console.log("clicked drama button")
    genreList.innerHTML = ""
    getGenre("Drama")
})

family.addEventListener('click', (event) => {
    console.log("clicked family button")
    genreList.innerHTML = ""
    getGenre("Family")
})

horror.addEventListener('click', (event) => {
    console.log("clicked horror button")
    genreList.innerHTML = ""
    getGenre("Horror")
})

action.addEventListener('click', (event) => {
    console.log("clicked action button")
    genreList.innerHTML = ""
    getGenre("Action")
})



document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.dropdown-trigger');
    let options = {}
    let instances = M.Dropdown.init(elems, options);
    getMovies()
  });





