class MCard extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set movie(movie) {
    this._movie = movie;
  }

  render() {
    this.innerHTML = `
      <img
        src='${this._movie.Poster}'
        alt='${this._movie.Title}'
        class='img-fluid rounded-2 mb-2'
      />
      <h6 class='card-title mb-1'>${this._movie.Title}</h6>
      <h6 class='card-subtitle mb-1 text-muted'>${this._movie.Year}</h6>
    `;

    this.classList.add('col-6', 'col-sm-4', 'col-md-3', 'col-lg-2', 'mb-3');
  }
}

customElements.define('m-card', MCard);
