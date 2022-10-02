import '../scss/styles.scss';
import MovieService from './services/MovieService.js';
const debounce = require('lodash.debounce');

document.addEventListener('DOMContentLoaded', () => {
  const searchEl = document.getElementById('search');
  searchEl.addEventListener('input', debounce(MovieService.search, 500));
});
