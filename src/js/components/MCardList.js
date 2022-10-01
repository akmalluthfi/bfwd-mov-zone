import './MCard.js';

class MCardList extends HTMLElement {
  connectedCallback() {
    this.classList.add(
      'row',
      'h-100',
      'align-items-center',
      'justify-content-center'
    );
    this.innerHTML = '<h4 class="text-center">Type Something</h4>';
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
    this.innerHTML = `<h4 class="text-center">${message}</h4>`;
  }

  loadEffect() {
    this.innerHTML = `
      <div class="spinner-grow text-primary" style="width: 3rem; height: 3rem;" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    `;
  }
}

customElements.define('m-card-list', MCardList);
