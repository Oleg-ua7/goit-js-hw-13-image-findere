import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

const key = `19748664-80a2901996a1c8fd030e1b12a`;

export default {
  searchQuery: '',
  page: 1,
  async axiosPixabayApi() {
    const { data } = await axios.get(
      `/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${key}`,
    );
    this.incrementPage();
    return data.hits;
  },

  get query() {
    return this.searchQuery;
  },

  set query(value) {
    this.searchQuery = value;
  },

  incrementPage() {
    this.page += 1;
  },

  resetPage() {
    this.page = 1;
  },
};