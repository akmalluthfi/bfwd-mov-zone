import MovieRepository from '../repositories/MovieRepositoy.js';
import '../components/MovieCard.js';
import notFoundImage from '../../img/not-found.svg';
import waitingToSearchImage from '../../img/waiting-to-search.svg';

export default class MovieService {
  constructor() {
    this.repository = new MovieRepository();
    this.wrapper = document.getElementById('movie-list');
  }

  async search(s) {
    if (s.length === 0) {
      this.renderWaitingToSearch;
      return;
    }
    try {
      this.loadEffect();
      const movies = await this.repository.search(s);
      this.renderMovies(movies);
    } catch (error) {
      this.renderError(error);
    }
  }

  renderMovies(movies) {
    this.wrapper.classList.remove(
      'h-100',
      'align-items-center',
      'justify-content-center'
    );
    this.wrapper.innerHTML = '';
    movies.forEach((movie) => {
      const movieCard = document.createElement('movie-card');
      movieCard.movie = movie;
      movieCard.addEventListener('click', () => {
        this.showModal(movie.imdbID);
      });
      this.wrapper.appendChild(movieCard);
    });
  }

  async showModal(id) {
    try {
      this.renderModalPlaceholder();
      const movie = await this.repository.find(id);
      this.renderModal(movie);
    } catch (error) {
      this.renderError(error);
    }
  }

  renderModalPlaceholder() {
    const modal = document.getElementById('showMovie');
    modal.querySelector('#showMovieLabel').innerHTML = `
    <p class="card-text placeholder-glow placeholder-lg">
      <span class="placeholder col-8"></span>
    </p>
    `;
    modal.querySelector('.modal-body').innerHTML = `
      <div class="row justify-content-center">
        <div class="col-8 col-sm mb-3 col-lg-4 placeholder placeholder-glow">
          <div class="img-placeholder"></div>
        </div>
        <div class="col-12 col-sm-7">
          <p class="card-text placeholder-glow placeholder-lg">
            <span class="placeholder col-8"></span>
          </p>
          <p class="card-text placeholder-glow placeholder-lg">
            <span class="placeholder col-12"></span>
            <span class="placeholder col-12"></span>
            <span class="placeholder col-6"></span>
          </p>
          <p class="card-text placeholder-glow placeholder-lg">
            <span class="placeholder col-8"></span>
            <span class="placeholder col-8"></span>
            <span class="placeholder col-8"></span>
            <span class="placeholder col-8"></span>
          </p>
        </div>
      </div>
    `;
  }

  renderModal(movie) {
    const modal = document.getElementById('showMovie');
    modal.querySelector('#showMovieLabel').innerHTML = movie.Title;
    modal.querySelector('.modal-body').innerHTML = `
      <div class="row justify-content-center">
        <div class="col-8 col-sm mb-3 col-lg-4">
          <img
            src="${movie.Poster == 'N/A' ? imageNotFound : movie.Poster}"
            alt="${movie.Title}"
            class="img-fluid"
          />
        </div>
        <div class="col-12 col-sm-7">
          <p class="fw-semibold m-0 mb-lg-2">Sinopsis : </p>
          <p>${movie.Plot}</p>
          <p class="m-0 mb-lg-2">
            <span class="fw-semibold">Rating : </span>${movie.imdbRating}/10
          </p>
          <p class="m-0 mb-lg-2">
            <span class="fw-semibold">Genre : </span>${movie.Genre}
          </p>
          <p class="m-0 mb-lg-2">
            <span class="fw-semibold">Releashed : </span> ${movie.Released}
          </p>
          <p class="m-0 mb-lg-2">
            <span class="fw-semibold">Runtime: </span> ${movie.Runtime}
          </p>
        </div>
      </div>
    `;
  }

  renderWaitingToSearch() {
    this.wrapper.innerHTML = `
    <div class="text-center">
      <img class="img-fluid" src="${waitingToSearchImage}" alt="Waiting to search!" style="max-width: 150px">
      <p class="pt-4">Waiting to search!</p>
    </div>
    `;
  }

  renderError(message) {
    this.wrapper.classList.add(
      'h-100',
      'align-items-center',
      'justify-content-center'
    );
    this.wrapper.innerHTML = `
    <div class="text-center">
      <img class="img-fluid" src="${notFoundImage}" alt="${message}" style="max-width: 150px">
      <p class="pt-4">${message}</p>
    </div>
    `;
  }

  loadEffect() {
    this.wrapper.classList.add(
      'h-100',
      'align-items-center',
      'justify-content-center'
    );
    this.wrapper.innerHTML = '<p class="text-center">Searching ...</p>';
  }
}
