export default class MovieRepository {
  constructor(base = 'https://www.omdbapi.com', apikey = 'dca61bcc') {
    this.url = base + '?apikey=' + apikey;
  }

  async search(s) {
    const response = await fetch(this.url + '&s=' + s);
    const result = await response.json();
    if (result.Response === 'False') throw new Error(result.Error);
    return result.Search;
  }
}
