let randomBtn= document.getElementById('btn')
let randomMovieTitle = document.getElementById('randomMovieTitle')
let genreButton = document.getElementById('genreBtn')
let randomMovieRating = document.getElementById('randomMovieRating')
const genreList = document.getElementById("genre-list")
let nav = document.getElementById("nav")
let movies
let genre
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

function makeDropdownButtons(){
    let genreArray = ["Comedy", "Drama", "Family", "Horror", "Action"]
    genreArray.forEach(genre =>{
        const li = document.createElement("li")
        const genreATag = document.createElement("a")
        genreATag.textContent = genre
        genreATag.href = "#!"
        li.id = genre
        let dropdown = document.getElementById('dropdown1')
        li.append(genreATag)
        dropdown.append(li)
    })
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

dropdown1.addEventListener('click', (event) => {
    console.log(event.target.textContent)
    genreList.innerHTML = ""
    getGenre(event.target.textContent)
})


document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.dropdown-trigger');
    let options = {}
    let instances = M.Dropdown.init(elems, options);
    makeDropdownButtons()
    getMovies()
  });





