import 'reset-css';
import '../scss/styles.scss';
import renderHeader from './modules/renderHeader.js';
import removeActive from './modules/util/removeActive.js';
import pageNav from './modules/util/pageNav.js';

// render the header section
renderHeader();

// get the nav items from the loaded dom elements
const tablist = document.querySelectorAll('.header__nav-link');

// add event listener to the nav tab
pageNav(tablist, removeActive);
