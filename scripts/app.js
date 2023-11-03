const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterURL');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favoriteMovieTitle');

let tileInStorage = localStorage.getItem('title');
let imageUrlInStorage = localStorage.getItem('imageUrl');

if(movieTitleInStorage && imageUrlInStorage){
    movieTitleToDisplay.textContent = movieTitleInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(72, 72, 137, 0.587)), url('${imageUrlInStorage}')`;
}


btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let movieUrlInput = moviePosterUrl.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageUrl', movieUrlInput)
   // console.log(movieTitleInput);
    //console.log(movieUrlInput);
    movieTitleToDisplay.textContent = movieTitleInput;
    container.Style.backgroundImage = `linear-gradient(rgba(72, 72, 137, 0.587)),
     url('${movieUrlInput}')`;
     movieTitle.value = '';
     moviePosterUrl.value = '';


});


