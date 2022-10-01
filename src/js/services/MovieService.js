import MovieRepository from '../repositories/MovieRepositoy.js';
import '../components/MCardList.js';

let queryTime;

export default class MovieService {
  constructor() {
    this.repository = new MovieRepository();
    this.element = document.querySelector('m-card-list');
  }

  search(s) {
    if (queryTime) {
      clearTimeout(queryTime);
    }

    queryTime = setTimeout(async () => {
      if (s.length === 0) {
        this.element.connectedCallback();
        return;
      }
      try {
        const movies = await this.repository.search(s);
        this.renderMovie(movies);
      } catch (error) {
        this.renderError(error);
      }
    }, 300);
  }

  renderMovie(movies) {
    this.element.movies = movies;
  }

  renderError(error) {
    this.element.renderError(error);
  }
}
