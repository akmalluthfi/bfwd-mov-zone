import '../scss/styles.scss';
import MovieService from './services/MovieService.js';
const debounce = require('lodash.debounce');
import Modal from 'bootstrap/js/dist/modal';

document.addEventListener('DOMContentLoaded', () => {
  const searchEl = document.getElementById('search');
  searchEl.addEventListener(
    'input',
    debounce(() => {
      const movieService = new MovieService();
      movieService.search(this.value);
    }, 500)
  );
});
