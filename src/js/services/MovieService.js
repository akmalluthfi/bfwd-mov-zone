import MovieRepository from '../repositories/MovieRepositoy.js';
import '../components/MCardList.js';

export default class MovieService {
  static async search() {
    const repository = new MovieRepository();
    const element = document.querySelector('m-card-list');

    if (this.value.length === 0) {
      element.connectedCallback();
      return;
    }

    try {
      element.loadEffect();
      const movies = await repository.search(this.value);
      element.movies = movies;
    } catch (error) {
      element.renderError(error);
    }
  }
}
