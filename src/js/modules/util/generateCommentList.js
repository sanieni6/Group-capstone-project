import fetchData from './fetchData.js';
import commentsCounter from './commentsCounter.js';

const renderCommentList = (id) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yf6dqoUrsU3EfHXvC1i4/comments?item_id=${id}`;
  const ulElement = document.querySelector('.artworks__modal-comments-list');
  const commentCounter = document.querySelector('.artworks__modal-comments-count');
  fetchData(url).then((data) => {
    if (data === 'no data') {
      const noComment = 'No comments';
      ulElement.innerHTML = `<li class="artworks__modal-comments-item">${noComment}</li>`;
    } else {
      const renderedList = data.map((comment) => `<li class="artworks__modal-comments-item">${comment.creation_date} ${comment.username}: ${comment.comment}</li>`).join('');
      ulElement.innerHTML = renderedList;
    }
  }).then(() => {
    const liElements = document.querySelectorAll('.artworks__modal-comments-item');
    commentsCounter(liElements, commentCounter);
  });
};

export default renderCommentList;