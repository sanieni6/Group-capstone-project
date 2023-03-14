import fetchData from './fetchData.js';
import renderPopup from './renderPopup.js';

const renderModal = (modal, content = '') => {
  if (content === '') {
    modal();
  } else {
    modal(content);
  }
};

const fetchPopup = () => {
  const commentBtns = document.querySelectorAll('.comment-btn');
  commentBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
      const id = e.target.id.split('-')[1];
      const URL = `https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,artist_display,place_of_origin,credit_line,term_titles,image_id`;
      fetchData(URL).then((artwork) => {
        renderModal(renderPopup, artwork.data);
      }).then(() => {
        const displayed = document.querySelector('.artworks__modal');
        const container = document.querySelector('.container');
        const closeBtn = document.querySelector('.artworks__modal-btn');
        closeBtn.addEventListener('click', () => {
          container.removeChild(displayed);
        });
      });
    });
  });
};

export default fetchPopup;