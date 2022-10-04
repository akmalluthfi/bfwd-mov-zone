import imageNotFound from '../../img/no-images-found.jpg';

class MovieCard extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set movie(movie) {
    this._movie = movie;
  }

  get movie() {
    return this._movie;
  }

  render() {
    this.innerHTML = `
      <img
        src='${
          this._movie.Poster == 'N/A' ? imageNotFound : this._movie.Poster
        }'
        alt='${this._movie.Title}'
        class='img-fluid rounded-2 mb-2'
      />
      <h6 class='card-title mb-1'>${this._movie.Title}</h6>
      <h6 class='card-subtitle mb-1 text-muted'>${this._movie.Year}</h6>
    `;
    this.classList.add('col-6', 'col-sm-4', 'col-md-3', 'col-lg-2', 'mb-3');
    this.setAttribute('role', 'button');
    this.setAttribute('data-bs-toggle', 'modal');
    this.setAttribute('data-bs-target', '#showMovie');
  }
}

customElements.define('movie-card', MovieCard);
