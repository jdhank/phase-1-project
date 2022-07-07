let randomBtn= document.getElementById('btn')
let randomMovieTitle = document.getElementById('randomMovieTitle')
let genreButton = document.getElementById('genreBtn')
let randomMovieRating = document.getElementById('randomMovieRating')
// let comedy = document.getElementById('comedy')
// let drama = document.getElementById('drama')
// let family = document.getElementById('family')
// let horror = document.getElementById('horror')
// let action = document.getElementById('action')
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

function makeDropdownButtons(){
    let genreArray = ["Comedy", "Drama", "Family", "Horror", "Action"]
    genreArray.forEach(genre =>{
        const li = document.createElement("li")
        const genreATag = document.createElement("a")
        genreATag.textContent = genre
        genreATag.href = "#!"
        li.id = genre
        li.addEventListener('click', console.log(genre))
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

genreButton.addEventListener('click', (event) => {
    console.log("clicked genre button")
})





document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.dropdown-trigger');
    let options = {}
    let instances = M.Dropdown.init(elems, options);
    makeDropdownButtons()
    getMovies()
  });





