// Recive data from a url or link

const loadMovies = () =>{
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=f96ac62d92ada173838748fa0f087eef')
.then(res => res.json())
.then(data => setMovies(data.results))
}
loadMovies();

// Set Data on page or inner HTML 

const setMovies = (movies) => {
    //  add spinner 
    const movieSpenner = document.getElementById('movie-spinner');
    movieSpenner.style.display = 'none';
    const movieContainer = document.getElementById('movie-container');
    movies.forEach(movie => {
        // console.log(movie); 
        const movieBox = document.createElement('div');
        movieBox.classList.add('col-md-4');
        const imageUrl = "https://image.tmdb.org/t/p/original" + movie.poster_path
        movieBox.innerHTML = `
        <div class="mbox shadow rounded-3 p-3 m-2 text-center">
            <div class="imageBox text-center">
                <img class="img-fluid h-75 mt-4" src="${imageUrl}">
            </div>
            <h4 >${movie.title}</h4>
            <p>${movie.overview.slice(0, 160)}</p>
            <button onclick="loadMovieDetails('${movie.id}')" class="bg-secondary py-2 px-4 rounded-3 fs-5 text-white">See Details</button>
        </div>
        `;
         movieContainer.appendChild(movieBox);
    });
}

// Load More Data to Dispaly Details by clicking a button or div

const loadMovieDetails = (id) => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f96ac62d92ada173838748fa0f087eef`)
    .then(res => res.json())
    .then(data => setMovieDetails(data))
    // console.log('clicked');
    window.scrollTo(0, 0);
}

// Display Details information 
const setMovieDetails = (movie) => {
    console.log(movie);
    const movieDetails =document.getElementById('movie-details');
    movieDetails.innerHTML = '';
    const movieBox = document.createElement('div');
    const imageUrl = "https://image.tmdb.org/t/p/original" + movie.poster_path
    movieBox.innerHTML = `
    <div class="mx-auto imageBox">
        <img class="img-fluid h-100" src="${imageUrl}">
    </div>
    <h3>Movie Name:${movie.original_title}</h3>
    `;
    movieDetails.appendChild(movieBox);
}


