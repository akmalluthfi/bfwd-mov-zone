import './MCard.js';
import notFoundImage from '../../img/not-found.svg';
import waitingToSearchImage from '../../img/waiting-to-search.svg';

class MCardList extends HTMLElement {
  connectedCallback() {
    this.classList.add(
      'row',
      'h-100',
      'align-items-center',
      'justify-content-center'
    );
    this.innerHTML = `
      <div class="text-center">
        <img class="img-fluid" src="${waitingToSearchImage}" alt="Waiting to search!" style="max-width: 150px">
        <p class="pt-4">Waiting to search!</p>
      </div>
    `;
  }

  /**
   * @param {any} movies
   */
  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  render() {
    this.classList.remove(
      'h-100',
      'align-items-center',
      'justify-content-center'
    );
    this.innerHTML = '';
    this._movies.forEach((movie) => {
      const mCard = document.createElement('m-card');
      mCard.movie = movie;
      this.appendChild(mCard);
    });
  }

  renderError(message) {
    this.classList.add('h-100', 'align-items-center', 'justify-content-center');
    this.innerHTML = `
    <div class="text-center">
      <img class="img-fluid" src="${notFoundImage}" alt="${message}" style="max-width: 150px">
      <p class="pt-4">${message}</p>
    </div>
    `;
  }

  loadEffect() {
    this.classList.add('h-100', 'align-items-center', 'justify-content-center');
    this.innerHTML = '<p class="text-center">Searching ...</p>';
  }
}

customElements.define('m-card-list', MCardList);
