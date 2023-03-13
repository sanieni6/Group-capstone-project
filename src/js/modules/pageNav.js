import pageRender from './pageRender.js';
import artworks from './artworks.js';
import exhibitions from './exhibitions.js';
import shop from './shop.js';
import fetchData from './fetchApi.js';
import counter from './counter.js';
import commentPopUp from './commentWindow.js';
import reservationPopUp from './reservationWindow.js';

const pageMain = document.querySelector('.main');

const pageNav = (navItems, removeClass) => {
  navItems.forEach((tab) => {
    tab.addEventListener('click', (event) => {
      if (event.target.textContent === 'Artworks') {
        removeClass(navItems);
        event.target.classList.add('active');
        pageMain.innerHTML = '';
        // call data from artworks api and rendering on page;
        const URL = 'https://api.artic.edu/api/v1/artworks?limit=20&fields=id,title,artist_display,place_of_origin,credit_line,term_titles,image_id';
        fetchData(URL).then((artworkArr) => {
          pageRender(pageMain, artworks, artworkArr.data);
        }).then(() => {
          const artworksCount = document.querySelector('.artworks__count');
          const artworkCollection = document.querySelectorAll('.artworks__item');
          counter(artworkCollection, artworksCount);
        }).then(() => {
          commentPopUp();
        });
      } else if (event.target.textContent === 'Exhibitions') {
        removeClass(navItems);
        event.target.classList.add('active');
        pageMain.innerHTML = '';
        // call data from exhibition api and rendering on page;
        const URL = 'https://api.artic.edu/api/v1/exhibitions?limit=20&fields=id,title,image_url,short_description';
        fetchData(URL).then((exhibitionArr) => {
          pageRender(pageMain, exhibitions, exhibitionArr.data);
        }).then(() => {
          const exhibitionsCount = document.querySelector('.exhibitions__count');
          const exhibitionsCollection = document.querySelectorAll('.exhibitions__item');
          counter(exhibitionsCollection, exhibitionsCount);
        }).then(() => {
          reservationPopUp();
        });
      } else if (event.target.textContent === 'Shop') {
        removeClass(navItems);
        event.target.classList.add('active');
        pageMain.innerHTML = '';
        pageRender(pageMain, shop);
      }
    });
  });
};

export default pageNav;