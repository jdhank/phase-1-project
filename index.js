let btn= document.getElementById('btn')
let randomMovieTitle = document.getElementById('randomMovieTitle')
let genreButton = document.getElementById('genreBtn')
let randomMovieRating = document.getElementById('randomMovieRating')
let comedy = document.getElementById('comedy')
let drama = document.getElementById('drama')
let family = document.getElementById('family')
let horror = document.getElementById('horror')
let action = document.getElementById('action')

function displayRandomMovie(data){
    let randomMovie = data[Math.floor(Math.random() * data.length)]
    randomMovieTitle.innerHTML = randomMovie.title
    randomMovieRating.innerHTML = randomMovie.rating
}

function getRandomMovies(){
    fetch("http://localhost:3000/movies")
    .then (response => response.json())
    .then(data => {
        console.log(data);
        displayRandomMovie(data)
    })
}
function getMoviesByGenre(){
    fetch("http://localhost:3000/movies")
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
}





btn.addEventListener('click', (event) => {
    event.preventDefault()
    console.log("clicked random button")
    getRandomMovies()
})

genreButton.addEventListener('click', (event) => {
    console.log("clicked genre button")
    
 
})

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var options = {}


    var instances = M.Dropdown.init(elems, options);
  });

  comedy.addEventListener('click', (event) => {
    console.log("clicked comedy button")
    getMoviesByGenre()


})




