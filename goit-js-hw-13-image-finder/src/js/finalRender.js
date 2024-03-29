import apiService from './apiService';
import refs from './refs';
import { updatePhotoMarkup, clearUl } from './markup';

function render(e) {
  e.preventDefault();
  if (apiService.query === '') {
    refs.loadMoreBtn.classList.add('is-hiden');
    return;
  }

  apiService.axiosPixabayApi().then(fullObj => {
    updatePhotoMarkup(fullObj);
    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
    });
  });
  refs.loadMoreBtn.classList.remove('is-hiden');
}

function submitRender(e) {
  apiService.resetPage();
  clearUl();
  apiService.query = e.currentTarget.elements.query.value;
  render(e);
}

function clickRender(e) {
  if (refs.inputSearchForm.value === '') {
    refs.loadMoreBtn.classList.add('is-hiden');
    return;
  }
  if (apiService.query !== refs.inputSearchForm.value) {
    apiService.resetPage();
    clearUl();
    apiService.query = refs.inputSearchForm.value;
  }
  render(e);
}

refs.searchForm.addEventListener('submit', e => {
  submitRender(e);
});

refs.loadMoreBtnLink.addEventListener('click', e => {
  clickRender(e);
});