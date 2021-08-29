const loadMovies = () => {
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=f96ac62d92ada173838748fa0f087eef')
    .then(res => res.json())
    .then(data => getMovies(data.results))
}
loadMovies();

const getMovies = (movies) => {
    const spinner = document.getElementById('spinner');
    spinner.style.display = 'none';
    const movieContainer = document.getElementById('movies-container');
    movies.forEach(movie => {
        //console.log(movie);
        const movieBox = document.createElement('div');
        movieBox.style.height = '';
        movieBox.classList.add('col-md-3');
        const imgUrl ="https://image.tmdb.org/t/p/original" + movie.poster_path;
        movieBox.innerHTML = `
        <div class="shadow rounded-3 py-4 px-2 m-3 text-center">
            <div class="movie-holder">
            <img class="img-fluid h-100" src="${imgUrl}">;
            </div>
            <div class="titel-area">
            <h4 class="fs-4">${movie.title}</h4>
            </div>
            <div class="text-area">
            <p>${movie.overview.slice(0, 80)}</p>
            </div>
           
            <button onclick="getDetails('${movie.id}')" type="button" class="btn btn-secondary">Secondary</button>
        </div>
        `;
        movieContainer.appendChild(movieBox);
    })
}

const getDetails = (movieId) => {
    //console.log(movieId);
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=f96ac62d92ada173838748fa0f087eef`)
    .then(res => res.json())
    .then(data => showMovieDetails(data))
}

const showMovieDetails = (movie) => {
    window.scrollTo(0,0)

    const movieDetails = document.getElementById('movie-details');
    movieDetails.innerHTML = '';
    const movieBox = document.createElement('div');
    const imgUrl ="https://image.tmdb.org/t/p/original" + movie.poster_path;
    movieBox.innerHTML = `
        <div class="image-box">
            <img class="img-fluid h-100" src="${imgUrl}">
        </div>
        <h3 class="fs-3">${movie.title}</h3>
        <p>${movie.overview.slice(0, 100)}</p>
        <p>Production Companies:${movie.production_companies[0].name}</p>
    `;
    movieDetails.appendChild(movieBox);
}