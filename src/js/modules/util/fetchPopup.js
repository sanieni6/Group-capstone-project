import fetchData from './fetchData.js';
import renderPopup from './renderPopup.js';
import newComment from './newComment.js';
import renderCommentList from './generateCommentList.js';

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
        const formSubmit = document.querySelector('.artworks__modal-comments-add');
        const name = document.getElementById('name');
        const message = document.getElementById('comment');
        closeBtn.addEventListener('click', () => {
          container.removeChild(displayed);
        });
        formSubmit.addEventListener('submit', (event) => {
          event.preventDefault();
          newComment(id, name.value, message.value);
          name.value = '';
          message.value = '';
          setTimeout(() => {
            renderCommentList(id);
          }, 1000);
        });
      }).then(() => {
        renderCommentList(id);
      });
    });
  });
};

export default fetchPopup;