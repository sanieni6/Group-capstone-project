import fetchData from './fetchApi.js';
import artworkModal from './artworkModal.js';
import renderModal from './renderModal.js';
import getCommentList from './getComments.js';
import addComment from './addComment.js';

const commentPopUp = () => {
  const commentBtns = document.querySelectorAll('.comment-btn');
  commentBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
      const id = e.target.id.split('-')[1];
      const URL = `https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,artist_display,place_of_origin,credit_line,term_titles,image_id`;
      // call data from artworks api and rendering on page;
      fetchData(URL).then((artwork) => {
        renderModal(artworkModal, artwork.data);
      })
        .then(() => {
          const modelwindow = document.querySelector('.artworks__modal');
          const pageContainer = document.querySelector('.container');
          const closeBtn = document.querySelector('.artworks__modal-btn');
          closeBtn.addEventListener('click', () => {
            pageContainer.removeChild(modelwindow);
          });
        })
        .then(() => {
          getCommentList(id);
        })
        .then(() => {
          addComment(id);
        });
    });
  });
};

export default commentPopUp;