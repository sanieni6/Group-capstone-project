import 'reset-css';
import '../scss/styles.scss';
import counter from './modules/counter.js';

import renderHeader from './modules/header.js';
import removeActive from './modules/removeActive.js';
import pageNav from './modules/pageNav.js';
import pageRender from './modules/pageRender.js';
import artworks from './modules/artworks.js';
import fetchData from './modules/fetchApi.js';
import commentPopUp from './modules/commentWindow.js';

renderHeader();

const tablist = document.querySelectorAll('.header__nav-link');
const pageMain = document.querySelector('.main');
const URL = 'https://api.artic.edu/api/v1/artworks?limit=20&fields=id,title,artist_display,place_of_origin,credit_line,term_titles,image_id';

// add event listener to the nav tab
pageNav(tablist, removeActive);

// call data from artworks api and rendering on page;
fetchData(URL).then((artworkArr) => {
  pageRender(pageMain, artworks, artworkArr.data);
}).then(() => {
  const artworksCount = document.querySelector('.artworks__count');
  const artworkCollection = document.querySelectorAll('.artworks__item');
  counter(artworkCollection, artworksCount);
}).then(() => {
  commentPopUp();
});
