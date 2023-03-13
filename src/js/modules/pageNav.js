import artworks from './artworks.js';
import fetchData from './util/fetchData.js';
import counter from './util/counter.js';
import pageRender from './util/pageRender.js';

// get the main element from the dom
const pageMain = document.querySelector('.main');

const pageNav = (navItems, removeClass) => {
  navItems.forEach((tab) => {
    tab.addEventListener('click', (event) => {
      if (event.target.textContent === 'Artworks') {
        // call the remove class function
        removeClass(navItems);

        // add active class to target
        event.target.classList.add('active');

        // clear the content of the main
        pageMain.innerHTML = '';

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

      } else if (event.target.textContent === 'Exhibitions') {
        // call the remove class function
        removeClass(navItems);

        // add active class to target
        event.target.classList.add('active');

        // clear the content of the main
        pageMain.innerHTML = '';

      } else if (event.target.textContent === 'Shop') {
        // call the remove class function
        removeClass(navItems);

        // add active class to target
        event.target.classList.add('active');

        // clear the content of the main
        pageMain.innerHTML = '';

      }
    });
  });
};

export default pageNav;
