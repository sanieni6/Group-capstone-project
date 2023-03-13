import 'reset-css';
import '../scss/styles.scss';
import renderHeader from './modules/renderHeader.js';
import removeActive from './modules/util/removeActive.js';
import pageNav from './modules/pageNav.js';
import pageRender from './modules/util/pageRender.js';
import counter from './modules/util/counter.js';
import fetchData from './modules/util/fetchData.js';
import artworks from './modules/artworks.js';

// render the header section
renderHeader();

// get the nav items from the loaded dom elements
const tablist = document.querySelectorAll('.header__nav-link');

// get the main element from the dom
const pageMain = document.querySelector('.main');

// add event listener to the nav tab
pageNav(tablist, removeActive);

// define the api url
const URL = 'https://api.artic.edu/api/v1/artworks?limit=20&fields=id,title,artist_display,place_of_origin,credit_line,term_titles,image_id';

// call data from artwork api and render on page
fetchData(URL).then((artworkArr) => {
  // render content on page
  pageRender(pageMain, artworks, artworkArr.data);
}).then(() => {
  // get the count element
  const artworksCount = document.querySelector('.artworks__count');

  // get the artwork card elements
  const artworkCollection = document.querySelectorAll('.artworks__item');

  // call the count function
  counter(artworkCollection, artworksCount);
}).then(() => {
  // add render comment pop-up here
});
