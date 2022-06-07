let btn= document.getElementById('btn')
let output = document.getElementById('output')

function displayRandomMovie(data){
    let randomMovie = data[Math.floor(Math.random() * data.length)]
    output.innerHTML = randomMovie.title

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

    
   
    



