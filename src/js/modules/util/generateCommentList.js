import fetchData from './fetchData.js';

const renderCommentList = (id) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yf6dqoUrsU3EfHXvC1i4/comments?item_id=${id}`;
  const ulElement = document.querySelector('.artworks__modal-comments-list');

  fetchData(url).then((data) => {
    const renderedList = data.map((comment) => `<li class="artworks__modal-comments-item">${comment.creation_date} ${comment.username}: ${comment.comment}</li>`).join('');
    ulElement.innerHTML = renderedList;
  });
};

export default renderCommentList;