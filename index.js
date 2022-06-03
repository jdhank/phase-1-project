let btn= document.getElementById('btn')

function getMovies(){
    fetch("http://localhost:3000/movies")
    .then(response => response.json())
    .then(data => console.log(data))
    
}
getMovies()
btn.addEventListener('click', (event) => {
    event.preventDefault()
   
    
})


function randomMovie(movies){
    output.textContent = movies.title
}