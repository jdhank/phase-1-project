let btn= document.getElementById('btn')
let randomMovieTitle = document.getElementById('randomMovieTitle')
let genreButton = document.getElementById('genreBtn')
let randomMovieRating = document.getElementById('randomMovieRating')

function displayRandomMovie(data){
    let randomMovie = data[Math.floor(Math.random() * data.length)]
    randomMovieTitle.innerHTML = randomMovie.title
    randomMovieRating.innerHTML = randomMovie.rating




}

function getMovies(){
    fetch("http://localhost:3000/movies")
    .then (response => response.json())
    .then(data => {
        console.log(data);
        displayRandomMovie(data)
    })
}






btn.addEventListener('click', (event) => {
    event.preventDefault()
    console.log("clicked")
    getMovies()
})

genreButton.addEventListener('click', (event) => {
   
    console.log("clicked")
    M.AutoInit();
})

