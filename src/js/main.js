import '../scss/styles.scss';
import MovieService from './services/MovieService.js';

document.addEventListener('DOMContentLoaded', () => {
  const searchEl = document.getElementById('search');
  searchEl.addEventListener('keyup', function () {
    const movieService = new MovieService();
    movieService.search(this.value);
  });
});
