import { movies } from "./db/movies.js";
// get query string from url
const urlParams = new URLSearchParams(window.location.search);
var movieIdToFind = urlParams.get("movie");

// Function to find a movie by its ID
function findMovieById(movieId) {
  return movies.find(function (movie) {
    return movie.id === parseInt(movieId);
  });
}

// Example: Find a movie with ID 2
const movie = findMovieById(movieIdToFind);

console.log(movieIdToFind);
console.log(movie);

// creata movie details
const detailContainer = document.createElement("div");

detailContainer.innerHTML = `
      <div class="detail-container">
        <div class="detail_cover">
          <img src="./db/poster/${movie.cover}" alt="${movie.title}" />
          <a href='/' class='back'>Back</a>
          <h2 class='movie-title'>${movie.title}</h2>
        </div>
        <div class="container">  
          <div class="detail-body"> 
            <div class="detail_poster">
            <img src="./db/poster/${movie.poster}" alt="${movie.title}" />
              <div class="detail_rating">${movie.rating}</div>
            </div>
            <div class="detail_content">
              <div class="detail_heading">
                <h2>${movie.title}</h2>
              </div>
              <div class="detail_heading">
                <h2>directors</h2>
                <p>${movie.directors}</p>
              </div>
              <div class="detail_heading">
                <h2>writers</h2>
                <p>${movie.writers}</p>
              </div>
              <div class="detail_heading">
                <h2>production</h2>
                <p>${movie.production}</p>
              </div>
              <div class="detail_heading">
                <h2>Genre</h2>
                  <span>${movie.tags[0]}</span> 
                  <span>${movie.tags[1]}</span>
              </div>
            </div>
          </div>

          <p class="detail_description">
          ${movie.description}
          </p>
          <div class="detail_video">
          ${movie.trailer}
          </div>
      </div>
    </div> 
    
      `;
document.querySelector(".main").appendChild(detailContainer);
