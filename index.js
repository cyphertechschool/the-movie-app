import { movies } from "./db/movies.js";
const movieContainer = document.querySelector(".movie-container");
const input = document.querySelector("input");

// Function to render movies
function renderMovies(movieArray) {
  movieContainer.innerHTML = ""; // Clear previous content

  movieArray.forEach((movie) => {
    const a = document.createElement("a");
    a.classList = "movie-card";
    a.href = `details.html?movie=${movie.id}`;
    a.innerHTML = `<div class="movie-poster"><img src="./db/poster/${movie.poster}" alt=${movie.title} /></div><div class="movie-card__overlay"><h2>${movie.title}</h2><p>${movie.year}</p></div>`;
    movieContainer.append(a);
  });
}

// Event listener for input keydown
input.addEventListener("input", function () {
  const inputValue = input.value.toLowerCase();
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(inputValue)
  );
  renderMovies(filteredMovies);
});

// Initial render
renderMovies(movies);
